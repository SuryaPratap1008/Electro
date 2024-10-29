import React from 'react'
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from './Footer';



export default function Layout() {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>   
    
  )
}
