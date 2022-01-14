import {createUseStyles} from 'react-jss';
import {Container, Grid, Typography} from '@mui/material'

const styles = createUseStyles({
    hero:{
        display:'flex',
        // width:"100vw",
        // maxWidth:"100vw",
        // position:"absolute",
        alignItems:"center",
        flexDirection:"row",
        height:"100vh",
        justifyContent:"space-between"
    }
})

export default function Hero(){
    let classes = styles();
    return(
        <Container maxWidth="xl" className={classes.hero}>
            <Grid container spacing={2}>
                <Grid item>
                    <img src='Logo-covered.png'></img>
                    <Typography fontSize="78pt" fontFamily="medium" lineHeight="70%">
                        Dropit Studios
                    </Typography>
                    <Typography width="70%" fontSize="15pt" fontFamily="light" marginTop="40px">
                            It’s a greate place to use scripting , filming, Videographic Contents and all of creative things of IT.
                    </Typography>
                </Grid>
            </Grid>
            <Typography>
                Hmmm
            </Typography>
        </Container>
    )
}