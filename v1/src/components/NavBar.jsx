import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logoBonna from "../assets/img/logobonna_w.png"
import { CardMedia, ListItemButton, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { IoIosLogOut } from "react-icons/io";
import { CgLogOff } from "react-icons/cg";

import { IoHomeOutline } from "react-icons/io5";
import useAuthCall from '../hooks/useAuthCall';
import { AiFillHome } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";



const reporPages = [
  {
    title: "Teşekkür",
    url: '/tesekkur'
  },
  {
    title: "Öneri Talep",
    url: '/oneritalep'
  },
  {
    title: "Şikayet",
    url: '/sikayet'
  },
  {
    title: "Ramak Kala",
    url: '/ramakkala'
  }
];

const pages = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Report",
    url: "/report"
  }
]

const NavBar = () => {


  const { logout } = useAuthCall()
  const { token } = useSelector((state) => state.auth)

  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (

    token ?
      (
        <AppBar position='static' sx={{ backgroundColor: '#1F2937' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>

              <Box sx={{ display: { xs: 'flex', md: 'flex' }, mr: 5 }} >
                <img
                  src={logoBonna}
                  alt="bonnaLogo"
                  width='130px'
                />
              </Box>


              {/* mobile PAGE MENU */}

              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >

                  {
                    pages.map((page, index) => (
                      <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button sx={{ textTransform: 'none', color: 'black' }} key={index} onClick={() => {
                          navigate(page.url)
                          handleCloseNavMenu()
                        }}>{page.title}</Button>
                      </Box>
                    ))
                  }
                  <Button onClick={() => logout()} sx={{ width: '100%', textTransform: 'none', color: 'red' }}>Çıkış</Button>
                </Menu>
              </Box>




              {/* PAGES MENU */}


              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                  <Button onClick={() => navigate('/')} sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}>
                    Ana Sayfa
                  </Button>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={() => navigate('/report')}
                  >
                    Rapor
                  </Button>
                  {/* <Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    {
                      pages.map((item, index) => (
                        <MenuItem key={index}
                          onClick={() => {
                            navigate(item.url)
                            handleClose()
                          }}>{item.title}</MenuItem>
                      ))
                    }
                  </Menu> */}
                </Box>

              </Box>


              {/* page modunda çıkış butonu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <CgLogOff size={30} color='#B31312' cursor='pointer' onClick={() => logout()} />
              </Box>



            </Toolbar>

          </Container>



          <Box>
            <Outlet />
          </Box>


        </AppBar>
      )
      :
      (
        ""
      )

  )
}

export default NavBar