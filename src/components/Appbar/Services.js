import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Button } from '@mui/material';
export default function Services() {
    const images = [
        require("../../assets/servicesimg_01.webp"),
    ];
    return (
        <div style={{ marginTop: '60px', }}>
            <div
                style={{
                    'backgroundImage': `url(${images[0]})`,
                    height: '550px',
                    color: 'white',
                    marginLeft: "-135px", marginRight: "-135px", overflow: "hidden"
                }}>
                <div class='serviceEndtoEnd'>
                    <Grid container sx={{ marginLeft: "135px", marginRight: "135px", paddingTop: "70px" }}>
                        <Grid md={4} >
                            <Item>
                                <h1 class="h1headingblack"  >End-to-end digital technology
                                    services partner</h1>
                                <p class="careerparagraph">We are helping customers digitalize existing business, build innovative new products, and augment teams with high performance members</p>
                            </Item>
                        </Grid>
                        <Grid md={8}><Item></Item></Grid>
                    </Grid>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Button variant="contained"
                    style={{ marginRight: '10px' }}
                >
                    focus
                </Button>
                <Button variant="contained"
                    style={{ marginRight: '10px' }}
                >
                    solutions
                </Button>
                <Button variant="contained"
                    style={{ marginRight: '10px' }}
                >
                    platform
                </Button>
                <Button variant="contained"
                    style={{ marginRight: '10px' }}
                >
                    emerging tech
                </Button>
            </div>
            <div class="graysegment">
                <Grid container id="servicecontainergrid">
                    <Grid sx={{ paddingTop: '150px', paddingRight: '10px' }} md={6}><Item>
                        <h2 class="headingcarrer" >INNOVATION
                        </h2>             <p class="careerparagraph">Creating transformational new digital
                            products at the intersection of market opportunity,
                            customer experience, and emerging technology</p>
                        <Button sx={{ marginTop: '20px' }} variant="contained">learn more</Button>

                    </Item></Grid>
                    <Grid md={4}><Item><img style={{ width: 'auto', height: 'auto', marginTop: '80px', marginBottom: '80px', }} src={require('../../assets/serviceinnovationimage_02.webp')} blank='' width='150px' height='60px' />

                    </Item></Grid>
                </Grid>

            </div>

            <div class="graysegment">
                <Grid container id="servicecontainergrid">
                    <Grid md={6} >
                        <Item>
                            <img style={{ width: "500px", height: "500px", marginTop: '80px', marginBottom: '80px', }} src={require('../../assets/serviceimage_03.webp')} blank='' width='150px' height='60px' />
                        </Item>
                    </Grid>
                    <Grid sx={{ paddingTop: '150px', textAlign: 'left' }} md={6}><Item>
                        <h2 class="headingcarrer" >MODERNIZATION

                        </h2>             <p class="careerparagraph">Re-architecting legacy technology for better speed, scale, security, and user experience</p>
                        <Button sx={{ marginTop: '20px' }} variant="contained">learn more</Button>
                    </Item>
                    </Grid>
                </Grid>

            </div>


            <div class="graysegment">
                <Grid container id="servicecontainergrid" >
                    <Grid sx={{ paddingTop: '150px' }} md={6}><Item>
                        <h2 class="headingcarrer">DIGITALIZATION
                        </h2>             <p class="careerparagraph">Building intelligent and low-friction digital solutions to automate manual and inefficient business processes</p>
                        <Button sx={{ marginTop: '20px' }} variant="contained">learn more</Button>

                    </Item></Grid>
                    <Grid md={4} sx={{ marginLeft: '10px' }}><Item><img style={{ width: 'auto', height: 'auto', marginTop: '80px', marginBottom: '80px' }}
                        src={require('../../assets/serviceimage_04.webp')} blank='' />

                    </Item></Grid>
                </Grid>

            </div>


            <div class="graysegment" >
                <Grid container id="servicecontainergrid">
                    <Grid md={6} >
                        <Item>
                            <img style={{ width: "500px", height: "500px", marginTop: '80px', marginBottom: '80px', }} src={require('../../assets/serviceimage_05.webp')} blank='' width='150px' height='60px' />
                        </Item>
                    </Grid>
                    <Grid sx={{ paddingTop: '150px', textAlign: 'left' }} md={6}><Item>
                        <h2 class="headingcarrer">AUGMENTATION

                        </h2>             <p class="careerparagraph">Enabling your team with the technical talent and skills you need to accelerate development and build high-quality digital products</p>
                        <Button sx={{ marginTop: '20px' }} variant="contained">learn more</Button>
                    </Item>
                    </Grid>
                </Grid>

            </div>

        </div >
    );
}


