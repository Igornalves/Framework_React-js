import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css'

export default function CommentsPost() {
   return(
       <div className={styles.comment}>
        <img src="https://avatars.githubusercontent.com/u/134658180?v=4" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Igor Nascimento</strong>
                        <time title='12 de junho às 10:34' dateTime='2024-06-12 10:34:25'>Cerca de 1h atrás</time>
                    </div>
                    
                    <button title='Deletar comentario'>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>Muito bom Devon, parabens!! 👏👏</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
       </div>
   );
}