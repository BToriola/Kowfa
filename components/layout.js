import Head from 'next/head'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import logo from "../assets/logo.svg"
import useStyles from '../utils/styles'
import Image from 'next/image'







export default function Layout({children}) {
    const classes = useStyles();

    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const pages = ['Products', 'Pricing', 'Blog'];
    // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
    
        <div style={{minHeight: '100vh', display:'table'}} className='animate-pulse'>    
            <Head>
                <title>Kowfa Exchange</title>
            </Head>

            <AppBar position="static" className={classes.navbar}  >
                <Container maxWidth="xl">
                    <Toolbar sx={{marginLeft: 8}}>
                        <Image src ={require('../assets/logo.svg')} alt="logo" className={classes.logo} />
                    </Toolbar>
                </Container>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
           
           
        </div>
       
    )
}
