import styles from '../styles/Home.module.css'
import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
}));


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-63.userapi.com/impf/lHZTJUg_bbfvmQWcsLAE8aVkzfpahrLuH4VaGQ/P6QTy4sb8dQ.jpg?size=1080x812&quality=96&proxy=1&sign=0dbdd074255533caca9d353286edff4e&type=album',
    },
    {
        label: 'Bird',
        imgPath:
            'https://sun9-20.userapi.com/impf/r053pQvMqUjo45LSTsMxY2fl0cJMTRyHfsIsBg/NhCdhCJd8-s.jpg?size=1280x960&quality=96&proxy=1&sign=091964bd82040ad6709fb2647dca205c&type=album'
    },

    {
        label: 'Bird',
        imgPath:
            'https://sun9-20.userapi.com/impf/JLZzmUCi78k6TB4Raspfh_ASVz3hJ69U5LXfmw/1Px6g2JGaZY.jpg?size=1280x960&quality=96&proxy=1&sign=977c316f2f47db92509df374febb3f9e&type=album',
    },
    {
        label: 'Bird',
        imgPath:
            'https://sun9-25.userapi.com/impf/oF1rKuJNIHWLcNoY8FyzOMZkmxBXkhn9TmIYeg/7iUkypOo8MI.jpg?size=1280x960&quality=96&proxy=1&sign=c134e6280a0200fa32e02067ea5fd357&type=album',
    },

];





export default function Room1() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    return (
        <a className={styles.card} style={{marginTop: 15}}>
            <div className={styles.card_text}>
                <h3>Двухместные апартаменты с террассой и зоной барбекю &rarr;</h3>
                <br/>
                <p>
                    Уютные двухместные апартаменты с отдельной террасой, которая оборудована садовой
                    мебелью, где приятно выпить чашечку утреннего кофе, днём принять солнечные ванны, а
                    вечером провести время за ужином в приятной компании.
                    В номере есть кухонная зона со всей необходимой техникой и посудой, телевизор, две
                    обеденные зоны - внутри номера и на террасе,
                    а также бесплатный Wi-Fi.
                </p>
                <br/>
            </div>

            <div className={styles.card_img} >
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={styles.card_img_inS} style={{width: '100%'}} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            далее
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            назад
                        </Button>
                    }
                />
            </div>
        </a>
    )
}
