import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { fontSize, fontStyle } from '@mui/system';
import React from 'react'
import { Button } from '@mui/material';

export default function Careers() {
    const image = [
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-21-6.jpg",
        "https://10pearls.com/wp-content/uploads/2022/08/lifet-at-10Pearls-USA-1024x683.jpg",
        "https://10pearls.com/wp-content/uploads/2021/08/img-6@3x-1024x502.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-24-1.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-23-3.jpg",
        "https://10pearls.com/wp-content/uploads/2021/08/img-2@3x-1-1024x793.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-22-1536x1077.jpg",
        "https://10pearls.com/wp-content/uploads/2021/09/10PTeam-768x449.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-26.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-28.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-29.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-28.jpg",
        "https://10pearls.com/wp-content/uploads/2021/08/img-5@3x-1-1024x793.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-30.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-32.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-31.jpg",
        "https://10pearls.com/wp-content/uploads/2021/08/img-7@2x-1024x515.jpg",
        "https://10pearls.com/wp-content/uploads/2021/08/img-2@3x-2-1024x793.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p26-1024x776.png",
        "https://10pearls.com/wp-content/uploads/2021/08/img-4@3x-2-1024x515.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-35.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-34.jpg",
        "https://10pearls.com/wp-content/uploads/2022/07/life-at-10p-36.jpg",
    ];
    return (
        <div style={{ marginTop: '65px' }} >
            <div style={{

                'backgroundImage': `url(${image[0]})`, width: '1214px',
                height: '400px',
            }}>

            </div>
            <Grid container sx={{ marginTop: '50px', lineHeight: '32px', }}>
                <Grid md={6}>
                    <Item><h1 style={{ fontWeight: '400' }}>Life at 10Pearls</h1></Item>
                </Grid>
                <Grid md={6}>
                    <Item><p class="careerparagraph">
                        At 10Pearls, we have an inclusive and collaborative work culture that inspires innovation, drives excellence, and unlocks a team member’s true potential through focused development, shared mission and a sense of community. We value our team as our greatest asset and we ensure everyone is respected, recognized and celebrated.
                        So, how is life at 10Pearls? Keep reading to learn more about our work culture and philosophy.</p></Item>
                </Grid>

            </Grid>

            <h2 class="headingcarrer"> WE ARE LIFELONG LEARNERS</h2>

            <p class="careerparagraph"> At 10Pearls, learning never stops. Whether it’s a casual
                conversation, a 10Pearls University bootcamp, or one of our guest speaker sessions
                conducted by acclaimed local and international speakers, learning is embedded into
                everything we do. Plus, every learning opportunity is open to all—from trainees to
                folks who have been with us for 10 years. If you feel a program will benefit you, you
                are more than welcome to be a part of it.
            </p>

            <Grid container>
                <Grid md={8} >
                    <Item>
                        <img src={image[1]} alt='' width='700px' height='300px' />

                    </Item></Grid>
                <Grid md={3} >
                    <Item>
                        <img src={image[2]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={4} sx={{ marginRight: '55px', marginTop: '20px' }}>
                    <Item>
                        <img src={image[3]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={7} sx={{ marginTop: '20px' }}>
                    <Item>

                        <img src={require('../../assets/careerimage1downloaded.jpg')} alt='' width='705px' height='300px' />


                    </Item></Grid>
            </Grid>


            <Grid container sx={{ marginTop: '60px', marginLeft: '40px' }}>
                <Grid md={1}>
                    <Item>

                        <img src={require("../../assets/Inverted_commasnew.png")} alt="" width="80px" height="40px" />
                    </Item>
                </Grid>

                <Grid md={11} sx={{ paddingLeft: '10px' }}>
                    <Item>
                        <p class='careerparagraphcomma'>

                            I have drastically improved my soft skills by attending
                            various hands-on trainings. I am more confident and have
                            stronger relationships with clients and my colleagues.
                        </p>

                    </Item>
                </Grid>
            </Grid>

            <h2 class="headingcarrer">WE PURSUE IDEAS AND PASSIONS
            </h2>
            <p class="careerparagraph">Our state-of-the-art facilities allow our teams to truly innovate and pursue cutting-edge ideas. 10Pearls Labs, our extensive R&D facility, is open for all employees to work on transformative tech such as AI, ML, AR/VR, blockchain, etc. Our ecosystem provides opportunities to explore disruptive ideas, brainstorm with colleagues, and bring them to life. We are proud to share that at 10Pearls Labs, our team has designed solutions for healthcare, logistics, retail, finance, telecom, education, and many other industries.</p>


            <Grid container sx={{ marginTop: '50px' }}>
                <Grid md={8} >
                    <Item>
                        <img src={image[4]} alt='' width='700px' height='300px' />

                    </Item></Grid>
                <Grid md={3} >
                    <Item>
                        <img src={image[5]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={4} sx={{ marginRight: '55px', marginTop: '20px' }}>
                    <Item>
                        <img src={image[6]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={7} sx={{ marginTop: '20px' }}>
                    <Item>
                        <img src={image[7]} alt='' width='700px' height='300px' />
                    </Item></Grid>
            </Grid>



            <Grid container sx={{ marginTop: '60px', marginLeft: '40px' }}>
                <Grid md={1}>
                    <Item>

                        <img src={require("../../assets/Inverted_commasnew.png")} alt="" width="80px" height="40px" />
                    </Item>
                </Grid>

                <Grid md={10} sx={{ paddingLeft: '10px', }}>
                    <Item>
                        <p class="careerparagraphcomma" >
                            I feel energized whenever I enter 10Pearls Labs. It’s the anticipation of working on something possibly groundbreaking which truly inspires me—every single day.
                        </p>
                    </Item>
                </Grid>
            </Grid>


            <h2 class="headingcarrer">WE THRIVE ON CHALLENGES</h2>
            <p class="careerparagraph">
                We believe there is transformative power in engaging different perspectives.
                We foster a culture where people of diverse backgrounds and experiences
                feel recognized and comfortable to be who they are, and feel inspired to
                do their very best. We are committed to have a Diverse, Equity focused
                and Inclusive culture and provide a conducive environment for our team
                where they feel empowered to grow.</p>

            <Grid container sx={{ marginTop: '50px' }}>
                <Grid md={8} >
                    <Item>
                        <img src={image[8]} alt='' width='700px' height='300px' />

                    </Item></Grid>
                <Grid md={3} >
                    <Item>
                        <img src={image[9]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={4} sx={{ marginRight: '55px', marginTop: '20px' }}>
                    <Item>
                        <img src={image[10]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={7} sx={{ marginTop: '20px' }}>
                    <Item>


                        <img src={image[11]} alt='' width='700px' height='300px' />

                    </Item></Grid>
            </Grid>

            <Grid container sx={{ marginTop: '60px', marginLeft: '40px' }}>
                <Grid md={1}>
                    <Item>

                        <img src={require("../../assets/Inverted_commasnew.png")} alt="" width="80px" height="40px" />
                    </Item>
                </Grid>

                <Grid md={10} sx={{ paddingLeft: '10px', }}>
                    <Item>
                        <p class="careerparagraphcomma" >
                            The exposure I have received here is unmatched. Each project is unique, complex,
                            and gives
                            me an opportunity to do something new.
                        </p>
                    </Item>
                </Grid>
            </Grid>

            <h2 class="headingcarrer">WE EMBRACE AN OPEN WORK CULTURE</h2>
            <p class="careerparagraph">
                Our open-door policy encourages dialogue and communication between all our employees,
                across departments and locations. Every team member can easily access any of the senior management to discuss an idea, raise a concern, or seek guidance. We foster this feeling of openness not only through regular all-staff meetings and team sessions with our co-founders, but also by simply hanging out and eating together! With zero tolerance for
                counterproductive work politics, we take pride in providing a truly employee-centric culture.</p>

            <Grid container sx={{ marginTop: '50px' }}>
                <Grid md={8} >
                    <Item>
                        <img src={image[12]} alt='' width='700px' height='300px' />

                    </Item></Grid>
                <Grid md={3} >
                    <Item>
                        <img src={image[13]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={4} sx={{ marginRight: '55px', marginTop: '20px' }}>
                    <Item>
                        <img src={image[14]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={7} sx={{ marginTop: '20px' }}>
                    <Item>
                        <img src={image[15]} alt='' width='700px' height='300px' />
                    </Item></Grid>
            </Grid>

            <Grid container sx={{ marginTop: '60px', marginLeft: '40px' }}>
                <Grid md={1}>
                    <Item>

                        <img src={require("../../assets/Inverted_commasnew.png")} alt="" width="80px" height="40px" />
                    </Item>
                </Grid>

                <Grid md={10} sx={{ paddingLeft: '10px', }}>
                    <Item>
                        <p class="careerparagraphcomma" >
                            It’s inspiring to know that I am trusted and given ownership of work. I know that I am
                            contributing to our company’s growth, and that really motivates me..
                        </p>
                    </Item>
                </Grid>
            </Grid>

            <h2 class="headingcarrer">WE BRING THE POWER OF DIVERSITY TO LIFE</h2>
            <p class="careerparagraph">
                We believe there is transformative power in engaging different perspectives. We foster a culture where people of
                diverse backgrounds and experiences feel recognized and comfortable to be who they are, and feel inspired to do
                their very best. We are committed to have a Diverse, Equity
                focused and Inclusive culture and provide a conducive environment for our team where they feel empowered to grow.</p>

            <Grid container sx={{ marginTop: '50px' }}>
                <Grid md={8} >
                    <Item>
                        <img src={image[16]} alt='' width='700px' height='300px' />

                    </Item></Grid>
                <Grid md={3} >
                    <Item>
                        <img src={image[17]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={4} sx={{ marginRight: '55px', marginTop: '20px' }}>
                    <Item>
                        <img src={image[18]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={7} sx={{ marginTop: '20px' }}>
                    <Item>
                        <img src={image[19]} alt='' width='700px' height='300px' />
                    </Item></Grid>
            </Grid>


            <Grid container sx={{ marginTop: '60px', marginLeft: '40px' }}>
                <Grid md={1}>
                    <Item>

                        <img src={require("../../assets/Inverted_commasnew.png")} alt="" width="80px" height="40px" />
                    </Item>
                </Grid>

                <Grid md={10} sx={{ paddingLeft: '10px', }}>
                    <Item>
                        <p class="careerparagraphcomma" >
                            It’s heartwarming to be celebrated for who I am, and to absorb diverse viewpoints.
                            All this has given me invaluable exposure,
                            taught me empathy, and deeper perspective to create better and inclusive solutions.
                        </p>
                    </Item>
                </Grid>
            </Grid>

            <h2 class="headingcarrer">WE ARE “ONE TEAM”</h2>
            <p class="careerparagraph">
                Like all successful teams, we champion each other. We believe that each of us brings
                something unique to the table, and those unique skills make us stronger as a team.
                Through employee reward and recognition initiatives, we celebrate top-performing
                members and acknowledge each employee’s strengths and potential.</p>

            <Grid container sx={{ marginTop: '50px' }}>
                <Grid md={8} >
                    <Item>
                        <img src={image[20]} alt='' width='700px' height='300px' />

                    </Item></Grid>
                <Grid md={3} >
                    <Item>
                        <img src={image[21]} alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={4} sx={{ marginRight: '55px', marginTop: '20px' }}>
                    <Item>
                        <img src={require('../../assets/Inverted_commasnew.png')}
                            alt='' width='400px' height='300px' />

                    </Item></Grid>
                <Grid md={7} sx={{ marginTop: '20px' }}>
                    <Item>
                        <img src={image[22]} alt='' width='700px' height='300px' />
                    </Item></Grid>
            </Grid>

            <Grid container sx={{ marginTop: '60px', marginLeft: '40px' }}>
                <Grid md={1}>
                    <Item>

                        <img src={require("../../assets/Inverted_commasnew.png")} alt="" width="80px" height="40px" />
                    </Item>
                </Grid>

                <Grid md={10} sx={{ paddingLeft: '10px', }}>
                    <Item>
                        <p class="careerparagraphcomma" >
                            Our team is the core reason for our success. We deeply value and
                            invest in them, and strive to ensure they live a fulfilling and
                            meaningful life.
                        </p>
                    </Item>
                </Grid>
            </Grid>

            <p style={{
                color: '#2a2a2a',
                textAlign: 'center',
                fontSize: '25px',
                fontWeight: '400',
            }}>
                Want to join our one-of-a-kind team at 10Pearls? Get in touch with us here!
            </p>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button variant="contained"
                    style={{ padding: '10 30 10 30' }}
                >
                    see job openings
                </Button>
            </div>
        </div>

    )
}


