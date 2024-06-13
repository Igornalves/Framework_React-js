import styles from './Header.module.css';
import IgniteLogo from '../../assets/Ignite-Simbol.svg';

export default function Header() {
  return (
    <header className={styles.header}>
        <img src={IgniteLogo} alt='Logo do Ignite'/>
        <strong>Ignite Feed</strong>
    </header>
  );
}
