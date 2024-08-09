
import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../Components/Menu/Menu';

const MainAdmin = ({opensidenav,setopensidenav}) => {

    console.log('mainadmin redered');
  
  return (
    <div className="containers">
          
    <div  className={`menuContainer ${opensidenav? 'active' : ''}`}>
 <Menu  />
</div>
<div  className="contentContainer ">
<Outlet/>
</div>
 </div>
  )
}

export default MainAdmin