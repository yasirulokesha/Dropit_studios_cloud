import {createUseStyles} from 'react-jss'

const styles = createUseStyles({
    Background:{
        zIndex: "-1",
        display:'block',
        position: "absolute",
        width: "932.51px",
        height: "100vh",
        marginTop: 'auto',
        marginBottom: 'auto',
        filter: "blur(180px)",
        transform: "rotate(45deg)",
        // animationName: "bg",
    },
    circle:{
        position: "absolute",
        zIndex:"-3",
        display:"block",
        position: "absolute",
        width: 490.18,
        height: 468.9,
        background: "#FF5050",
        borderRadius: "272.5px",
        transform: "rotate(-2.43deg)",
        transform: "translate(550px,-150px)"
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
        transform: "translate(350px,0px)"
    },
    circle2:{
        position: "absolute",
        zIndex:"-1",
        width: 368.65,
        height: 388.19,
        background: "#7CFFA9",
        borderRadius: 207.5,
        transform: "rotate(45deg)",
        transform: "translate(650px,150px)"
    },
    '@keyframes bg': {
        from: {transform: "rotate(45deg)"},
        to: {transform: "rotate(90deg)"}
    },
})

export default function Background(){
    let classes = styles();
    return(
        <div className={classes.Background}>
            <span className={classes.circle}></span>
            <span className={classes.circle1}></span>
            <span className={classes.circle2}></span>
        </div>
    )
}