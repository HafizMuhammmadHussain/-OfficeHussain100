import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';
import { borderLeft, padding } from '@mui/system';
import { Avatar } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'

class Footer extends Component {

    render() {
        return (
            <div style={{ backgroundColor: ' #202022 ', marginTop: '60px', }}>
                <Grid className='appsize' container sx={{ color: 'white', fontWeight: 'bold', width: '1200px' }} >
                    <Grid xs={4} sx={{ marginTop: '110px', }}>
                        <Item>
                            <img
                                src={require('file:///C:/Users/Hafiz%20M.Hussain/Downloads/10pearslblack.png')} alt='blank' width='100px'
                                height='50px' style={{ backgroundColor: '#202022', color: 'white' }} />
                            <p style={{ marginTop: '30px', }}>10Pearls is an award winning digital development company, helping business with product design, development and technology acceleration.</p>
                        </Item>
                    </Grid>
                    <Grid md={3} sx={{ marginTop: '110px' }}>

                        <Item>
                            <Grid container>
                                <Grid><Item>
                                    <div style={{ borderLeft: "1px solid white", height: '280px' }}></div>
                                </Item></Grid>
                                <Grid><Item><Grid container sx={{ textAlign: 'center', paddingTop: '40px' }}> <Grid sx={{ paddingBottom: '20px' }} md={6}><Item><Link to="/company" style={{
                                    textDecoration: 'none', color: 'white',
                                }}>
                                    Company
                                </Link></Item></Grid><Grid sx={{ paddingBottom: '20px' }} md={6}><Item><Link to="/services" style={{
                                    textDecoration: 'none', color: 'white',
                                }}>
                                    Services
                                </Link></Item></Grid>
                                    <Grid md={6} sx={{ paddingBottom: '20px' }}><Item>    <Link to="/work" style={{
                                        textDecoration: 'none', color: 'white',
                                    }}>
                                        Work
                                    </Link></Item></Grid ><Grid sx={{ paddingBottom: '20px' }} md={6}><Item>
                                        <Link to="/insights" style={{
                                            textDecoration: 'none', color: 'white',
                                        }}>

                                            Insights
                                        </Link></Item></Grid>
                                    <Grid md={6}><Item>     <Link to="/careers" style={{
                                        textDecoration: 'none', color: 'white'
                                    }}>
                                        Careers
                                    </Link>
                                    </Item></Grid ></Grid></Item></Grid>
                                <Grid><Item>
                                    <div style={{ borderRight: "1px solid white", height: '280px' }}></div>
                                </Item></Grid>


                            </Grid>
                        </Item>
                    </Grid>
                    <Grid md={5} sx={{ marginTop: '110px', textAlign: "left", paddingLeft: '70px' }}>

                        <Item>
                            <Grid container sx={{ paddingTop: '25px', }}> <Grid md={6}>
                                <Item>
                                    <p>USA</p>
                                </Item>
                            </Grid>
                                <Grid md={6} ><Item><p>Colombia</p></Item></Grid>
                                <Grid md={6} ><Item><p>Peru</p>    </Item></Grid ><Grid md={6}><Item><p>Costa Rica</p>
                                </Item></Grid>
                                <Grid md={6}><Item><p>UK</p>
                                </Item></Grid >
                                <Grid md={6}><Item><p>Pakistan</p>
                                </Item></Grid >

                                <Grid md={6}><Item><p>UAE</p>
                                </Item></Grid >
                                <Grid md={6}><Item><p>Canada</p>
                                </Item></Grid >
                            </Grid>
                        </Item>
                    </Grid>

                </Grid>

                <div className='appsize' style={{ borderTop: '1px solid white ', marginTop: '30px', }}></div>
                <div className='appsize'>
                    <Grid container sx={{ marginTop: '30px', color: 'white' }} >
                        <Grid md={6} >
                            <Item>
                                <Grid container >
                                    <Grid md={4}  >
                                        <Item ><Link style={{ color: 'white', textDecoration: 'none' }} >+1-703-935-1919</Link></Item>
                                    </Grid>
                                    <Grid md={4}>
                                        <Item><Link style={{ color: 'white', textDecoration: 'none' }} > info@10pearls.com</Link></Item>

                                    </Grid>
                                    <Grid md={4}>
                                        <Grid container>
                                            <Grid md={4} >
                                                <Item>
                                                    <Avatar sx={{ backgroundColor: '#202022' }}>
                                                        <i style={{ cursor: 'pointer' }}>  <FontAwesomeIcon icon={faFacebook} /></i>
                                                    </Avatar>
                                                </Item>

                                            </Grid>

                                            <Grid md={4}><Item>
                                                <Avatar sx={{ backgroundColor: '#202022' }}>
                                                    <i style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faTwitter} /></i>
                                                </Avatar>
                                            </Item>
                                            </Grid>
                                            <Grid md={4}><Item>
                                                <Avatar sx={{ backgroundColor: '#202022' }}>
                                                    <i style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faLinkedin} /></i>
                                                </Avatar>
                                            </Item></Grid>

                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid md={6} sx={{ textAlign: 'right' }} ><Item>Privacy Policy</Item></Grid>
                    </Grid >
                </div>
            </div >


        );
    }
}

export default Footer;