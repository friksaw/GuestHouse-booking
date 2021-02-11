import React from "react";
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'


export default function Form() {
    const [form, setForm] = useState({ name: '', phone: '', fromDate: '', toDate: '' })
    const [isSubmitting, setSubmitting] = useState(false )
    function styleByWidth() {
        window.alert(window.innerWidth)
        if(window.innerWidth < 850) {
            window.alert(1)
            return false
        } else {
            window.alert(1)
            return true
        }
    }

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 850px)'
    })


    useEffect(() => {
        if (isSubmitting) {
            createBooking();
        }

        setSubmitting(false)
    }, )

    async function createBooking() {
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/booking',
            data: form
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true)

        alert("Успешное бронирование! Мы свяжемся с вами по телефону в течении часа и обговорим детали.")
    };
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const style11 =  {width: 100, margin: 20, marginLeft: 10, marginTop: -20}
    const style21 =  {width: "100%", marginRight: 0, marginTop: 0}

    const style12 =  {width: 100, marginRight: 20, marginLeft: 10, marginTop: -13}
    const style22 =  {width: "100%", marginRight: 0, marginTop: 0}

    const style13 =  {width: 100, marginRight: 10, marginLeft: 10, marginTop: -13}
    const style23 =  {width: "100%", margin: 0, marginTop: 0}

    const styleButt1 =  {width: 200, height: "85%", marginLeft: 10, marginTop: 10}
    const styleButt2 =  {width: "100%", marginRight: "0%", marginTop: 20}


    return (
        <div className={styles.firstCard} style={{marginTop: -90, marginBottom: 40, paddingRight: 20}}>
            <TextField
                onChange={handleChange}
                name='name'
                label="ФИО"
                className={styles.form_name}
                style={isDesktopOrLaptop ? style11 : style21}/>
            <TextField
                onChange={handleChange}
                name='phone'
                label="Номер телефона"
                style={isDesktopOrLaptop ? style12 : style22}/>

            <TextField
                onChange={handleChange}
                name='fromDate' label="Дата заезда"
                style={isDesktopOrLaptop ? style11 : style21}/>
            <TextField
                onChange={handleChange}
                name='toDate' label="Дата выезда"
                style={isDesktopOrLaptop ? style13 : style23}/>

            <Button variant="contained" color="primary" style={isDesktopOrLaptop ? styleButt1 : styleButt2} onClick={handleSubmit}>
                Забронировать
            </Button>
        </div>
    )
}