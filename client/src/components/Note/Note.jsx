import styles from './note.module.css';

const Note = () => {
  return (
    <article className={styles.container}>
        <h3 className={styles.note}>Let's start recording !</h3>
        <h5 className={styles.date}>5/23/2022</h5>
    </article>
  )
}

export default Note