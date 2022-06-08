import { useState,useRef } from "react";
import { Header } from "../components";
import { useCreateNoteMutation } from "../services/notesApi";
import styles from "../styles/add.module.css";

const Add = () => {
  const [createNote] = useCreateNoteMutation();
  const [note, setNote] = useState("");
  const customColor = {'--clr':'#4ECCA3'};
  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
      createNote({note});
    } catch (error) {
      console.log(error)
    }
  
  }
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.subHeader}>
        <span className={styles.icon} style={customColor}>
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
