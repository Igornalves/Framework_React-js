import Header from './components/Header/Header'
import './global.css'
import styles from './App.module.css'
import SideBar from './components/SideBar/SideBar'
import Posts from './components/Post/Posts'

export default function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <SideBar/>
      <Posts/>
      </div>
    </div>
  )
}
