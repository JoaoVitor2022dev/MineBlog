import style from "./Register.module.css";

// hooks de logica 
import { useState, useEffect } from "react";


const Register = () => {
 
  const [displayname, setDisplayname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();

    setError(""); 

    const user = {
      displayname,
      email,
      password,
      confirmPassword
    }

    if (password !== confirmPassword) {
      setError(" As senhas precisam ser iguais! "); 
    }

    console.log(user);

  }; 

  return (
    <div className={style.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuario e compatilhe suas historias</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text"
             name="displayname"
             required
             placeholder="Nome do usuário"
             value={displayname}
             onChange={(e) => setDisplayname(e.target.value)}/>
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email"
             name="email"
             required
             placeholder="E-mail do usuário"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
          </label>
          <label>
            <span>Senha:</span>
            <input type="password"
             name="password"
             required
             placeholder="Senha do usuário"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />
          </label>
          <label>
            <span>Confirmaçao de senha:</span>
            <input type="password"
             name="confirmPassword"
             required
             placeholder="Confirme a sua senha"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)} 
             />
          </label>
          <button className="btn">Cadastrar</button>
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register;