var express = require('express');
const router = express.Router();
const db = require('../models');
// const app = express();


router.get('/shippers', async (req, res, next) => {
  try {
    const query = req.query; // Lấy thông tin query trên url
    const id = req.params;
    const response = await db.Shipper.findAll();
    res.status(200).json({
      result: response,
      httpCode: 200
    })
  } catch (error) {
    throw Error(error.message)
  }
})

// lấy tất cả thông tin 
router.get('/teams', async (req, res, next) => {
  try {
    const query = req.query; // Lấy thông tin query trên url
    const id = req.params;
    const response = await db.Team.findAll();
    res.status(200).json(response)
  } catch (error) {
    throw Error(error.message)
  }
})

router.post('/shippers', async (req, res, next) => {
  const data = req.body
  try {
    // insert into shippers value() 
    const response = await db.Shipper.create(data);
    if (response) {
      res.status(200).json({
        httpCode: 200,
        result: response
      })
    };
  } catch (error) {
    throw Error(error.message)
  }
})

// lấy thông tin theo id
router.get('/shippers/:ShipperId', async (req, res, next) => {

  const shipperId = req.params.ShipperId;
  // const data = req.body;

  try {
    // Lấy thông tin params trên url
    const response = await db.Shipper.findOne({
      where: {
        id: Number(shipperId)
        // id: data.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    throw Error(error.message)
  }
})

router.delete('/shippers/:ShipperId', async (req, res, next) => {
  const {
    shipperId
  } = req.params;
  console.log('===============>re', req.params);

  try {
    const response = await db.Shipper.destroy({
      where: {
        id: shipperId
      }
    })
    console.log('===============>', response);
    res.status(200).json({
      httpCode: 200,
      message: "xoa thanh cong"
    });
  } catch (error) {
    throw Error(error.message)
  }
})

// router.put('') : update toan bo truong
router.put('/shippers/:shipperId', async (req, res, next) => {
  const data = req.body;
  const id = req.params.shipperId;
  const test = '';
  console.log('===============>', data);
  const dbOrigin = await db.Shipper.findAll({
    where: {
      id : { $ne : Number(id) }
    }
  })
  // Select * from shipper where id = id;
  try {
    const shipper = await db.Shipper.findOne({
      where: {
        id: Number(id)
      }
    })
    if (!shipper) {
      return res.status(400).json({
        httpCode: 400,
        message: 'Shipper khong ton tai trong he thong',
        name: "UPDATE_SHIPPER_ERROR"
      })
    }

    // validation data
    const validation = validateData(data);
    const validationEmail = validateEmail(data);
    const validationName = validateName(data,dbOrigin);
    if (!validation.status || !validationEmail.status || !validationName.status) {
      return res.status(400).json({
        failures: [validation.failures, validationEmail.failures, validationName.failures],
        name: "UPDATE_SHIPPER_ERROR",
        httpCode: 400
      })
    }
    if (validationName){ console.log('ahihi')}
    // UPDATE shippers
    // SET name = data.name, email = data.emai, ...
    // WHERE condition;
    const response = await db.Shipper.update(data, {
      where: {
        id: data.id
      },
      returning: true
    });
    if (response)
      res.status(200).json({
        response,
        httpCode: 200
      })
    else next();
  } catch (error) {
    throw Error(error.message)
  }
})

// router.patch(''): update 1 vài trường

// kiểm tra trường rỗng
function validateData(data) {
  const result = {
    status: true,
    failures: []
  }

  // dinh nghia cac truong bat buoc cua shipper 
  const requireProperty = [{
      field: 'name',
      title: 'Name'
    },
    {
      field: 'email',
      title: 'Email'
    },
    {
      field: 'mobile',
      title: 'Mobile'
    },
  ]

  requireProperty.forEach((pro) => {
    if (!data[pro.field] || data[pro.field] === '') {
      result.status = false;
      result.failures.push({
        field: pro.field,
        message: `Please input ${pro.title}`
      });
    }
  })

  return result

}

// kiểm tra email
function validateEmail(data) {
  const result = {
    status: true,
    failures: []
  }
  // dinh nghia truong email cua shipper 
  const requireProperty = 
    {
      field: 'email',
      title: 'Email'
    }
  
  if ( data[requireProperty.field].match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null ){
    result.status = false;
    result.failures.push({
        field: requireProperty.field,
        message: `Please input your real ${requireProperty.title}`
    });
  }
  return result
}

// kiểm tra trùng tên 

function validateName(data,dbOrigin) {
  const result = {
    status: true,
    failures: []
  }
  const requireProperty = [{
    field: 'name',
    title: 'Name'
  }]
  // dinh nghia cac truong bat buoc cua shipper 
  let lent = dbOrigin.length ;
  for ( let i = 0; i < lent; i++){
    if(dbOrigin[i].name == data.name ) {
      result.status = false 
      result.failures.push({
        field: requireProperty.field,
        message: `The name - ${data.name} - already has a user`
      });
    }
  }

  return result

}




module.exports = router;