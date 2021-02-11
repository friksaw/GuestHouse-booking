import styles from '../styles/Home.module.css'
import Form from "./form";
import React from "react";


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <h3 className={styles.title} style={{marginTop: 10, marginBottom: 50}}>
                    <h7>Гостевой дом <br/> <h7 style={{color: "#303F9F"}}>"Country House"</h7></h7>
                </h3>
            </div>
        </div>
    )
}