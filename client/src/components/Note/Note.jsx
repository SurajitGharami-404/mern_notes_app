import styles from './note.module.css';
import {format} from "date-fns";
import { Link } from 'react-router-dom';

const Note = ({note,_id,updatedAt}) => {
  return (
   
    <article className={styles.container}>
       <Link to={`/edit/${_id}`} className="link" state={{data:note}}>
        <h3 className={styles.note}>{note}</h3>
        <h5 className={styles.date}>{format(new Date(updatedAt),"MM/dd/yyyy")}</h5>
        </Link>
    </article>
  )
}

export default Note