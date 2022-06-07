import { useState } from "react";
import { Header } from "../components";
import styles from "../styles/add.module.css";

const Add = () => {
  const [notes, setNotes] = useState("Create your notes...");
  const customColor = {'--clr':'#4ECCA3'};
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.subHeader}>
        <span className={styles.icon} style={customColor}>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <button className={styles.btn} style={customColor}>Add</button>
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

export default Add;
