// module css
import style from "./NavBar.module.css";

// hook de authenticaçao pelo hook 
import { useAuthentication } from "../hook/useAuthentication"; 

// hook do context api do valor do usuario 
import { useAuthValue } from "../Context/AuthContext";

// componentes de links 
import { NavLink } from "react-router-dom";


const NavBar = () => {
  
  // pegar o dados do usuario que esta no provider 
  const { user } = useAuthValue();

    

  return (
   <nav className={style.navbar}>
      <NavLink to="/" className={style.brand}>
         Mine <span>Blogs</span>
      </NavLink>
       <ul className={style.links_list}>
         <li>
         <NavLink to="/" className={({isActive}) => (isActive ? style.active : "")}>Home</NavLink>
         </li>
         <li>
         <NavLink to="/about" className={({isActive}) => (isActive ? style.active : "")}>Sobre</NavLink>
         </li>
         {!user && (
          <>
            <li>
               <NavLink to="/register" className={({isActive}) => (isActive ? style.active : "")}>Cadastrar</NavLink>
            </li>
            <li>
               <NavLink to="/login" className={({isActive}) => (isActive ? style.active : "")}>Login</NavLink>
            </li>
          </>)
         }
         { user && ( 
           <>
             <li>
               <NavLink to="/posts/create" className={({isActive}) => (isActive ? style.active : "")}>Novo post</NavLink>
             </li>
             <li>
               <NavLink to="/dashboard" className={({isActive}) => (isActive ? style.active : "")}>Dashboard</NavLink>
            </li>
           </>
         )}
       </ul>
   </nav>
  )
}

export default NavBar;