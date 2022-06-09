import styles from "../styles/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Details, Header, Note } from "../components";
import { Link } from "react-router-dom";
import { useGetAllNotesQuery } from "../services/notesApi";
import {setError} from "../services/errorSlice";
import { useEffect, useState } from "react";

const Home = () => {
  const [notes,setNotes] = useState(null);
  const {data,isLoading,isError,error} = useGetAllNotesQuery();
  
  useEffect(()=>{
    setNotes(data?.notes);
  },[data]);
  if(isLoading) return(<h1>Loading...</h1>)
  if(isError) return(<h1>{error?.message}</h1>)
  return (
    <section className={styles.container}>
      <Header />
      <Details value={data?.totalNotes} />
      <div className={styles.noteContainer}>
       {
         notes?.map((note,idx)=>(
           <Note {...note} key={idx}/>
         ))
       }
      </div>
      <Link to="/add" >
        <span className={styles.icon}>
          <i className="fa-solid fa-circle-plus"></i>
        </span>
      </Link>
    </section>
  );
};

export default Home;
