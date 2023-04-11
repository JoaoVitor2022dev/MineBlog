import styles from "./Post.module.css"

// hooks 
import { useParams } from "react-router-dom";

// hook de fetch 
import { useFetchDocument } from "../../hook/useFetchDocument";


const Post = () => {
  const { id } = useParams(); 

  const { document: post, loading } = useFetchDocument("posts", id)
  
  return (
    <div>
        {post && (
          <>
          {loading && <p>Carregamento post... </p>}
           <h1>{post.title}</h1>
          </>
        )}
    </div>
  )
}

export default Post;