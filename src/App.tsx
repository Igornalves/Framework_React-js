import Header from './components/Header/Header'
import './global.css'
import styles from './App.module.css'
import SideBar from './components/SideBar/SideBar'

export default function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem, modi enim dolorem, consequatur natus rerum nemo necessitatibus eveniet eius sint laboriosam delectus ut recusandae ad nisi commodi corrupti? Non.</text>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem, modi enim dolorem, consequatur natus rerum nemo necessitatibus eveniet eius sint laboriosam delectus ut recusandae ad nisi commodi corrupti? Non.</text>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem, modi enim dolorem, consequatur natus rerum nemo necessitatibus eveniet eius sint laboriosam delectus ut recusandae ad nisi commodi corrupti? Non.</text>
        </main>
      </div>
    </div>
  )
}
