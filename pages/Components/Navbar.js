import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Tooltip } from '@mui/material';


export default function Navbar(){
    return(
        <Container maxWidth="xl">
            <Box
            height={50}
            sx={{ flexGrow: 1 }}
            >
                <Grid container spacing={2} mt={0} sx={{ flexGrow: 1 }} display='inline-flex'>
                    <Grid item mt='auto' mb='auto'>
                        <img src='dropitlogo.bmp'></img>
                    </Grid>
                    <Grid container width="fit-content" mt='auto' mb='auto' flexDirection='row-reverse' sx={{ flexGrow: 1 }} >
                        <Grid item>
                            <Tooltip title='Support'>
                                <Link href='#' mr={2} textDecoration='none' underline='none' color='#000' fontWeight={900}>
                                    Support
                                </Link>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title='Contact'>
                                <Link href='#' mr={8} textDecoration='none' underline='none' color='#000' fontWeight={900}>
                                    Contact
                                </Link>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}