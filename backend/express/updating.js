const { conn } = require('../models/userModel')

const jas = async ()=>{
    try {
        const products = conn.db.collection("products")
        const pro = await products.updateMany({brand:"Samsung"},{$set :{brand:"samsung"}},()=>{
            console.log('it is done')
        })
        
        console.log(pro)
    } catch (error) {
        console.log("error")
        console.log(error)
    }

}
conn.on('connected',()=>{

    jas();
})