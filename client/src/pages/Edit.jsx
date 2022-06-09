import {  useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components";
import styles from "../styles/add.module.css";
import { useParams } from "react-router-dom";
import {
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} from "../services/notesApi";

const Edit = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const customColor = { "--clr": "#F2A07B" };
  const [note, setNote] = useState(location?.state?.data);
  const [updateNote] = useUpdateNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();
  
  const handleUpdate = async () => {
    const body = {
      id,
      note,
    };
    const { error } = await updateNote(body);
    if (error) {
      console.log(error?.data?.message);
    }
    navigate("/", { state: { from: location }, replace: true });
  };
  const handleDelete = async () => {
    const { error } = await deleteNote(id);
    if (error) {
      console.log(error?.data?.message);
    }
    navigate("/", { state: { from: location }, replace: true });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleUpdate();
  };

  // if (isLoading) return <h1>Loading...</h1>;
  // if (isError) return <h1>{error?.message}</h1>;
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.subHeader}>
        <span
          className={styles.icon}
          style={customColor}
          onClick={handleUpdate}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <button
          className={styles.btn}
          style={customColor}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textArea}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          spellCheck="true"
        ></textarea>
        <button type="submit" className={styles.submit} style={customColor}>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </section>
  );
};

export default Edit;
