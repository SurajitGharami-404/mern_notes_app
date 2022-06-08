import { useState } from "react";
import { Header } from "../components";
import styles from "../styles/add.module.css";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [notes, setNotes] = useState("");
  const {id} = useParams();
  const customColor = {'--clr':'#F2A07B'};
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.subHeader}>
        <span className={styles.icon} style={customColor}>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <button className={styles.btn} style={customColor}>Delete</button>
      </div>
      <form className={styles.form}>
        <textarea
          className={styles.textArea}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          spellCheck='true'
        ></textarea>
        <button type="submit" className={styles.submit} style={customColor}>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </section>
  );
};

export default Edit;
