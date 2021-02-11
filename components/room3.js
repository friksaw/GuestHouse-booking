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
            'https://sun9-52.userapi.com/impf/wpwlEsKABtc27CQouzHqG0_gjCzqaYXoPnBuXQ/JRfsl_gj404.jpg?size=1080x810&quality=96&proxy=1&sign=11ab6ffbd790e59dd1f775a1d8ee0d0d&type=album',
    },
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-68.userapi.com/impf/giCVk990g8Cf2VggQjQXFOCnp15i2bSAxF2big/M8n9ONG-WEQ.jpg?size=1280x960&quality=96&proxy=1&sign=c3d3ca49b2d3317b3d9bfe9fffa48a24&type=album',
    },
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-55.userapi.com/impf/I4CtTjuMhRTqMMBzrltHQVLNCjDYNF9mvkTk5w/MTDNgWppEOI.jpg?size=1280x960&quality=96&proxy=1&sign=e77a20caecc700f0352fb3e94566215f&type=album',
    },
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-7.userapi.com/impf/EhPeJup0jF6X6A62ZcBeKlICvOSLVckvPeFEbQ/nA9hqxhE-ek.jpg?size=1080x810&quality=96&proxy=1&sign=3cbaccd84c2aee1cfe8f7912baad2472&type=album',
    },
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-11.userapi.com/impf/COFc18Wy6GcyvIAB0IUsbtbawbzMLN3rmkU4eA/-E-QE5G85XI.jpg?size=1080x810&quality=96&proxy=1&sign=10bc9cc870c5c113b0074d3c53954133&type=album',
    },
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-30.userapi.com/impf/JEMt5_sfiYbmMaFxrRiPCX5-vSo-2QKQdmtuEg/5xY2UpjfBGM.jpg?size=1080x810&quality=96&proxy=1&sign=ecd1855f6a573ad3a640b37a00c8b94a&type=album',
    },
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-10.userapi.com/impf/YcDUDXxGApguqgMc5OhnKNVzZY6Yahn4YJ_5wg/fsjXox1pIcU.jpg?size=1080x810&quality=96&proxy=1&sign=a6ed45bc4f57b6a3a4bcb1b3d4577ed2&type=album',
    },
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://sun9-29.userapi.com/impf/RJtSk0mS6ZC88Qqp_nj_mowlgSOLYTUhVU8fSQ/xssaszKXx-8.jpg?size=1280x960&quality=96&proxy=1&sign=9e66cc4066ca9bcbc9571853feb28fa1&type=album',
    },
];


export default function Room3() {
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
                <h3>Четырехместные аппартаменты с зоной барбекю &rarr;</h3>
                <br/>
                <p>
                    Это четырёхместные апартаменты в отдельностоящем домике с отличной
                    звукоизоляцией, двумя двухстальными кроватями, телевизором, обеденными зонами как в домике , так и на террасе. В номере есть кухонная зона со всей необходимой техникой и посудой. А на террасе всегда в вашем распоряжении мангал с шампурами. Также для удобства гостей - бесплатный Wi-
                    Fi. Отличительной особенностью этого номера является уединённость и окружение
                    природой - ваш будут окружать зелёные кроны деревьев и пение птиц.
                    Этот домик также подходит для проведения мероприятий!
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

