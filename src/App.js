//  styles de css
import './App.css';

// condig de router
import { BrowserRouter, Routes , Route, Navigate } from "react-router-dom"; 

// pages  
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

// componentes 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App"> 
     <BrowserRouter>
      <NavBar/>
       <div className="container">
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/login' element={<Login/>}/>
         </Routes>
       </div>
       <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App; 
