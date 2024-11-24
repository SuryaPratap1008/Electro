const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb+srv://choudharymoris:joyboy%40%401@electro.vtnes.mongodb.net/Electro");
conn.on('connected',()=>{
  console.log("successfully connected to the database")
})
// const connection= "abc"
const user = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: Array,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
    orders: {
      type: Array,
      required: true,
    },
  },
  {
    collection: "Users",
  }
);



const userModel = conn.model("User", user);



module.exports = { userModel, conn };
