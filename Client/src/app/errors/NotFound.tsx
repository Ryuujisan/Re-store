import {Button, Paper, Typography} from "@mui/material";
import {SearchOff} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
       <Paper
       sx={{
           height: '400',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           p:6
           
       }}>
           <SearchOff sx={{fontSize: 100}} color={'primary'}/>
           <Typography gutterBottom variant = "h3">
               Page Not Found :-(
           </Typography>
           <Button fullWidth component={Link} to='/catalog'>Back to Shop</Button>
       </Paper>
    )
}
