import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Logo from './Logo';

const pages = ['Home', 'About', 'Projects', 'Resume'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'hsla(210, 14%, 7%, 0.6)', borderBottom: '1px solid hsla(210, 14%, 28%, 0.3)', backdropFilter: 'blur(8px)' }}>
            <Container sx={{ maxWidth: '1320px' }} maxWidth={false}>
                <Toolbar disableGutters>

                    {/*normal logo and text, far left*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'flex-start', gap: '25px' }}>
                        <Logo color="#39D353" height="32px" />
                        <Typography variant="h6" noWrap sx={{color:'#39D353'}}>Andrew Towner</Typography>
                    </Box>
                    {/*normal menu, far right*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'flex-end', gap: '25px' }}>
                        {pages.map((page,i) => (
                            <Link key={i} className="main-menu" to={page === "Home" ? "./" : "./" + page.toLowerCase()}> {page}</Link>
                        ))}
                    </Box>
                    {/*hamburger menu*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="Menu"
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page,i) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link key={i} className="hamburger-menu" sx={{ textAlign: 'center' }} to={page === "Home" ? "./" : "./" + page.toLowerCase()} >{page}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/*small logo and text, center*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: 'row', justifyContent: 'flex-start', gap: '25px' }}>
                        <Logo color="#39D353" height="32px" />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;