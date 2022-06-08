import styles from './layout.module.css';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <main className={styles.main}>
        <Outlet/>
    </main>
  )
}

export default Layout