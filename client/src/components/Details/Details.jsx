import styles from './details.module.css';

const Details = ({value}) => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.icon}><i className="fa-solid fa-list-check"></i></span>
            <h3 className={styles.title}>Notes</h3>
        </div>
        <h3 className={styles.number}>{value}</h3>
    </div>
  )
}

export default Details