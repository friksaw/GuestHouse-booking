import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Room1 from "../components/room1";
import Room2 from "../components/room2";
import Room3 from "../components/room3";
import Header from "../components/header";
import Footer from "../components/footer";
import Form from "../components/form";
import React from "react";


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Гостевой дом "На Чайковского 70"</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className={styles.main}>

                <div className={styles.grid}>
                    <Form/>

                    <Room1/>
                    <Room2/>
                    <Room3/>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

Home.getInitialProps = async () => {
    const res = await fetch('http://freakssha.ru/api/booking');
    const { data } = await res.json();

    return { booking: data }
}

