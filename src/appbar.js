import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import image from "./avatarpic.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#0f0820',
        },
    },
});


export default function HeaderBar(props) {
    return (
        <React.Fragment>
            <div className='bar'>
                <CssBaseline />
                <ThemeProvider theme={darkTheme}>
                    <HideOnScroll {...props}>
                        <AppBar>
                            <Toolbar>
                                <Avatar alt="Me :-)" src={image} />
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <div className='iconssection'>
                                    <a href='https://www.linkedin.com/in/aatupal/'>
                                        <LinkedInIcon className='gelatine' />
                                        </a>
                                        <a href='https://github.com/townsquarechef'>
                                        <GitHubIcon className='gelatine' />
                                        </a>
                                        <a href='mailto:paljakanaatu@gmail.com'>
                                        <MailOutlineIcon className='gelatine'/>
                                        </a>
                                    </div>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                </ThemeProvider>
                <Toolbar />
            </div>
        </React.Fragment>
    );
}
