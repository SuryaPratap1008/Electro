import React,{useEffect} from 'react'
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import BreadCrumbs from './BreadCrumb';



export default function Layout() {
  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    {/* <BreadCrumbs></BreadCrumbs> */}
    <Outlet></Outlet>
    <Footer></Footer>
    </>   
    
  )
}
