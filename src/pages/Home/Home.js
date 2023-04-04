// css modules
import styles from "./Home.module.css";

//  hooks 
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

// componentes


const Home = () => {
 const [query, setQuery] = useState("");

 const [posts] = useState([]);

 const handleSubmit = (event) => {
   event.preventDefault();
 };


return (
    <div className={styles.home}>
        <h1>Veja  os nossos posts mais recentes</h1>
         <form onSubmit={handleSubmit} className={styles.search_form} >
           <input 
           type="text"
           placeholder="Ou busque por tags..."
           onChange={(e) => setQuery(e.target.value)}
           />
           <button className="btn btn-dark">Pesquisa</button>
         </form>
         <div>
            <h1>Posts...</h1>
            {posts && posts.length === 0 && (
              <div className={styles.noposts}>
                <p>Nao foram encontrados os posts</p>
                <Link to="/posts/create" className="btn">Criar Primeiro post</Link>
              </div>
            )}
         </div>
    </div>
  )
}

export default Home;