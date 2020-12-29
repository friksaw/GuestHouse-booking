import React from "react";
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Divider} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';


export default function Form() {
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({ name: '', phone: '', fromDate: '', toDate: '' })
    const [isSubmitting, setSubmitting] = useState(false )
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (isSubmitting) {
            createNote();
        }
    }, )

    async function createNote() {
        console.log(JSON.stringify(form))
        try {
            const res = await fetch('http://localhost:3000/api/booking', {
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);
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
        <>

            <a className={styles.card} style={{marginBottom: -8, marginTop: -5}}>
                <p className={styles.description} style={{marginTop: 0, marginBottom: 0}}>
                    <a className={styles.header_button} onClick={handleClickOpen}>
                        Забронировать на сайте
                    </a> или по телефону <a className={styles.header_button}>
                    8 (918) 482-40-45</a>
                </p>
            </a>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{"Бронирование"}</DialogTitle>
                <Divider/>
                <DialogContent>
                    <p>
                        Сообщите всю информацию для бронирования, и мы свяжемся с вами по телефону в течении пары часов.
                    </p>


                    <TextField onChange={handleChange} name='name' label="ФИО" style={{width: "60%", marginRight: "3%"}}/>
                    <TextField onChange={handleChange} name='phone' label="Номер телефона" style={{width: "37%"}}/>

                    <p style={{marginTop: 35}}>
                        Заезд происходит после 14.00, а выезд до 12.00 по МСК.
                    </p>

                    <TextField onChange={handleChange} name='fromDate' label="В какой день заедите?" style={{width: "48.5%", marginRight: "3%"}}/>
                    <TextField onChange={handleChange} name='toDate' label="Когда уезжаете?" style={{width: "48.5%", marginBottom: 35}}/>

                </DialogContent>
                <Divider/>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Отправить
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}