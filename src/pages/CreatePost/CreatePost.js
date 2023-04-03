import styles from "./CreatePost.module.css";

import { useEffect, useState } from "react";
import { useInsertPost } from "../../hook/test_useInsertDocument";
import { useAuthValue } from "../../Context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { createPost , concluido , loading ,  error: errorPost } = useInsertPost("posts");



  useEffect(() => {
  if (errorPost) {
    setFormError(errorPost)
  }
  },[errorPost])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validando image URL
    try {
 
     new URL(Image) 
 
    } catch (error) { 
 
     window.alert("A imagem precisa ser um URL.")
       
    }

    // verificaçao de array  de tags 

   const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase()); 
    
    //  check de todos os valores
    
    if (!title || !image || !tags || !body ) {
       setFormError("Por favor, preencha todos os campos!"); 
    }


    if (formError) {
      return;  
    }


    createPost({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect 
 

  };

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
          {!loading && <button className="btn">Cadastrar</button>}
          {loading && <button className="btn" disabled>Aguarde...</button>}
         { formError && <p className="error">{formError}</p>} 
         {concluido && <p className="concluido">Concluido</p>}
      </form>
    </div>
  );
};

export default CreatePost;