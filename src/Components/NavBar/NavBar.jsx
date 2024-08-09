import { useContext } from "react";
import { tokenauthcontext } from "../../context/TokenAuth";
import "./NavBar.scss";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Reducers/Auth/authslice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({opensidenav,setopensidenav}) => {
  const  navigate=useNavigate()
  const toggles=()=>{
    setopensidenav(!opensidenav)
 
  }
  const {isAuth,setisAuth}=useContext(tokenauthcontext)
  const handlelogout=()=>{

     localStorage.removeItem("Usertype");
     setisAuth(false)
     localStorage.setItem("Auth",(false))

     navigate('/')
  }
  return (
    <div className="navbar">
      <div className="logo">
        <span className="menus-icos" onClick={toggles}><MenuIcon/></span>
       <span className="dashhead">ADMIN DASHBOARD</span>
    
   
      </div>
      <div className="icons">
     
       
        <div className="user">
          <img
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profile-picture"
          />
          <span>a</span>
          <span><button className="logoutbutton" onClick={handlelogout}>logout</button></span>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
