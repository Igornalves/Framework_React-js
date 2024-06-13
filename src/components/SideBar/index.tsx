import Avatar from '../Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export default function SideBar() {
  return (
      <aside className={styles.aside}>
        <img 
        className={styles.cover} 
        src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=90&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />

        <div className={styles.profile}>
          <Avatar
            hasBorder
            imgUri='https://avatars.githubusercontent.com/u/134658180?v=4' 
          />

          <strong>Igor Nascimento</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href='#'>
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </aside>
  );
}
