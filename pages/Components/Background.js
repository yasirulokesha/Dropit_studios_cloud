import { Container } from '@mui/material';
import {createUseStyles} from 'react-jss'

const styles = createUseStyles({
    Background:{
        zIndex: "-1",
        display:'block',
        overflow:"hidden",
        width:"100vw",
        maxWidth:"100vw",
        // position: "absolute",
        // marginTop: '10vh',
        // marginBottom: 'auto', 
        // marginLeft:"25vw",
        // marginRight:"auto",
        // height:'fit-content',
        // width:"fit-content",
        // // backgroundColor:"#5F5",
        // width: "600px",
        // height:"600px",
        filter: "blur(180px)",
        // transform: "rotate(50deg)",
        // transform: "translate(300px,270px)",
        // overflowX: "hidden",
        // animationName: "bg",
    },
    circle:{
        position: "absolute",
        zIndex:"-3",
        display:"block",
        width: 490.18,
        height: 468.9,
        background: "#FF5050",
        borderRadius: "272.5px",
        transform: "rotate(-2.43deg)",
        transform: "translate(170px,0px)",
        animationName: '$bg',
        animationTimingFunction: 'ease-in-out',
    },
    circle1:{
        position: "absolute",
        zIndex:"-2",
        display:"block",
        position: "absolute",
        width: 506.1,
        height: 495.9,
        borderRadius: "100%",
        background: "#49D3FF",
        transform: "rotate(45deg)",
        transform: "translate(0px,70px)"
    },
    circle2:{
        position: "absolute",
        zIndex:"-1",
        width: 368.65,
        height: 388.19,
        background: "#7CFFA9",
        borderRadius: 207.5,
        transform: "rotate(45deg)",
        transform: "translate(270px,250px)"
    },
    '@keyframes bg': {
        from: {transform: "translate(400px,-150px)"},
        to: {transform: "translate(550px,-150px)"}
    },
})

export default function Background(){
    let classes = styles();
    return(
        <Container maxWidth="xl" className={classes.Background}>
            <span className={classes.circle}></span>
            <span className={classes.circle1}></span>
            <span className={classes.circle2}></span>
        </Container>
    )
}