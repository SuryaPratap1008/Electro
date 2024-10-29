const { userModel, conn } = require("../models/userModel.js");
// import credentialModel from '../models/userModel.mjs'
const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose')
const {
  body,
  validationResult,
  ExpressValidator,
} = require("express-validator");
const jwt = require("jsonwebtoken");
const tokenAuthenticate = require("./middleware/tokenAuthenticate.js");
const tokenAuthenticator = require("./middleware/tokenAuthenticate.js");

const JWT_SECRET = "happy";
const app = express();
app.use(express.json());

app.post(
  "/auth/signup",
  [body("email").isEmail(), body("password")],
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      if ((await userModel.findOne({ email: req.body.email })) === null) {
        const salt = await bcrypt.genSalt(10);
        const sec_pass = await bcrypt.hash(req.body.password, salt);

        const data = {
          email: req.body.email,
          password: sec_pass,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
          cart: req.body.cart,
          address: req.body.address,
          orders: req.body.orders,
        };
        const user = await userModel.create(data);

        const jwt_data = {
          id: user.id,
        };
        const token = jwt.sign(jwt_data, JWT_SECRET);

        res.send({ token, success: true });
      } else {
        res.send({ success: false });
      }
    } else {
      res.send("invalidEmail");
    }
  }
);
app.post(
  "/auth/login",
  body("email").escape().trim().isEmail(),
  tokenAuthenticator,
  async (req, res) => {
    // const success=false
    if (req.id == 0) {
      const result = validationResult(req);
      if (result.isEmpty()) {
        const user = await userModel.findOne({ email: req.body.email });
        if (user) {
          if (bcrypt.compare(req.body.password, user.password)) {
            const data = user.id;
            const token = jwt.sign(data, JWT_SECRET);

            res.status(200).send({ success: true, payload:token });
          } else {
            res.send(401).send({ success: false,payload:"" });
          }
        }
      } else {
        res.send({success:false,payload:result.array()});
        // throw new Error("Please enter valid credentials")
      }
    }
    // console.log(req.body)
    // res.json({"bud":"thirsty"})
  }
);
app.post("/api/addtocart", tokenAuthenticate, async (req, res) => {
  try {
    console.log("yoyo");

    const user = await userModel.findById(req.id);
    console.log(user);
    console.log(req.body.productId);
    const cart = user.cart || [];
    let match = false;

    // Loop through the cart to check if the product already exists
    for (let i = 0; i < cart.length; i++) {
      if (Object.keys(cart[i])[0] === req.body.productId) {
        const updatedCount = cart[i][req.body.productId] + req.body.count;
        cart[i][req.body.productId] = updatedCount;

        await userModel.findByIdAndUpdate(user.id, { $set: { cart: cart } });
        match = true;
        res.send({ success: true, payload: cart[i] });
        return;
      }
    }

    // If the product does not exist in the cart, add it
    if (!match) {
      const newProduct = {};
      newProduct[req.body.productId] = req.body.count;
      cart.push(newProduct);

      await userModel.findByIdAndUpdate(user.id, { $set: { cart: cart } });
      res.send({ success: true, payload: newProduct }).status(200);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
});
app.post("/api/account/cart", tokenAuthenticate, async (req, res) => {
  try {
    const user = await userModel.findById(req.id);
    const cart = user.cart;
    const products =  conn.db.collection("products");

    console.log(cart)

    let payload = [];
    for(let i = 0;i<cart.length;i++){
        const id = Object.keys(cart[i])[0]
        var mongooseId = new mongoose.Types.ObjectId(String(Object.keys(cart[i])[0]));
        const count = cart[i][id]
        const pro = await products.find({_id:mongooseId},{projection:{title:1,img:1,price:1}}).toArray()
        pro.push({count:count})

        console.log(pro.img)
        payload.push(pro)
    }
  
    console.log("the payload is " + payload);
    console.log(payload)
    res.send({ success: true, payload: payload });
  } catch (error) {
    res.send({ success: false,payload:[]});
    console.log(error)
  }
});
app.post('/api/account/cart/delete-cart',tokenAuthenticate,async (req,res)=>{
  const user = await userModel.findById(req.id);
  const cart = user.cart;


  console.log(cart)

   let match = false
  for (let i = 0;i<cart.length;i++) {
      const id = Object.keys(cart[i])[0]
      if(req.body.productId === id){
        console.log("the selected id is this one ")
        console.log(cart[i])
        const newCart = cart.filter(item=> item!==cart[i])
        console.log("the new array is")
        console.log(newCart)
        await userModel.findByIdAndUpdate(user.id, { $set: { cart: newCart } });
        match=true
        res.send({success:true})
      }
     
}
if(match=false){
  res.send({success:false})
}

})
app.post('/api/account/cart/update-cart',tokenAuthenticate,async (req,res)=>{
  const user = await userModel.findById(req.id);
  const cart = user.cart;
  console.log(cart)
  let match = false;
  for(let i = 0;i<cart.length;i++){
      const id = Object.keys(cart[i])[0]
      console.log("hello")
      console.log("the loop id is " + id)
      console.log("the req id is "  + req.body.productId)
      if(req.body.productId == id){
        console.log(req.body.count)
        cart[i][id] = req.body.count
        console.log(cart[i][id])
        await userModel.findByIdAndUpdate(user.id, { $set: { cart: cart } });
        match=true
        res.send({success:true})
      }
     
}
if(match=false){
  res.send({success:false})
}
})
app.post("/api/account", tokenAuthenticate, async (req, res) => {
  try {
    console.log("a request has been recieved");
    const user = await userModel.findById(req.id);
    res.send({ success: true, payload: user });
  } catch (error) {
    res.send({ success: false });
  }
});
app.post("/api/account/add-address", tokenAuthenticate, async (req, res) => {
  try {
    const user = await userModel.findById(req.id);
    user.address.push(req.body.address);
    const newAddress = user.address;
    console.log(newAddress);

    await userModel.findByIdAndUpdate(user.id, { address: newAddress });
    res.send({ success: true, payload: user });
  } catch (error) {
    console.log(error);
    res.send({ success: false });
  }
});

app.get("/api/new/", async (req, res) => {
  try {
    // Access the "products" collection
    const productCollection = conn.db.collection("products");

    // Fetch products with the category "phone"
    const products = await productCollection
      .find({ tag: "newArrival" })
      .toArray();

    // Send the result as a JSON response
    res.json(products); // Ensure you're only sending the product data
  } catch (error) {
    // Handle any errors
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching products." });
  }
});
app.use("/api/products", require("./routes/productRoutes.js"));

app.listen(4001, () => {
  console.log("app is running on port 4001");
});
