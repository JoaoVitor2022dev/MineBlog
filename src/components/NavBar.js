// module css
import style from "./NavBar.module.css";


// componentes de links 
import { NavLink } from "react-router-dom";


const NavBar = () => {
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
         <li>
         <NavLink to="/register" className={({isActive}) => (isActive ? style.active : "")}>Cadastrar</NavLink>
         </li>
         <li>
         <NavLink to="/login" className={({isActive}) => (isActive ? style.active : "")}>Login</NavLink>
         </li>
       </ul>
   </nav>
  )
}

export default NavBar;