

import styles from './VacanciesCard.module.scss';




const VacanciesCard = (props) => {


    return (
        <div className={styles.card}>
            <div className={styles.line}></div>
            <div className={styles.card__title}>{props.title}</div>
            <div className={styles.card__text}>{props.text}</div>
        </div>
    )
}

export default VacanciesCard