var express = require('express');
const db = require('../models');
// const app = express();


const router = express.Router();



router.get('/shippers', async (req, res, next) => {
  try {
    const query = req.query; // Lấy thông tin query trên url
    const id = req.params;
    const response = await db.Shipper.findAll();
    res.status(200).json(response)
  } catch (error) {
    throw Error(error.message)
  }
})

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

// router.post('/shippers', async (req, res, next) => {
//   const data = req.body
//   try {
//     // insert into shippers value() 
//     const response = await db.Shipper.create(data);
//     if (response) {
//       res.status(200).json({httpCode: 200, result: response})
//     };
//   } catch (error) {
//     throw Error(error.message)
//   }
// })

router.delete('/shippers', async ( req, res, next) => {
  const {shipperId} = req.params;
  console.log('========>', req.params);
  try {
    const response = await db.Shipper.destroy({where : { id : shipperId} });
    console.log('=============>',response);
    res.status(200).json({ httpCode: 200, result: 'xoa dc roi '});
  }
  catch (error) {
    throw Error(error.message)
  }
})
// app.get('/users/:id', async (req, res, next) => {
//   try {
//     // Lấy thông tin params trên url
//     const id = req.params;
//     const response = await db.UsersTest.findOne({ where: { id } })
//   } catch (error) {
//     throw Error(error.message)
//   }
// })




// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// // raw query
// const sequelize = db.sequelize;
// sequelize.query('select * from users limit 20').then(result => {
//   console.log('===============>', result);
// })




module.exports = router;