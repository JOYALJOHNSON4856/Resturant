// import React, { useState } from 'react'
// import Navbar from '../Components/NavBar/NavBar'
// import Footer from '../Components/Footer/Footer'
// import Menu from '../Components/Menu/Menu'
// import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const MainLayout = () => {


//   const[opensidenav,setopensidenav]=useState(false)
//   const {adminstate} = useSelector((state) => state.auth);
//   return (
//     <div className='main'>
//         <Navbar opensidenav={opensidenav}  setopensidenav={setopensidenav}  />
      
  

//         {
//           adminstate=='BACKEND_ADMIN'? <div className="containers">
//               <h1>backend</h1>
//              <div  className={`menuContainer ${opensidenav? 'active' : ''}`}>
//           <Menu  />
//         </div>
//         <div  className="contentContainer ">
//          <Outlet/>
//         </div>
//           </div>:
       
//           <div className='containers'>
//                 <h1>frontend</h1>
//              <div className={`menuContainer ${opensidenav? 'active' : ''}`}>
//           <Menu  />
//         </div>
//         <div  className="contentContainer ">
//          <Outlet/>
//         </div>
//         </div>
//         }
    
//       <Footer/>
//     </div>
//   )
// }

// export default MainLayout



import React, { useEffect, useState } from 'react'
import Navbar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import MainAdmin from './MainAdmin'
import RestAdmin from './RestAdmin'
import Plain from '../Components/plainpage/Plain'

const MainLayout = () => {


  const[opensidenav,setopensidenav]=useState(false)
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const storedUserType = localStorage.getItem('Usertype');
    if(storedUserType){
      const userData = JSON.parse(storedUserType)
      setUserType(userData)
    
    } 
  
  }, []);



  return (
    <div className='main'>
        <Navbar opensidenav={opensidenav}  setopensidenav={setopensidenav}  />
      {
        userType==="BACKEND_ADMIN"?  <MainAdmin opensidenav={opensidenav}  setopensidenav={setopensidenav}  />: userType==="RESTAURANT_ADMIN"?
        <RestAdmin opensidenav={opensidenav}  setopensidenav={setopensidenav}  />:<Plain/>
      }
      <Footer/>
    </div>
  )
}

export default MainLayout