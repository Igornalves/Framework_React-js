import Header from '../../components/Header';
import Posts from '../../components/Post';
import SideBar from '../../components/SideBar';
import styles from './Home.module.css'

export default function Home() {
    return(
        <div>
            <Header/>
            <div className={styles.home}>
                <SideBar/>
                <Posts/>
            </div>
        </div>
    );
}