import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Header from './Components/Header';
// import Navbar from './Components/Navbar';
// import SignUp from './Components/SignUp';
// import NewArrivals from './Components/NewArrivals';

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import NewArrivals from './Components/NewArrivals';
// import Login from './Components/Login';
// import ProductDetail from './Components/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
//  {
//   path:'/',
//   element:<App/>
// },{
//   path:"/arrival",

//   element:<><Header/><NewArrivals/></>
// }
// ,{
//   path:"/login",
//   element:<>
//   <Header/>
//   <Navbar/>
//    <Login/></>
// },
// {path:"/signup",
// element: <SignUp/>},

// {
//   path:"/detail",
//   element:<>
//   <Header/>
//   <Navbar/>
//   <ProductDetail title= "Happy hour"/>
//   </>
// }
// ])
root.render(

 
  
  
    <App></App>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
