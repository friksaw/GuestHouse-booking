import React from "react";
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';


export default function Form() {
    const [form, setForm] = useState({ name: '', phone: '', fromDate: '', toDate: '' })
    const [isSubmitting, setSubmitting] = useState(false )

    useEffect(() => {
        if (isSubmitting) {
            createBooking();
        }
    }, )

    async function createBooking() {
        console.log(JSON.stringify(form))
        try {
            const res = await fetch('http://freakssha.ru/api/booking', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true)

        console.log(JSON.stringify(form))
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
            <TextField onChange={handleChange} name='name' label="ФИО" style={{width: "55%", marginRight: "2%", marginTop: -13}}/>
            <TextField onChange={handleChange} name='phone' label="Номер телефона" style={{width: "40%", marginRight: "2%", marginTop: -13}}/>

            <TextField onChange={handleChange} name='fromDate' label="Дата заезда" style={{width: "40%", marginRight: "2%", marginTop: -13}}/>
            <TextField onChange={handleChange} name='toDate' label="Дата выезда" style={{width: "40%", marginRight: "2%", marginTop: -13}}/>

            <Button variant="contained" color="primary" style={{width: "40%", height: "100%"}} onClick={handleSubmit}>
                Забронировать
            </Button>
        </div>
    )
}