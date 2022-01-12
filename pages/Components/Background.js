import { Container } from '@mui/material';
import {createUseStyles} from 'react-jss'

const styles = createUseStyles({
    Background:{
        zIndex: "-1",
        display:'flex',
        width:"100vw",
        maxWidth:"100vw",
        position:"absolute",
        alignItems:"center",
        flexDirection:"column",
        height:"100vh",
        justifyContent:"center"
    },
    circle:{
        position: "fixed",
        filter: "blur(180px)",
        zIndex:"-3",
        display:"block",
        width: 490.18,
        height: 468.9,
        background: "#FF5050",
        borderRadius: "100%",
        transform: "translate(100px,-150px)",
    },
    circle1:{
        position: "fixed",
        filter: "blur(180px)",
        zIndex:"-2",
        display:"block",
        width: 506.1,
        height: 495.9,
        borderRadius: "100%",
        background: "#49D3FF",
        transform: "translate(-120px,10px)",
        
    },
    circle2:{
        position: "fixed",
        filter: "blur(180px)",
        zIndex:"-1",
        width: 368.65,
        height: 388.19,
        background: "#7CFFA9",
        borderRadius: "100%",
        transform: "translate(130px,150px)"
    },
})

export default function Background(){
    let classes = styles();
    return(
        <Container  maxWidth="xl" className={classes.Background}>
            <div className={classes.circle}></div>
            <div className={classes.circle1}></div>
            <div className={classes.circle2}></div>
        </Container>
    )
}