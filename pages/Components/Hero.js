import {createUseStyles} from 'react-jss';
import {Container, Grid, Typography, IconButton, Stack} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ReactPlayer from 'react-player';

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
    },
    coloredRed:{
        backgroundColor:"#FF5050",
        boxShadow:"none"
    },
    coloredBlue:{
        backgroundColor:"#49D3FF",
        boxShadow:"none"
    }
})

export default function Hero(){
    let classes = styles();
    return(
        <Container maxWidth="xl" className={classes.hero}>
            <Grid container spacing={2} >
                <Grid item>
                    <img src='studio_logo.png'></img>
                    <Typography fontSize="78pt" fontFamily="medium" lineHeight="70%">
                        Dropit Studios
                    </Typography>
                    <Typography width="70%" fontSize="15pt" fontFamily="light" marginTop="30px">
                            It’s a greate place to use scripting , filming, Videographic Contents and all of creative things of IT.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                            <IconButton>
                                <YouTubeIcon fontSize="large"/>
                            </IconButton>
                            <IconButton >
                                <FacebookRoundedIcon fontSize="large"/>
                            </IconButton>
                            <IconButton >
                                <TwitterIcon fontSize="large"/>
                            </IconButton>
                            <IconButton >
                                <InstagramIcon fontSize="large"/>
                            </IconButton>
                    </Stack>

                    <Stack direction="row" spacing={2} mt="20px">
                        <Grid item>
                            <Button  variant="contained" href="/start" color="error" className={classes.coloredRed} size="medium" endIcon={<KeyboardArrowRightIcon/>}>
                                Start
                            </Button>
                        </Grid>
                        <Grid item >
                            <Button className={classes.coloredBlue} variant="contained" href="/start" size="medium">
                                Contact us
                            </Button>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
            <Grid item >
                    <ReactPlayer
                        url="https://ak.picdn.net/shutterstock/videos/1053283298/preview/stock-footage-abstract-seamless-loop-of-d-render-neon-circle-blue-and-purple-neon-circles-abstract-futuristic.webm"
                        controls={true}
                        play={true}
                        loop={true}
                    >
                    </ReactPlayer>

                </Grid>
        </Container>
    )
}