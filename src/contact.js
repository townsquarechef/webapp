import React, { useRef, useState } from 'react';
import image from "./4kscenery2.jpg";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import emailjs from '@emailjs/browser';

const param1 =`${process.env.REACT_APP_PARAM1}`
const param2 =`${process.env.REACT_APP_PARAM2}`
const param3 =`${process.env.REACT_APP_PARAM3}`

const darkTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(156, 20, 135)',
        },
    },
});


//console.log(process.env.REACT_APP_SERVICE_ID)

const Contact = () => {
    const [msgvalue, setMsgvalue] = useState('')

    const templateParams = {
        message: msgvalue,
        to_name: "Aatu",
        from_name: "WebApp"
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(param1, param2, templateParams, param3)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMsgvalue('');
                alert("Email sent successfully!");
            }, (err) => {
                console.log('FAILED...', err);
                alert("Sending email failed");
            });
    };

    return (
        <div>
            <Grid>
                <Grid>
                    <div className="contactcontainer">
                        <script src="https://smtpjs.com/v3/smtp.js" />
                        <img className="img" alt='heroimgcontact' src={image} />
                        <div className="contacttext">
                            <p>CONTACT ME</p>
                            <div className='contacticonsdiv'>
                                <a href='https://www.linkedin.com/in/aatupal/'>
                                    <LinkedInIcon className='contacticons' sx={{ fontSize: 55 }} />
                                </a>
                                <a href='https://github.com/townsquarechef'>
                                    <GitHubIcon className='contacticons' sx={{ fontSize: 55 }} />
                                </a>
                                <a href='mailto:paljakanaatu@gmail.com'>
                                    <MailOutlineIcon className='contacticons' sx={{ fontSize: 55 }} />
                                </a>
                            </div>
                        </div>

                        <div className='contacttextfield'>
                            <ThemeProvider theme={darkTheme}>
                                <Paper style={{ backgroundColor: '#0f0820' }} >
                                    <div className='tfcontainer'>
                                        <Stack spacing={1}>
                                            <TextField
                                                hiddenLabel
                                                multiline
                                                value={msgvalue}
                                                onChange={(event) => {
                                                  setMsgvalue(event.target.value);
                                                }}
                                                minRows={4}
                                                fullWidth
                                                variant="filled"
                                                style={{ backgroundColor: '#ffffff', size: 'medium' }} />
                                            <Button variant="contained" onClick={sendEmail}>SEND ME AN EMAIL</Button>
                                        </Stack>
                                    </div>
                                </Paper>
                            </ThemeProvider>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export { Contact }