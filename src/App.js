
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';
import Report from './Pages/Report';
import LoginForm from './Pages/Login';
import RegistrationForm from './Pages/Register';


import User from './Pages/User';

import Nav from './component/Navigation/Nav';

import Patient from './component/Patient/Patient';
import Register from './component/Patient/Register';

import Header from './component/Navigation/Header';
import UpdatePatient from './component/Patient/UpdatePatient';







function App() {
  return (
    
     <Routes>



      <Route />
      {/* <Route path='nav' element={<Navbar/>}/> */}
      <Route path='home' element={<Home />} />
      <Route path='report' element={<Report />} />
      
      <Route path='/' element={<LoginForm />} />
      <Route path='register' element={<RegistrationForm />} />
      <Route path='user' element={<User />} />
      
      <Route path='header' element={<Header />} />

      <Route path='patient' element={<Patient />} />
      <Route path='registration' element={<Register />} />
     
      <Route path='nav' element ={<Nav/>}/>
      <Route path='update' element ={<UpdatePatient/>}/>

    </Routes>
    
    
 
   
  );
}

export default App;
