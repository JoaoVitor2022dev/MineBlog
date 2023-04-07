// css
import styles from "./Search.module.css"

// hook 
import { useFetchDocuments } from "../../hook/useFetchDocuments"
import { useQuery } from "../../hook/useQuery"

const Search = () => {
  const query = useQuery(); 
  const search = query.get("q"); 

  return (
    <div>
        <h2>Search</h2>
        <p>{search}</p>
    </div>
  )
}

export default Search

