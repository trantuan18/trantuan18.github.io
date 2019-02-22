import {Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')

export default {
    number:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'grey',
        flex: 1
    },
    number0:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'grey',
        flex:2,
    },
    gop: {
        flex: 1,
        flexDirection :  'row',
        backgroundColor: 'red',
    },
    view: {
        flex:3,
    }
}