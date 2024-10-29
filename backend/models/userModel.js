const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://localhost:27017/Users");

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
    collection: "uso",
  }
);



const userModel = conn.model("credential", user);

// conn.once('open', async function () {

//     const collection  = connection.db.collection("products");
//    const pro = collection.findOne({category:"phone"})
//    console.log(pro)
//     });

module.exports = { userModel, conn };
