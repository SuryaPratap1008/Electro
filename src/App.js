import logo from "./logo.svg";
import "./App.css";

import {createBrowserRouter,RouterProvider} from "react-router-dom";

import MediaScroller2 from "./Components/jsx/MediaScroller2.jsx";
import Micon_cont from "./Components/jsx/Micon_cont";
import MediaScroller1 from "./Components/jsx/MediaScroller1.jsx";
import Layout from "./Components/jsx/Layout.jsx";
import Login from "./Components/jsx/Login.jsx";
import SignUp from "./Components/jsx/SignUp.jsx";
import ProductDetail from "./Components/jsx/ProductDetail.jsx";
import Cart from "./Components/jsx/Cart.jsx";
import Myaccount from "./Components/jsx/Myaccount.jsx";
import Faqs from "./Components/jsx/Faqs.jsx";
import About from "./Components/jsx/About.jsx";
import Contact from "./Components/jsx/Contact.jsx";

let back = require("./Components/images/back2.jpg");
let style = {
  width: "1300PX",
  height: "60vh",
  backgroundImage: `url(${back})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  // border:"2px solid black",
  margin: "auto",
  marginBottom:"50px",
  marginTop:"20px"
};
const router = createBrowserRouter([
{
  element: <Layout></Layout>,
  children:[
  {
  path:"/",
  element: <><div style={style}></div>
  <Micon_cont></Micon_cont>
   <MediaScroller2
    item_group_count={5}
    item_count={4}
    url = "api/products/newArrival"
    tag = "newArrival"
    message="this is the first one scrolling"
    disp="invisible"
    title="NEW ARRIVALS"
    
  ></MediaScroller2>
  <MediaScroller2
   item_group_count={5}
   item_count={4}
    message="this is the second one scrolling"
    disp="invisible"
    url = "api/products/bestSelling"
    tag = "bestSelling"
    title="BEST SELLING"
    
  ></MediaScroller2>
  <MediaScroller1
  contID = "show1"
  category="phone"

    message="this is the second one scrolling"
    disp="invisible"
    // url = "api/products/bestSelling"
    tag = "none"
    title="PHONES"
    
  ></MediaScroller1>
  <MediaScroller1
  contID = "show2"
  category="tv"

    message="this is the second one scrolling"
    disp="invisible"
    // url = "api/products/bestSelling"
    tag = "none"
    title="TELEVISIONS"
    
  ></MediaScroller1>
</> 
},
{
  path:"/login",
  element: <Login></Login>
},
{path:"/signup",
  element: <SignUp></SignUp>
},{
  path:"/detail",
  element: <ProductDetail></ProductDetail>,
 
},{
  path:"/cart",
  element: <Cart></Cart>
},{
  path:"/myaccount",
  element: <Myaccount></Myaccount>
},{
  path:"/phones",
  element:<Cart></Cart>
},{
  path:"/faqs",
  element: <Faqs></Faqs>
},{
  path:"/about",
  element: <About></About>
},{
  path:"/contact",
  element: <Contact></Contact>
}]}
])
function App() {
  return (
    <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;
