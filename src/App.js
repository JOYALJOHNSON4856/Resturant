import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import EnhancedTable from './Pages/Users/User';
import { useContext } from 'react';
import { tokenauthcontext } from './context/TokenAuth';
import Plain from './Components/plainpage/Plain';

function App() {
  const {isAuth,setisAuth}=useContext(tokenauthcontext)
  
  return (
    <div className='mainpage'>
     <Routes>
      <Route path='home' element={isAuth?<MainLayout/>:<Plain/>} >

      <Route index element={<Home />} />    
      <Route path='user' element={<EnhancedTable/>} />          
       </Route>
       <Route path='/' element={<LoginPage/>} >
      
       </Route>

     </Routes>
    </div>
  );
}

export default App;
