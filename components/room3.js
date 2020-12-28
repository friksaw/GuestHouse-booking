import styles from '../styles/Home.module.css'

export default function Room3() {
    return (
        <a className={styles.card}>
            <div className={styles.card_text}>
                <h3>Четырехместные аппартаменты с зоной барбекю &rarr;</h3>
                <br/>
                <p>
                    Аппартаменты оснащены двуспальными кроватями на основном и верхнем уровне, рабочей зоной, телевизором.
                    Тихий дворик, оборудованный для комфортного отдыха и барбекю;
                    в нем мангал, стол, стулья и яркий сад. Отлично подходит для проведения мероприятий: дней Рождений, юбилеев, Нового года.
                </p>
                <br/>
            </div>
            <div className={styles.card_img3}/>
        </a>
    )
}

