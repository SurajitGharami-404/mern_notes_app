import styles from "../styles/home.module.css";
import { Details, Header, Note } from "../components";
import { Link } from "react-router-dom";
import { useGetAllNotesQuery } from "../services/notesApi";

const Home = () => {
  const {data,isLoading,isError,isSuccess} = useGetAllNotesQuery();
  if(isSuccess) console.log(data)
  return (
    <section className={styles.container}>
      <Header />
      <Details value={0} />
      <div className={styles.noteContainer}>
        <Note />
      </div>
      <Link to="/add">
        <span className={styles.icon}>
          <i className="fa-solid fa-circle-plus"></i>
        </span>
      </Link>
    </section>
  );
};

export default Home;
