import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import React from 'react'
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import Recognitions from '../Recognition';

const images = ["https://10pearls.com/wp-content/uploads/2020/11/rectangle-103-2.png",
    "https://10pearls.com/wp-content/uploads/2020/11/group-2.jpg",
    "https://10pearls.com/wp-content/uploads/2022/08/updated-1536x936.jpg",

];
const image = [
    "https://10pearls.com/wp-content/uploads/2020/09/MIKE_HEADSHOT_FINAL.jpg",
    "https://10pearls.com/wp-content/uploads/2021/04/CarrieKerpen.png",
    "https://10pearls.com/wp-content/uploads/2021/04/sarah-png-e1618559923370.png",
    "https://10pearls.com/wp-content/uploads/2021/04/peter.png",
    "https://10pearls.com/wp-content/uploads/2022/08/jessicaimg.png",
    "https://10pearls.com/wp-content/uploads/2021/02/tmp_1613723113256.jpg",
    "https://10pearls.com/wp-content/uploads/2021/10/kara.jpg",
    "https://10pearls.com/wp-content/uploads/2022/08/Antino.png",
    "https://10pearls.com/wp-content/uploads/2021/04/imran.png",
    "https://10pearls.com/wp-content/uploads/2021/10/Adolfo-Cruz.png",
    "https://10pearls.com/wp-content/uploads/2021/04/dan.png",
    "https://10pearls.com/wp-content/uploads/2021/10/Sana.jpg",
    "https://10pearls.com/wp-content/uploads/2021/04/zeeshan.png",
    "https://10pearls.com/wp-content/uploads/2021/10/Laura-Rojas.png",
    "https://10pearls.com/wp-content/uploads/2020/06/Michael.jpg",
    "https://10pearls.com/wp-content/uploads/2020/06/Adbul-Aziz.jpg",
    "https://10pearls.com/wp-content/uploads/2023/02/Maria-Asrar.jpg",
    "https://10pearls.com/wp-content/uploads/2020/07/pete-1.jpg",
    "https://10pearls.com/wp-content/uploads/2021/10/Beenish.jpg",
    "https://10pearls.com/wp-content/uploads/2021/04/jeronimo.png",
];

function Company() {
    return (
        <div style={{ marginTop: '120px' }} >
            <Grid container>
                <Grid md={5}  ><Item>
                    <h2 class="headingcarrer"   >ABOUT US</h2 >
                    <h1 class="h1headingblack" style={{ marginBottom: '20px' }} >We’re a human-centered business</h1>
                    <p class="careerparagraph">10Pearls was founded in 2004 by brothers Imran and Zeeshan Aftab. What began as a two-person operation is now a global organization of 1200+ with offices in DC, New York, London, San Jose, Toronto, Dubai, Karachi, Lahore, Islamabad and Medellin.</p>
                </Item></Grid>
                <Grid md={7}><Item>
                    <img src={require('../../assets/companyimage1.jpg')} blank='' width='auto' height='auto' />


                </Item></Grid>
            </Grid>


            <div class="graysegment">
                <Grid container>
                    <Grid md={5}> <Item> <img style={{ marginTop: '120px', marginLeft: '20px' }} src={require('../../assets/companyimage2.jpg')} blank='' width='520px' height='500px' />


                    </Item></Grid><Grid md={7}><Item>
                        <p style={{ marginTop: '50px', }} class="careerparagraph">
                            Since its inception, 10Pearls has been a “double bottom line” company, created to
                            deliver superior services and make a difference in the world. Our founders understood
                            first-hand how good jobs could change entire communities, particularly in emerging
                            countries. The value of high-paying jobs was evident in the enriched lives of
                            families, creating a ripple effect throughout an entire community.
                        </p>  <p class="careerparagraph">Fast-forward
                            to today, 10Pearls is helping startups and enterprises alike to compete in the digital
                            age while investing heavily in the wellbeing and training of our offshore teams.
                            We partner with our clients to imagine, design, build, and deliver innovative mobile
                            and digital products.

                        </p>

                        <button class='readstorybutton' >read our story</button>


                    </Item></Grid></Grid>
            </div>

            <Grid container sx={{ marginTop: '60px', marginLeft: '40px' }}>
                <Grid md={1}>
                    <Item>

                        <img src={require("../../assets/Inverted_commasnew.png")} alt="" width="80px" height="40px" />
                    </Item>
                </Grid>

                <Grid md={10} sx={{ paddingLeft: '10px', }}>
                    <Item>
                        <p class="careerparagraphcomma"  >
                            10Pearls reminds me of the 'double bottom line' businesses that Washington sports mogul Ted Leonsis espouses. That refers to businesses that earn profits while accomplishing some social good.                        </p>
                    </Item>
                </Grid>
            </Grid>
            <div style={{ borderLeft: '5px solid blue  ', height: '60px' }}><span> <h2 style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>Thomas Heath</h2></span>
                <span ><p style={{ marginTop: '-15px', paddingLeft: '15px', fontSize: '18px' }}>Washington Post</p></span></div>


            <ReactPlayer style={{ paddingTop: '60px', }} width={'40%'} height='300px'
                url="https://www.youtube.com/watch?v=_QPkFO3O4W4"
                playing={true}
                muted={true}
                controls={true}
            />

            <div class="graysegment">
                <div class="companythreeparagrahaftervidoe" >
                    <Grid container sx={{ paddingBottom: '70px' }}>
                        <Grid md={6} sx={{ paddingRight: '30px' }}><Item>
                            <h2 class="headingcarrer">10PEARLS LABS</h2>
                            <p class="careerparagraph">
                                Like all successful teams, we champion each other. We believe that each of us brings
                                something unique to the table, and those unique skills make us stronger as a team.
                                Through employee reward and recognition initiatives, we celebrate top-performing
                                members and acknowledge each employee’s strengths and potential.</p>
                            <button class='readstorybutton' >learn more</button>
                        </Item></Grid>
                        <Grid md={6}><Item>
                            <img src={images[0]} alt="" width="auto" height="auto" />


                        </Item></Grid>
                    </Grid>
                </div>
            </div>


            <div class="graysegment">
                <div class="companythreeparagrahaftervidoe">
                    <Grid container sx={{ paddingBottom: '70px' }}>

                        <Grid md={6}><Item>
                            <img src={images[1]} alt="" width="600px" height="500px" />
                        </Item></Grid>

                        <Grid md={6} sx={{ paddingLeft: '110px' }}><Item>
                            <h2 class="headingcarrer">10PEARLS UNIVERSITY</h2>
                            <p class="careerparagraph">
                                The 10Pearls University: Center for Continuous and Advanced Learning caters to all of
                                our employees’ diverse backgrounds (science, engineering, art, business, and more).
                                We organize workshops, training sessions, hackathons, and webinars. Our hope is that
                                each of our employees has the opportunity to enhance their skills, take bold initiatives, and become leaders in innovation.</p>
                            <button class='readstorybutton' >learn more</button>
                        </Item></Grid>
                    </Grid>
                </div>
            </div>

            <div class="graysegment" >
                <div class="companythreeparagrahaftervidoe">
                    <Grid container sx={{ paddingBottom: '70px' }}>
                        <Grid md={6} sx={{ paddingRight: '10px' }}><Item>
                            <h2 class="headingcarrer">EMPOWER FOUNDATION</h2>
                            <p class="careerparagraph">
                                From our founding, 10Pearls has been committed to enriching communities. We believe in much more than digital and corporate growth to contribute positively to society: doing good while doing well through volunteer events, free courses, and program sponsorships that focus on building a better world for women, children, and the disabled..</p>
                            <button class='readstorybutton' >learn more</button>
                        </Item></Grid>
                        <Grid md={6}><Item>
                            <img src={images[2]} alt="" width="600px" height="500px" />


                        </Item></Grid>
                    </Grid>
                </div>
            </div>

            <div style={{ marginTop: '100px', }}>
                <h2 class="headingcarrer">PEOPLE</h2>
                <div style={{ marginTop: '70px', }}>
                    <Grid container>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[0]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Mike Matheny</h2>
                                <p class="paragraphcompany">
                                    VP, Delivery </p>

                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid" >
                            <Item>
                                <img src={image[1]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Carrie Kerpen</h2>
                                <p class="paragraphcompany">
                                    Managing Director
                                </p>

                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[2]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Sarah Roderus</h2>
                                <p class="paragraphcompany">
                                    VP, Testing Services </p>

                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item><img src={image[3]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Peter Hesse</h2>
                                <p class="paragraphcompany">
                                    EVP & CSO
                                </p>

                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item><img src={image[4]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Jessica Saavedra</h2>
                                <p class="paragraphcompany">
                                    VP, Marketing
                                </p>

                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[5]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Asher Epstein</h2>
                                <p class="paragraphcompany">
                                    COO
                                </p>

                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[6]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Kara Glasgow</h2>
                                <p class="paragraphcompany">
                                    Product Delivery Manager

                                </p>
                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item><img src={image[7]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Antonio Ramirez</h2>
                                <p class="paragraphcompany">
                                    Managing Director, Digital

                                </p></Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item><img src={image[8]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Imran Aftab
                                </h2>
                                <p class="paragraphcompany">
                                    Co-Founder & CEO

                                </p></Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[9]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Adolfo Cruz</h2>
                                <p class="paragraphcompany">
                                    Managing Director

                                </p> </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[10]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Dan Zipper
                                </h2>
                                <p class="paragraphcompany">
                                    VP, Client Solutions


                                </p>
                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[11]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Syeda Sana Hussain</h2>
                                <p class="paragraphcompany">
                                    Senior Director, Human Capital


                                </p>
                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[12]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Zeeshan Aftab</h2>
                                <p class="paragraphcompany">
                                    Co-Founder & Managing Director


                                </p>
                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[13]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Laura Rojas</h2>
                                <p class="paragraphcompany">
                                    VP, Delivery


                                </p>
                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[14]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Michael McNamer</h2>
                                <p class="paragraphcompany" >
                                    VP, Identity Management & Principal Engineer
                                </p>
                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item>
                                <img src={image[15]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Abdul Aziz Shaikh
                                </h2>
                                <p class="paragraphcompany" >
                                    VP, Operations & Software Services

                                </p>
                            </Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item> <img src={image[16]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Maria Asrar</h2>
                                <p class="paragraphcompany" >
                                    Associate Director, People Success
                                </p></Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item> <img src={image[17]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Pete Niestroy</h2>
                                <p class="paragraphcompany" >
                                    Chief Financial Officer

                                </p></Item>
                        </Grid>
                        <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item> <img src={image[18]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Beenish Barlas
                                </h2>
                                <p class="paragraphcompany" >
                                    Senior Manager, Marketing
                                </p></Item>
                        </Grid>  <Grid md={2.4} id="Companypeopleimagegrid">
                            <Item> <img src={image[19]} alt="" class="Companypeopleimagesize" />
                                <h2 class="headingcompany">Jeronimo Castro
                                </h2>
                                <p class="paragraphcompany" >
                                    General Manager, Colombia

                                </p></Item>
                        </Grid>

                    </Grid>
                    <div style={{ textAlign: 'center', marginTop: '70px' }}>
                        <button class='readstorybutton'>load more</button>
                    </div>
                </div>
            </div>
            <Recognitions />

            <div style={{ backgroundColor: '#F2F2F2', marginLeft: '-130px', marginRight: '-135px', textAlign: 'center', paddingTop: '40px', paddingBottom: '50px' }}>
                <h2 class="headingglobalpartner"   >Jumpstart development with a design sprint</h2>
                <button class='readstorybutton'>load more</button>

            </div>
        </div >
    );

}
export default Company;

