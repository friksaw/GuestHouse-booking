import styles from '../styles/Home.module.css'

export default function Room1() {
    return (
        <a className={styles.card} style={{marginTop: 15}}>
            <div className={styles.card_text}>
                <h3>Двухместные аппартаменты с террассой и зоной барбекю &rarr;</h3>
                <br/>
                <p>
                    Уютные аппартаменты с двуспальной кроватью, при желании превращающейся в отдельные койки.
                    Тихий дворик, оборудованный для комфортного отдыха и барбекю;
                    в нем лежаки, мангал, столы, стулья и яркий сад. Отлично подходит для проведения мероприятий: дней Рождений, юбилеев, Нового года.
                </p>
                <br/>
            </div>
            <div className={styles.card_img}/>
        </a>
    )
}
