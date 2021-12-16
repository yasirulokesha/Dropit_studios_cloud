import {createUseStyles} from 'react-jss'

const styles = createUseStyles({
    hero:{
        display:"block",
        height:"90vh",
        width: "100vw"
    }
})

export default function Hero(){
    let classes = styles();
    return(
        <div className={classes.hero}>

        </div>
    )
}