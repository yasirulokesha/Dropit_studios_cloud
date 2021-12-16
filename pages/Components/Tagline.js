import Box from '@mui/material/Box';
import { Link } from '@mui/material';


export default function Tagline(){
    return(
        <Box mr={5} >
            <footer><p style={{float:"right"}}>Authorized by <Link href='https://dropitnetworks.com' target='_blank' underline='none' color="#000" >Dropit Networks</Link></p></footer>
        </Box>
    )
}