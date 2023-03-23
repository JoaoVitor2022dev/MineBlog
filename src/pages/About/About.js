// css modules 
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mine <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com react no front-end e firebase no back and</p>
      <Link to="/posts/create" className="btn">Criar post</Link>
    </div>
  )
}

export default About;