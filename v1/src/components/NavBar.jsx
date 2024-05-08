import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, useNavigate } from 'react-router';
import { colors } from '../styles/globalStlye';

const NavBar = () => {

  return (

    <AppBar position='static' sx={{ backgroundColor: colors.navbarBgColor }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }} >
           
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }} >
           
          </Box>

        </Toolbar>

      </Container>



      <Box>
        <Outlet />
      </Box>


    </AppBar>

  )
}

export default NavBar