import style from "./Register.module.css";

// hooks de logica 
import { useState, useEffect } from "react";


const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuario e compatilhe suas historias</p>
        <form>
          <label>
            <span>Nome:</span>
            <input type="text"
             name="displayname"
             required
             placeholder="Nome do usuário"/>
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email"
             name="email"
             required
             placeholder="E-mail do usuário"/>
          </label>
          <label>
            <span>Nome:</span>
            <input type="password"
             name="password"
             required
             placeholder="Senha do usuário"/>
          </label>
          <label>
            <span>Confirmaçao de senha:</span>
            <input type="password"
             name="confirmPassword"
             required
             placeholder="Confirme a sua senha"/>
          </label>
          <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register;