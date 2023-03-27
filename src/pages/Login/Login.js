// import de css
import styles from "./Login.module.css";

// hook do react 
import { useState, useEffect } from "react"; 
import { useAuthentication } from "../../hook/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

 // dados do back and e da authentication 
  const { login , error: AuthError, loading } = useAuthentication();
  

  // function que esta respondavel por mandar dados para o back and por meio do hook useAuthentication.js 
  const handleSubmit =  async (event) => {
    event.preventDefault();

    setError(""); 

    const user = {
      email,
      password,
    }

    //  vamos cria o res e mandar para o back and do firebase
    const res = await login(user); 

    console.log(res);

  }; 

  // vamos conectar os erros de autherror e error para imprimir na tela, error do back com error do front 
  useEffect(() => {
    if (AuthError) {
      setError(AuthError);
    }
  }, [AuthError]);

 

  return (
    <div  className={styles.login} >
        <h1>Entrar</h1>
        <p>Faça o login para poder utilizar o sistema</p>
        <form onSubmit={handleSubmit}>
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
          {!loading && <button className="btn">entrar</button>}
          {loading && <button className="btn" disabled>Aguarde...</button>}
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login;