import { useState,useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components";
import { useCreateNoteMutation } from "../services/notesApi";
import styles from "../styles/add.module.css";

const Add = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [createNote] = useCreateNoteMutation();
  const [note, setNote] = useState("");
  const customColor = {'--clr':'#4ECCA3'};

  const handleCreate = async()=>{
      const {error} = await createNote({note});
      if(error) console.log(error?.data?.message)
      navigate("/",{state:{from:location},replace:true})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    handleCreate();
  
  }
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.subHeader}>
        <span className={styles.icon} style={customColor} onClick={handleCreate}>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <button className={styles.btn} style={customColor}>Add</button>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textArea}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          spellCheck='true'
        ></textarea>
        <button type="submit" className={styles.submit} style={customColor}>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </section>
  );
};

export default Add;
