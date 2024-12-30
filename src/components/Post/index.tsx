import { typePosts } from '../../global/interface/interface';
import Avatar from '../Avatar';
import CommentsPost from '../CommentsPost';
import FormsPost from '../FormsPost';
import styles from './Posts.module.css';

export default function Posts({ ...props }:typePosts) {
  return (
    <aside className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder 
            src={props.avartaUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{}</strong>
            <span>{}</span>  
          </div>
        </div>

        <time title={props.publishedATitlet} dateTime={props.publishedAt}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>{props.contentP1}</p>
      <p>{props.contentP2}</p>
      <text>{props.contentText}</text>
      <p>👉 <a href=''>{props.contentLink}</a></p>
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
