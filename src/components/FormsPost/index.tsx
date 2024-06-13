import styles from './Forms.module.css';

export default function FormsPost() {
    return(
        <form className={styles.form}>
            <strong>Deixe seu feedback</strong>

            <textarea
                placeholder='Deixe um comentário'
            />

            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
    );
}