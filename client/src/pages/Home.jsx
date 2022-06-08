import styles from "../styles/home.module.css";
import { Details, Header, Note } from "../components";
import { Link } from "react-router-dom";
import { useGetAllNotesQuery } from "../services/notesApi";

const Home = () => {
  const {data,isLoading,isError,error} = useGetAllNotesQuery();
  if(isLoading) return(<h1>Loading...</h1>)
  if(isError) return(<h1>{error?.message}</h1>)
  return (
    <section className={styles.container}>
      <Header />
      <Details value={data?.totalNotes} />
      <div className={styles.noteContainer}>
       {
         data?.notes.map((note,idx)=>(
           <Note {...note} key={idx}/>
         ))
       }
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
