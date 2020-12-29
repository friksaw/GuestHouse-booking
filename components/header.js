import styles from '../styles/Home.module.css'


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <h3 className={styles.title} style={{marginTop: 30, marginBottom: 40}}>
                    Гостевой дом <h7 style={{color: "#63003f"}}>"На Чайковского 70"</h7>
                </h3>
            </div>
        </div>
    )
}