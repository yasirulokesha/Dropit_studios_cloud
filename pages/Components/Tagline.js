import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';


export default function Navbar(){
    return(
        <Box flexDirection='row-reverse' sx={{ flexGrow: 1 }}>
            <p>Authorized by<Link>Dropit Networks</Link></p>
        </Box>
    )
}