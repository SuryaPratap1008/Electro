const express = require("express");
const router = express.Router();
const { conn } = require("../../models/userModel");



router.get("/:category/:brand", async (req, res) => {
  if (req.params.brand !== "all"){
      try {
      const products = await conn.db.collection("products");
      const target = await products
        .find({ category:req.params.category,brand:req.params.brand}).toArray();
      res.send({payload:target,success:true});
    } catch (error) {
     res.send({success:false,payload:[]})
    }

  }
  else{
    try {
        const products =  conn.db.collection("products");

        const target = await products
          .find({ category:req.params.category}).toArray();
          
          res.send({payload:target,success:true});
      } catch (error) {
        res.send({success:false,payload:[]})
      }
  }
});
router.get('/:tag',async (req,res)=>{
    try{
    const products = conn.db.collection("products")
  
    const target = await products.find({tag:req.params.tag}).toArray()
    console.log(target.length)
    res.send({payload:target,success:true})
  }
    catch (error){
      res.send({error:error,success:false})
  }})

router.get('/:category/b/brands',async (req,res)=>{
  try {
 
    const products = conn.db.collection('products')
    const brands = await products.find({category:req.params.category},{projection:{brand:1,_id:0}}).toArray()
    const new_brands = []
    brands.forEach((element,index)=>{
      new_brands.push(element.brand)
    })
    function GFG_Fun() {
      let set = new Set(new_brands);
      const newArray = Array.from(set)
      return newArray
  }
  
    const data = GFG_Fun();
    res.send({payload:data,success:true})

  } catch (error) {
    console.log(error)
    res.send({success:false,payload:[]})
  }
})
router.get("/fetch/details/det",async(req,res)=>{
  try {

    const products = conn.db.collection('products')
    const payload = await products.find({title:req.query.title}).toArray()
    const identity = payload[0].identity
    const variations = await products.find({category:payload[0].category,identity:identity}).toArray()


    if(payload.length!=0){
      res.send({success:true,payload:payload})

    }
    else{
      res.send({success:false,payload:[2]})
    }
  } catch (error) {
    res.send({success:false,payload:[0]})
    console.log(error)
  }
})
module.exports = router