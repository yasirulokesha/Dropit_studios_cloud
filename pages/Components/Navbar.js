import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {createUseStyles} from 'react-jss';
import { Link } from '@mui/material';

const styling = createUseStyles({
    nav:{
        display:"inline-flex",
        textDecoration:'none'
    }
})


export default function Navbar(){
    let styles= styling();
    return(
        <Container maxWidth="xl">
            <Box
            height={50}
            // bgcolor="#FF5"
            sx={{ flexGrow: 1 }}
            >
                <Grid container spacing={2} mt={0} sx={{ flexGrow: 1 }} class={styles.nav}>
                    <Grid item mt='auto' mb='auto'>
                        <img src='dropitlogo.bmp'></img>
                    </Grid>
                    
                        <Grid container width="fit-content" mt='auto' mb='auto' flexDirection='row-reverse' sx={{ flexGrow: 1 }} >
                            <Grid item>
                                <Link mr={2}>
                                    Contact
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link mr={2}>
                                Support
                                </Link>
                            </Grid>
                        </Grid>
                    
                </Grid>
            </Box>
        </Container>
    )
}