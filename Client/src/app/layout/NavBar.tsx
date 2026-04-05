import {AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const navStyle = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#baecf9'
    }
}  
type Props = {
    toggleDarkMode: () => void
    darkMode: boolean
}
export const NavBar = ({darkMode, toggleDarkMode} : Props) => {
    return (
        <AppBar position='fixed'>
            <Toolbar sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems={'center'}>
                    <Typography  sx={navStyle} variant='h6' component={NavLink} to='/'>
                        RE-STORE
                    </Typography>
                    <IconButton onClick={toggleDarkMode}>
                        {!darkMode ? <DarkMode/> : <LightMode sx={{color: 'yellow'}}/>}
                    </IconButton>
                </Box>

                <List sx={{display: 'flex', direction: 'row', gap: 2}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyle}
                        >
                            {title}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems={'center'}>
                    <IconButton size={'large'} sx={{color: 'inherit'}}>
                        <Badge badgeContent={4} color='secondary'>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>

                    <List sx={{display: 'flex', direction: 'row', gap: 2}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyle}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                
            </Toolbar>
        </AppBar>
    )
}
