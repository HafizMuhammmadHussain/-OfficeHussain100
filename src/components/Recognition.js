
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Box } from '@mui/system';
import React, { Component } from 'react';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '5rem',
    height: '5rem',
};
const image = [];

class Recognitions extends Component {


    render() {
        return (
            <div >

                <h2 class="headingcarrer" style={{ marginTop: '90px', }}>RECOGNITION & AWARDS
                </h2>
                <Grid container spacing={2} sx={{ marginTop: '30px', color: '#F2F2F2' }} >


                    <Grid item xs={6} >
                        <Box id="Box1" sx={{ display: 'flex', justifyContent: 'center', }}>
                            <Box sx={{ ...commonStyles, border: 1, width: '600px', height: '200px', paddingLeft: '40px', }} >
                                <Item>

                                    <img style={{ position: 'absolute', marginTop: '-20px', backgroundColor: 'white' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/EY.webp')} blank='' width='150px' height='50px' />
                                </Item>
                                <Typography sx={{ fontSize: '20px', color: '#2a2a2a', marginTop: '60px', marginRight: '20px', }}>
                                    EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner
                                </Typography>
                                <a style={{ color: '#0045a6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'Underline' }} >learn more</a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box id="Box1" sx={{ display: 'flex', justifyContent: 'center', }}>

                            <Box sx={{ ...commonStyles, border: 1, width: '600px', height: '200px', paddingLeft: '40px' }} >
                                <Item>

                                    <img style={{ position: 'absolute', marginTop: '-20px', backgroundColor: 'white' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/inc5000.png')} blank='' width='150px' height='45px' />
                                </Item>
                                <Typography sx={{ fontSize: '20px', color: '#2a2a2a', marginTop: '60px', marginRight: '20px', }}>
                                    Recognized on the Inc. 5000 list of fastest growing private companies in America for 4 years in a row (2022, 2021, 2020 & 2019)                                </Typography>
                                <a style={{ color: '#0045a6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'Underline' }} >learn more</a>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box id="Box1" sx={{ display: 'flex', justifyContent: 'center', }}>

                            <Box sx={{ ...commonStyles, border: 1, width: '600px', height: '200px', paddingLeft: '40px' }} >
                                <Item>

                                    <img style={{ position: 'absolute', marginTop: '-20px', backgroundColor: 'white' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Finanacial_Times.webp')} blank='' width='150px' height='50px' />
                                </Item>
                                <Typography sx={{ fontSize: '20px', color: '#2a2a2a', marginTop: '60px', marginRight: '20px', }}>
                                    Recognized on The Financial Times list of The Americas’ Fastest Growing Companies 2022                                </Typography>
                                <a style={{ color: '#0045a6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'Underline' }} >learn more</a>
                            </Box>
                        </Box>
                    </Grid>



                    <Grid item xs={6}>
                        <Box id="Box1" sx={{ display: 'flex', justifyContent: 'center', }}>

                            <Box sx={{ ...commonStyles, border: 1, width: '600px', height: '200px', paddingLeft: '40px' }} >
                                <Item>

                                    <img style={{ position: 'absolute', marginTop: '-50px', backgroundColor: 'white' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Gartners.png')} blank='' width='150px' height='100px' />
                                </Item>
                                <Typography sx={{ fontSize: '20px', color: '#2a2a2a', marginTop: '60px', marginRight: '20px', }}>
                                    Recognized for DevOps, Agile, and Artificial Intelligence and Machine Learning Expertise                                </Typography>
                                <a style={{ color: '#0045a6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'Underline' }} >learn more</a>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={6}>
                        <Box id="Box1" sx={{ display: 'flex', justifyContent: 'center', }}>

                            <Box sx={{ ...commonStyles, border: 1, width: '600px', height: '200px', paddingLeft: '40px' }} >
                                <Item>

                                    <img style={{ position: 'absolute', marginTop: '-20px', backgroundColor: 'white' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Forrester.png')} blank='' width='150px' height='60px' />
                                </Item>
                                <Typography sx={{ fontSize: '20px', color: '#2a2a2a', marginTop: '60px', marginRight: '20px', }}>
                                    Top Partner for Custom Software Development, Enterprise Mobile, and Digital Experiences
                                </Typography>
                                <a style={{ color: '#0045a6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'Underline' }} >learn more</a>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={6}>
                        <Box id="Box1" sx={{ display: 'flex', justifyContent: 'center', }}>

                            <Box sx={{ ...commonStyles, border: 1, width: '600px', height: '200px', paddingLeft: '40px' }} >
                                <Item>

                                    <img style={{ position: 'absolute', marginTop: '-20px', backgroundColor: 'white' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Timmyawards.webp')} blank='' width='150px' height='50px' />
                                </Item>
                                <Typography sx={{ fontSize: '20px', color: '#2a2a2a', marginTop: '60px', marginRight: '20px', }}>
                                    Recognized by Tech in Motion (Timmy Awards) for Best Tech Work Culture in Washington, DC for 2 years in a row (2021 & 2020)                              </Typography>
                                <a style={{ color: '#0045a6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'Underline' }} >learn more</a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box id="Box1" sx={{ display: 'flex', justifyContent: 'center', }}>
                            <Box sx={{ ...commonStyles, border: 1, width: '600px', height: '200px', paddingLeft: '40px' }} >
                                <Item>
                                    <img style={{ position: 'absolute', marginTop: '-20px', backgroundColor: 'white' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/WashingtonBusiness.webp')} blank='' width='150px' height='60px' />
                                </Item>
                                <Typography sx={{ fontSize: '20px', color: '#2a2a2a', marginTop: '60px', marginRight: '20px', }}>
                                    #1 Most Diverse Midsize Company in Greater DC


                                </Typography>
                                <a style={{ color: '#0045a6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'Underline' }} >learn more</a>

                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box id="Box1" sx={{ display: 'flex', justifyContent: 'center', }}>
                            <Box sx={{ ...commonStyles, border: 1, width: '600px', height: '200px', paddingLeft: '40px' }} >
                                <Item>
                                    <img style={{ position: 'absolute', marginTop: '-20px', backgroundColor: 'white' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/TWP.png')} blank='' width='150px' height='60px' />
                                </Item>
                                <Typography sx={{ fontSize: '20px', color: '#2a2a2a', marginTop: '60px', marginRight: '20px', }}>
                                    A "double bottom line" company that earns profits while accomplishing social good                                </Typography>
                                <a style={{ color: '#0045a6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'Underline' }} >learn more</a>

                            </Box>
                        </Box>
                    </Grid>









                </Grid>
            </div >
        );
    }
}

export default Recognitions;