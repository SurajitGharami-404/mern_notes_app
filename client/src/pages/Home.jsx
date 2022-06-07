import styles from "../styles/home.module.css";
import { Details, Header, Note } from "../components";

const Home = () => {
  return (
    <section className={styles.container}>
      <Header />
      <Details value={0} />
      <div className={styles.noteContainer}>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
      </div>
      <span className={styles.icon}>
        <i className="fa-solid fa-circle-plus"></i>
      </span>
    </section>
  );
};

export default Home;
