import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

import { Box } from '@mui/system';


const images = [
    require("file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/workimg01.webp"),
];




export default function Works() {
    return (
        <div>
            <div className='appsize'
                style={{
                    'backgroundImage': `url(${images[0]})`,
                    height: '550px',
                    color: 'black',
                    marginLeft: '-130px', marginRight: '-135px',

                }}>

                <Grid container id="servicecontainergrid" sx={{ paddingTop: '220px' }}>
                    <Grid md={5}>
                        <Item>
                            <h1 class="h1headingblack" >We are problem solvers</h1>

                            <p class="careerparagraph">We help businesses think through challenges and reach their desired outcomes with efficiency and creativity.</p>
                        </Item>
                    </Grid>

                </Grid>

            </div>



            <h2 class="headingcarrer" style={{ marginTop: '90px' }}>FEATURED INDUSTRIES
            </h2>



            <Grid container spacing={2} sx={{ marginTop: '50px', color: 'gray' }} >


                <Grid item xs={4} >
                    <Box id="Box1" >
                        <Box id="BoxWorkfeaturesindustries">
                            <Item>

                                <img class="Workfeatureindustryimagecss" src={require('../../assets/healthcare.jpg')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Health Care                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box id="Box1" >

                        <Box id="BoxWorkfeaturesindustries">
                            <Item>

                                <img class="Workfeatureindustryimagecss" src={require('../../assets/Education.jpg')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Education                                </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box id="Box1" >

                        <Box id="BoxWorkfeaturesindustries" >
                            <Item>

                                <img class="Workfeatureindustryimagecss" src={require('../../assets/Finanace.png')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Finanace
                            </Typography>

                        </Box>
                    </Box>
                </Grid>



                <Grid item xs={4}>
                    <Box id="Box1" >

                        <Box id="BoxWorkfeaturesindustries" >
                            <Item>

                                <img class="Workfeatureindustryimagecss" src={require('../../assets/Transportation.jpg')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Transportation                               </Typography>

                        </Box>
                    </Box>
                </Grid>


                <Grid item xs={4}>
                    <Box id="Box1" >

                        <Box id="BoxWorkfeaturesindustries"  >
                            <Item>

                                <img class="Workfeatureindustryimagecss" src={require('../../assets/Tecnology2.png')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Technology
                            </Typography>

                        </Box>
                    </Box>
                </Grid>


                <Grid item xs={4}>
                    <Box id="Box1" >

                        <Box id="BoxWorkfeaturesindustries" >
                            <Item>

                                <img class="Workfeatureindustryimagecss" src={require('../../assets/teclecom2.png')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Telecom</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box id="Box1" >
                        <Box id="BoxWorkfeaturesindustries" >
                            <Item>
                                <img class="Workfeatureindustryimagecss" src={require('../../assets/Energy.png')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Energy


                            </Typography>


                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box id="Box1" >
                        <Box id="BoxWorkfeaturesindustries" >
                            <Item>
                                <img class="Workfeatureindustryimagecss" src={require('../../assets/Realestate2.jpg')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Real Estate                               </Typography>


                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box id="Box1" >
                        <Box id="BoxWorkfeaturesindustries" >
                            <Item>
                                <img class="Workfeatureindustryimagecss" src={require('../../assets/Retail.jpg')} blank='' />
                            </Item>
                            <Typography id="Workfeatureindustrytypograhycss">
                                Retail</Typography>


                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <div style={{ backgroundColor: '#F2F2F2', marginLeft: '-130px', marginRight: '-135px', marginTop: '70px' }}>
                <div style={{ marginLeft: '130px', marginLeft: '130px', marginRight: '135px', paddingTop: '20px' }}>
                    <h2 class="headingcarrer">Feature Case Studies</h2>
                    <Grid container sx={{ width: 'auto', paddingTop: '40px' }}>
                        <Grid md={4} ><Item>
                            <img class="workimagecss" src={require('../../assets/AARP.png')} alt='' />

                            <h2 class="h1headingblack">AARP</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">healthcare</p>
                            <p class="textworkimagecss">10Pearls developed a community experience for caregivers that allowed them to share and exchange ideas on caring for their loved ones.
                            </p>
                        </Item></Grid>
                        <Grid md={4}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/human-resources.3svg.jpg')} alt='' />
                            <h2 class="h1headingblack">Industry: Human Resources</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">technology</p>
                            <p class="textworkimagecss">This company engaged 10Pearls to develop a mobile product that could seamlessly modernize and scale their operations through automation.</p>
                        </Item></Grid>
                        <Grid md={4}><Item>
                            <img class="workimagecss" src={require('../../assets/brightmlsne.png')} alt='' />
                            <h2 class="h1headingblack">Bright MLS</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">real estate</p>
                            <p class="textworkimagecss">10Pearls was selected to help build, integrate, and continuously support the BrightMLS.com portal site.</p>
                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>


                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/weatherforcasting.jpg')} alt='' />
                            <h2 class="h1headingblack">Industry: Weather Forecasting</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">technology</p>
                            <p class="textworkimagecss">10Pearls worked with client to develop their new Commuter card, an experiential tool to enhance a user’s daily travels</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/American_chemicalnew.jpg')} alt='' />
                            <h2 class="h1headingblack">American Chemical Society</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">non-profit</p>
                            <p class="textworkimagecss">10Pearls conducted user research and delivered a complete digital strategy for ACS to help attract new members and decrease churn of existing members.</p>

                        </Item></Grid>

                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>

                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Decisiv.png')} alt='' />

                            <h2 class="h1headingblack">Decisiv</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">transportation</p>
                            <p class="textworkimagecss">Through a design-led approach, 10Pearls worked with Decisiv to identify how user experience and business processes could be improved..</p>


                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Telecomnew.png')} alt='' />
                            <h2 class="h1headingblack">industry:Telecom</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">telcom</p>
                            <p class="textworkimagecss">10Pearls created a customer-facing account management mobile app to allow customers to buy bandwidth, manage support requests, and monitor usage.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }} ><Item>

                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Paypal.png')} alt='' />
                            <h2 class="h1headingblack">PayPal</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">Finance</p>
                            <p class="textworkimagecss">10Pearls fundamentally redesigned PayPal.com for small businesses by helping to form their strategyand wireframing design directions..</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }} ><Item>

                            <img class="workimagecss" src={require('../../assets/DiscoveryEducation.png')} alt='' />
                            <h2 class="h1headingblack">Discovery</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">education</p>
                            <p class="textworkimagecss">10Pearls worked on ideation, strategy, branding, and user experience to ensure that Discovery was providing the right medium to engage their target audience.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>

                            <img class="workimagecss" src={require('../../assets/medstartlogonew.png')} alt='' />
                            <h2 class="h1headingblack">MedStar Health</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">health care</p>
                            <p class="textworkimagecss">10Pearls designed and developed a HIPAA-compliant mobile app that allows users to create and share a living will and register as an organ donor.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>

                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/healthcare.jpg')} alt='' />
                            <h2 class="h1headingblack">indsutry:Healthcare</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">healthcare</p>
                            <p class="textworkimagecss">10Pearls transformed the company’s fragmented software deployment process from a resource-intensive effort into a fully automated, one-click process.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>

                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Zubie.jpg')} alt='' />
                            <h2 class="h1headingblack">Zubie</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">transportation</p>
                            <p class="textworkimagecss">Zubie selected 10pearls as a technical partner to develop the software for the company’s signature GPS device.</p>

                        </Item></Grid>

                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>

                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/time-warnernew.webp')} alt='' />
                            <h2 class="h1headingblack">Time Warner Cable</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">telecomm</p>
                            <p class="textworkimagecss">TWC selected 10Pearls as their development partner to design and develop the Performance Management application..</p>

                        </Item></Grid>

                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>

                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Nexttelnew.png')} alt='' />
                            <h2 class="h1headingblack">Nextel Brazil</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">telecom</p>
                            <p class="textworkimagecss">Nextel Brazil turned to 10Pearls as their technology partner to quickly create a mobile self-service, e-commerce application for their customers..</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>


                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/National%20geogrpahic.png')} alt='' />
                            <h2 class="h1headingblack">National Geographic</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">education</p>
                            <p class="textworkimagecss">10Pearls designed and built the GeoBee App, a fun, engaging and competitive experience used by students and teachers to drive better awareness of geography..</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/MBO%20Partner.png')} alt='' />
                            <h2 class="h1headingblack">MBO Partners</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">technology</p>
                            <p class="textworkimagecss">10Pearls built intelligent web and mobile applications that study the behavior of contractors as they browse for new opportunities.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/social-radarnew.webp')} alt='' />
                            <h2 class="h1headingblack">SocialRadar</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">technology</p>
                            <p class="textworkimagecss">SocialRadar is a location-based mobile social platform that allows people to be aware of the people and connections around them.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/DC_Taxinew.jpg')} alt='' />
                            <h2 class="h1headingblack">D.C. Taxi</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">transportation</p>
                            <p class="textworkimagecss">The Washington DC Taxicab Commission has adopted this platform to successfully launch “DC Taxi Driver”, the official mobile app for over 6,500 cabs.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Energy.png')} alt='' />
                            <h2 class="h1headingblack">Industry: Energy</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">energy</p>
                            <p class="textworkimagecss">10Pearls created an iOS app for execution of the smart procedures, a website to create and edit the smart procedures, and an API for integration with other systems.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/snapstylenew.webp')} alt='' />
                            <h2 class="h1headingblack">Snap & Style</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">retail</p>
                            <p class="textworkimagecss">Snap and Style is a stylist app that creates continuous expert communication between a retailer’s customers and store associates.</p>

                        </Item></Grid>
                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/docker.png')} alt='' />
                            <h2 class="h1headingblack">Docker</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">transportation</p>
                            <p class="textworkimagecss">10Pearls achieved FIPS 140-2 compliance in all enterprise products by refactoring core code base to utilize FIPS-compliant encryption algorithms.</p>

                        </Item></Grid>

                        <Grid md={4} sx={{ marginTop: '30px' }}><Item>
                            <img class="workimagecss" src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/ThomsanRueternew.png')} alt='' />
                            <h2 class="h1headingblack">Thomson Reuters</h2>
                            <p class="Workfeaturecasestudieslowerparagrph">finance</p>
                            <p class="textworkimagecss">10Pearls built a unique solution based on Salesforce.com Unlimited, that streamlined user experience and allowed for better integrations.</p>

                        </Item></Grid>

                    </Grid>
                </div>
            </div>
        </div >

    )
}


