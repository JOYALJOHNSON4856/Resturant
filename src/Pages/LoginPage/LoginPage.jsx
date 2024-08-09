
// import React, { useEffect, useState } from 'react'
// import './LoginPage.scss'
// import { useAdminloginMutation } from '../../Redux/Services/Authapi'
// import { TextField } from '@mui/material'
// import axios from 'axios'

// const LoginPage = () => {

//     const[login,setlogin]=useState({
//         username:"admin",
//         password:"1234"
//     })

//     const [adminlogin,{data}] = useAdminloginMutation()
//     const logins=async()=>{
//      adminlogin({
//           username:"admin",
//         password:"1234"
//       }).then((value)=>{
//         console.log(value)
//       }).catch((error)=>{
//         console.log(error)
//       })
//       //  const response=await axios.post('http://52.237.159.182:8080/authenticate',login)
//       //  console.log(response);

//     }   


//     const handleLogin=async (e)=>{
//       console.log(login);
//         e.preventDefault()
//         const {username,password}=login;
//         if(!username||!password){
//             alert('please fill all fileds')
//          }else{

//     try {
//         const response = await adminlogin(login);

//          console.log(response);


//     } catch (error) {
//         console.error('Login failed:', error);
//         alert('Login failed. Please try again.');
//     }

//          }
//       }
// ;
//   return (
//     <div className='login-mainz' >


//           <div className="loginbox">
//           <h6>Login here</h6>

//           <TextField id="outlined-basic" style={{marginBottom:'20px'}} type='text' className='username' label="username" variant="outlined" value={login.username}  onChange={e=>setlogin({...login,username:e.target.value})} />
//           <TextField id="outlined-basic" style={{marginBottom:'20px'}} type='password' className='username' label="Password" variant="outlined"   onChange={e=>setlogin({...login,password:e.target.value})}/>

//                <button className='btn btn-dark form-control ' onClick={logins}>login</button>
//           </div>

//     </div>

//   )
// }

// export default LoginPage






import React, { useContext, useEffect, useState } from 'react'
import './LoginPage.scss'
import { TextField } from '@mui/material'
import { LoginAPI } from '../../services/allApis'
import { useNavigate } from 'react-router-dom'
import { tokenauthcontext } from '../../context/TokenAuth'
import { loginSuccess } from '../../Redux/Reducers/Auth/authslice'
import { useDispatch } from 'react-redux'




const LoginPage = () => {

  const { isAuth, setisAuth } = useContext(tokenauthcontext)
  const [login, setlogin] = useState({
    username: "",
    password: ""
  })



  const navigate = useNavigate()
  const dispatch=useDispatch()
  const handleLogin = async (e) => {
    e.preventDefault()
    const { username, password } = login;
    if (!username || !password) {
      alert('please fill all fileds')
    } else {

      try {
        const response = await LoginAPI(login)
        if (response.status == 200) {
          dispatch(loginSuccess(response))
          localStorage.setItem("Usertype", JSON.stringify(response.data.userType))
          alert(` logined successfully`)
          localStorage.setItem("token", JSON.stringify(response.data.token))
          localStorage.setItem("Auth", (true))
          setisAuth(true)
          setlogin({
            username: "",
            password: ""
          })
           
          navigate('/home')
        } else {
          alert(response.response.data.description)

        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please try again.');
      }

    }
  }

  return (
    <div className='login-mainz' >


      <div className="loginbox">
        <h6>Login here</h6>

        <TextField id="outlined-basic" style={{ marginBottom: '20px' }} type='text' className='username' label="username" variant="outlined" value={login.username} onChange={e => setlogin({ ...login, username: e.target.value })} />
        <TextField id="outlined-basic" style={{ marginBottom: '20px' }} type='password' className='username' label="Password" variant="outlined" onChange={e => setlogin({ ...login, password: e.target.value })} />

        <button className='btn btn-dark form-control ' onClick={handleLogin}>login</button>
      </div>

    </div>

  )
}

export default LoginPage