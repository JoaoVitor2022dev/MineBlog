// hook de css 
import styles from "./CreatePost.module.css";

// hook de react
import { useState } from "react";

// hook de rotas
import { useNavigate } from "react-router-dom";

// hook de context api 
import useAuthValue from "../../Context/AuthContext"; 

const CreatePost = () => {
  
  const [title , setTitle ] = useState("");
  const [image , setImage ] = useState("");
  const [body , setBody ] = useState("");
  const [tags , settags ] = useState([]);
  const [formError , setFormError ] = useState("");
  
  // fucntion de enviar dados 

  const handleSubmit = (event) => {  
    event.preventDefault(); 
  };

  return (
    <div className={styles.create_post}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento !</p>
        <form onSubmit={handleSubmit}>
          <label>
              <span>Titulo</span>
              <input type="text"
               name="title"
               required placeholder="Pense em um bom titulo... "
               onChange={(event) => setTitle(event.target.value)}
               value={title}
               />
          </label>
          <label>
              <span>URL da imagem</span>
              <input type="text"
               name="image"
               required placeholder="Insira uma imagem que representa o seu port"
               onChange={(event) => setImage(event.target.value)}
               value={image}
               />
          </label>
          <label>
             <span>Conteudo:</span>
             <textarea name="body"
             required placeholder="Insira o conteudo do post"
             onChange={(event) => setBody(event.target.value)}
             value={body}
             > 
             </textarea>
          </label>
          <label>
              <span>Tags</span>
              <input type="text"
               name="tags"
               required placeholder="Insira as tags separadas por virgula"
               onChange={(event) => settags(event.target.value)}
               value={tags}
               />
          </label>
          <button className="btn">Cadastrar</button>
         {/*{!loading && <button className="btn">Cadastrar</button>}
          {loading && <button className="btn" disabled>Aguarde...</button>}
         {error && <p className="error">{error}</p>} */ }
        </form>
    </div>
  )
}

export default CreatePost;