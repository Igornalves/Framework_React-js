import CommentsPost from '../CommentsPost/Comments';
import FormsPost from '../FormsPost/Forms';
import styles from './Posts.module.css';

export default function Posts() {
  return (
    <aside className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src='https://avatars.githubusercontent.com/u/134658180?v=4'/>
          <div className={styles.authorInfo}>
            <strong>Igor Nascimento</strong>
            <span>Web Developer</span>  
          </div>
        </div>

        <time title='12 de junho às 10:34' dateTime='2024-06-12 10:34:25'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW</p>
      <text>Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</text>
      <p>👉 <a href=''>jane.design/doctorcare</a></p>
      <p>
        <a href=''>#novoprojeto </a> 
        <a href=''>#nlw </a> 
        <a href=''>#rocketseat </a>
        </p>
      </div>

      <FormsPost/>

      <div className={styles.commentList}> 
        <CommentsPost/>
        <CommentsPost/>
        <CommentsPost/>
      </div>

    </aside>
  );
}
