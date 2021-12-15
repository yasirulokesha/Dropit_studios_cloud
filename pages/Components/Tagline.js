import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';


export default function Tagline(){
    return(
        <Box mr={5}>
            <p style={{float:"right"}}>Authorized by <Link href='https://dropitnetworks.com' target='_blank' underline='none' color="#000" >Dropit Networks</Link></p>
        </Box>
    )
}