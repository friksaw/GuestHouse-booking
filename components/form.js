import React from "react";
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from 'react';


export default function Form() {
    const [form, setForm] = useState({ name: '', phone: '', fromDate: '', toDate: '' })
    const [isSubmitting, setSubmitting] = useState(false )

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
            .then(res => this.setState({ recipes: res.data }));
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

        console.log(e.target.name)
    }

    return (
        <div className={styles.card} style={{marginTop: -90, marginBottom: 40}}>
            <TextField onChange={handleChange} name='name' label="ФИО" className={styles.form_name} style={{width: "55%", marginRight: "2%", marginTop: -13}}/>
            <TextField onChange={handleChange} name='phone' label="Номер телефона" style={{width: "40%", marginRight: "2%", marginTop: -13}}/>

            <TextField onChange={handleChange} name='fromDate' label="Дата заезда" style={{width: "40%", marginRight: "2%", marginTop: -13}}/>
            <TextField onChange={handleChange} name='toDate' label="Дата выезда" style={{width: "40%", marginRight: "2%", marginTop: -13}}/>

            <Button variant="contained" color="primary" style={{width: "40%", height: "100%"}} onClick={handleSubmit}>
                Забронировать
            </Button>
        </div>
    )
}