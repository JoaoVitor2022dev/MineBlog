// hook que mostra authenticaçao feita com sucesso
import { onAuthStateChanged } from 'firebase/auth';

// hooks do react
import { useState, useEffect } from 'react';

//  styles de css
import './App.css';

// hook de authenticaçao do back and
import { useAuthentication } from './hook/useAuthentication';

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
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from './pages/Search/Search';

// o context api 
import { AuthContextProvider } from './Context/AuthContext';


function App() {
  
  // dados de usuario 
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication(); 
  
  // if boleano para ve se o usuario é definido ou nao 
  const loadingUser = user === undefined;

  
// vai ver se tem algum usuario autehnticado...
  useEffect(() => {

    onAuthStateChanged(auth, (user) => { 
        setUser(user);
    });   

  },[ auth ]);
   
  // logica para carregar dados 
  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App"> 
        <AuthContextProvider value={ { user } }>
            <BrowserRouter>
               <NavBar/>
                 <div className="container">
                     <Routes>
                       <Route path='/' element={<Home/>}/>
                       <Route path='/about' element={<About/>}/>
                       <Route path='/search' element={<Search/>}/>
                       <Route path='/register' element={!user ?  <Register/> : <Navigate to="/"/> }/>
                       <Route path='/login' element={!user ?  <Login/> : <Navigate to="/"/> }/>
                       <Route path='/posts/create' element={ user ?  <CreatePost/> : <Navigate to="/login"/>}/>
                       <Route path='/dashboard' element={user ?  <Dashboard/> : <Navigate to="/login"/>}/>
                     </Routes>
               </div>
              <Footer/>
           </BrowserRouter>
        </AuthContextProvider>
    </div>
  );
}

export default App; 
