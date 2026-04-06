import {AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {setDarkMode} from "./uiSlice.ts";

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
export const NavBar = () => {
    const {isLoading, darkMode} = useAppSelector(state => state.ui);
    const dispatch = useAppDispatch();
    return (
        <AppBar position='fixed'>
            <Toolbar sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems={'center'}>
                    <Typography  sx={navStyle} variant='h6' component={NavLink} to='/'>
                        RE-STORE
                    </Typography>
                    <IconButton onClick= {() => dispatch(setDarkMode())}>
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
            {isLoading &&  (
                <Box sx={{width: '100%'}}>
                    <LinearProgress color='secondary'/>
                </Box>
            )}
        </AppBar>
    )
}
