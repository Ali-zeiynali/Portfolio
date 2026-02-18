import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 260;

type NavigationProps = {
    mode: string;
    modeChange: () => void;
    languageChange: () => void;
    nav: {
        expertise: string;
        history: string;
        projects: string;
        contact: string;
        language: string;
        languageLabel: string;
        menu: string;
    };
};

function Navigation({ mode, modeChange, languageChange, nav }: NavigationProps) {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const navItems: [string, string][] = [
        [nav.expertise, 'expertise'],
        [nav.history, 'history'],
        [nav.projects, 'projects'],
        [nav.contact, 'contact'],
    ];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navigation');
            if (navbar) {
                setScrolled(window.scrollY > 16);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (section: string) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const drawer = (
        <Box className={`navigation-bar-responsive ${mode === 'dark' ? 'drawer-dark' : 'drawer-light'}`} onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <p className="mobile-menu-top"><ListIcon />{nav.menu}</p>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item[0]} disablePadding>
                        <ListItemButton className="drawer-item" sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
                            <ListItemText primary={item[0]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
                <Toolbar className='navigation-bar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 1, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className="toolbar-actions">
                        <Button className={`language-switch ${/[\u0600-\u06FF]/.test(nav.language) ? 'fa-script' : ''}`} aria-label={nav.languageLabel} onClick={languageChange}>{nav.language}</Button>
                        <IconButton className="theme-toggle" aria-label="Toggle theme" onClick={modeChange}>
                            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>
                    </Box>
                    <Box className="nav-links" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {navItems.map((item) => (
                            <Button key={item[0]} className="nav-link-btn" onClick={() => scrollToSection(item[1])} sx={{ color: '#fff' }}>
                                {item[0]}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 12, right: 12, left: 12, height: 'fit-content', borderRadius: '18px', border: 'none', backgroundImage: 'none' },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default Navigation;
