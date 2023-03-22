import style from "./Register.module.css";

// hooks de logica 
import { useState, useEffect } from "react";

// hook de autheticaçao do back and
import { useAuthentication } from "../../hook/useAuthentication";

const Register = () => {
 
  const [displayname, setDisplayname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState("");

 // dados do back and e da authentication 
  const { createUser, error: AuthError, loading } = useAuthentication();
  

  // function que esta respondavel por mandar dados para o back and por meio do hook useAuthentication.js 
  const handleSubmit =  async (event) => {
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

    //  vamos cria o res e mandar para o back and do firebase

    const res = await createUser(user); 

    console.log(res);

  }; 

  // vamos conectar os erros de autherror e error para imprimir na tela, error do back com error do front 

  useEffect(() => {
    if (AuthError) {
      setError(AuthError);
    }
  }, [AuthError]);


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
          {!loading && <button className="btn">Cadastrar</button>}
          {loading && <button className="btn" disabled>Aguarde...</button>}
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register;