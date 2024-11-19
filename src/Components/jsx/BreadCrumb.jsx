// import React, { useEffect, useState } from 'react'
// import { useNavigate,useLocation } from 'react-router-dom';
// function BreadCrumbs() {

//     const [breadCrumb,setBreadCrumb] = useState([])
//     const location = useLocation
//     const currentUrl = location.pathname
//     useEffect(()=>{
//         const pathname = window.location.pathname
//         const array = pathname.split('/')
//         setBreadCrumb(array)
//     },[location.pathname])
//   return (
// <>

//     {/* <!-- Breadcrumb --> */}
//     <nav className="justify-between px-4 py-3 text-gray-700 border border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
//       <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
//         <li>
//           <div className="flex items-center">
//             <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Electro.com</a>
//           </div>
//         </li>
//         {breadCrumb.map((element,index)=>{
//             return(
//         <li aria-current="page">
//           <div className="flex items-center">
//             <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
//             </svg>
//             <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{element}</a>
//           </div>
//         </li>

//             )
//         })}
       
//       </ol>
     
//     </nav>
//     </>
//   )
// }

// export default BreadCrumbs