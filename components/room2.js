import styles from '../styles/Home.module.css'
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {autoPlay} from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";



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
            'https://sun9-46.userapi.com/impf/aDNAtIAzgfzd2IDan8GpklYAzPaZ5h_NrdJ9_w/ddw-LHSLpaM.jpg?size=1280x960&quality=96&proxy=1&sign=753923ce9a82474289a600d417110d6e&type=album',
    },

    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-33.userapi.com/impf/wOh4yoVAAVsCb-262s0mEQBNjuE6t5twNjXyfw/yrUkQEHcsaw.jpg?size=1280x960&quality=96&proxy=1&sign=746da6640c49333d94cea4ee350f058f&type=album',
    },

    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-42.userapi.com/impf/RoFJ3pp6NVQzbR8r4nj1i4gNP0e-OyYnYv9fZg/d6-t3ymZ6kQ.jpg?size=1280x960&quality=96&proxy=1&sign=0e77c5142c9d97a5daf95b0a361ef276&type=album',
    },

    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-19.userapi.com/impf/lnJROVu_8R3KeLyHgjDGbDBBoQIWUQCrXtmXQQ/EEtFaq5PczI.jpg?size=1280x960&quality=96&proxy=1&sign=c2f8223d410a8a563733e46cbfd3c3ee&type=album',
    },

    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-6.userapi.com/impf/m3OfFXDiTox0j8iVuE_xYspPaR0QLHCENuI8qQ/2QAReajYUQ4.jpg?size=1280x960&quality=96&proxy=1&sign=64178347512244a23f4359b491607180&type=album',
    },

    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-46.userapi.com/impf/aDNAtIAzgfzd2IDan8GpklYAzPaZ5h_NrdJ9_w/ddw-LHSLpaM.jpg?size=1280x960&quality=96&proxy=1&sign=753923ce9a82474289a600d417110d6e&type=album',
    },

];


export default function Room2() {
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
        <a className={styles.card}>
            <div className={styles.card_text}>
                <h3>Четырехместные аппартаменты &rarr;</h3>
                <br/>
                <p>
                    Четырёхместные апартаменты с большой двухспальной кроватью и двумя
                    односпальными кроватями идеально подойдёт для семей с детьми или небольших компаний.
                    В номере есть кухонная зона со всей необходимой техникой и посудой, обеденная зона,
                    телевизор и бесплатный Wi-Fi.
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
            </div>        </a>
    )
}
