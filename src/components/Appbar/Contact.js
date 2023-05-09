import Grid from '@mui/material/Grid';
import React from 'react'
import Item from '@mui/material/Grid';
import { fontWeight } from '@mui/system';
import { TextField } from '@mui/material';
import ReCAPTCHA from "react-google-recaptcha";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const images = [
    "https://10pearls.com/wp-content/uploads/2020/10/washington-dc-400-x-300@2x.png",
    "https://10pearls.com/wp-content/uploads/2021/08/New-york.jpg",
    "https://10pearls.com/wp-content/uploads/2021/08/San-Jose-Costa-Rica.jpg",
    "https://10pearls.com/wp-content/uploads/2020/10/london.png",
    "https://10pearls.com/wp-content/uploads/2020/10/karachi-2-400-x-300@2x.png",
    "https://10pearls.com/wp-content/uploads/2020/10/columbia-image-400-x-300@2x.png",
    "https://10pearls.com/wp-content/uploads/2021/08/Lima-Peru.jpg",
    "https://10pearls.com/wp-content/uploads/2021/03/Lahore.png",
    "https://10pearls.com/wp-content/uploads/2021/03/Islamabad.png",
    "https://10pearls.com/wp-content/uploads/2020/10/dubai-400-x-300@2x.png",

];

export default function Contact() {

    const image = ["https://10pearls.com/wp-content/uploads/2020/09/contact-banner.png",];

    return (
        <div>
            <img className='appsize'
                src={image[0]}
                style={{
                    height: '430px',
                    width: '1351px',
                    color: 'black',
                    marginLeft: '-136px',

                }} />

            <Grid container sx={{ marginTop: '80px' }}>
                <Grid md={6}><Item>
                    <h1 style={{ marginTop: '80px', fontWeight: '350' }}>We’re the full package.
                        reach out and we'll see how we can help.</h1>
                </Item></Grid>
                <Grid md={4} >
                    <Item>
                        <Grid container sx={{ paddingLeft: '70px' }}>
                            <Grid md={8}><Item> <TextField id="standard-basic" label="Name*" variant="standard" /></Item></Grid>
                            <Grid md={8}><Item><TextField id="standard-basic" label="Email*" variant="standard" /> </Item></Grid>
                            <Grid md={8}><Item><TextField id="standard-basic" label="Company*" variant="standard" />
                            </Item></Grid>
                            <Grid md={8}><Item><TextField id="standard-basic" label="Phone Number" variant="standard" />
                            </Item></Grid>
                            <Grid md={8}><Item><TextField id="standard-basic" label="How did you hear about us?" variant="standard" />
                            </Item></Grid>
                            <Grid md={8}><Item><TextField id="standard-basic" label="Message" variant="standard" />
                            </Item></Grid>
                        </Grid>


                    </Item>
                </Grid>


            </Grid>

            <div style={{ backgroundColor: ' #F2F2F2 ' }}>
                <h2 class="headingcarrer" style={{ marginLeft: '30px', paddingTop: '80px' }}>OUR LOCATIONS</h2>

                <Grid container sx={{ marginTop: '40px', marginLeft: '30px', width: 'auto' }}>
                    <Grid sx={{ marginBottom: '20px' }} md={4} ><Item>
                        <img class="workimagecss" src={images[0]} alt='' />

                        <h2 className="contactclassheadingcss">Washington DC</h2>
                        <p className='contactclassparagraphcss'>8614 Westwood Center Dr, Ste 540 Vienna, VA 22182</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >(703) 935-1919</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4}  ><Item>
                        <img class="workimagecss" src={images[1]} alt='' />

                        <h2 className="contactclassheadingcss">New York</h2>
                        <p className='contactclassparagraphcss' style={{ paddingRight: '10px' }}>240 W 37th St., Suite 301
                            New York, NY 10018</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >(703) 935-1919</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4} ><Item>
                        <img class="workimagecss" src={images[2]} alt='' />

                        <h2 className="contactclassheadingcss">San Jose</h2>
                        <p className='contactclassparagraphcss'>Plaza Obelisco Business Center
                            San Jose, Costa Rica</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >1 (716) 226-0031</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4} sx={{ marginBottom: '20px' }}><Item>
                        <img class="workimagecss" src={images[3]} alt='' />

                        <h2 className="contactclassheadingcss">London</h2>
                        <p className='contactclassparagraphcss'>Belle House, 1 Hudson’s Place, Victoria London, SW1V 1JT</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >+44 7957 620104</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4} ><Item>
                        <img class="workimagecss" src={images[4]} alt='' />

                        <h2 className="contactclassheadingcss">Karachi</h2>
                        <p className='contactclassparagraphcss'>9th floor, Parsa Tower, Main Shahra-e-Faisal, Karachi, Pakistan</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >+92 21 34328447-8</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4} ><Item>
                        <img class="workimagecss" src={images[5]} alt='' />

                        <h2 className="contactclassheadingcss">Medellin</h2>
                        <p className='contactclassparagraphcss'>Centro Empresarial Ciudad Del Río, Oficina. 803, Medellin, Colombia</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >+57 4 448 08 35</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4} sx={{ marginBottom: '30px' }} ><Item>
                        <img class="workimagecss" src={images[6]} alt='' />

                        <h2 className="contactclassheadingcss">Lima</h2>
                        <p className='contactclassparagraphcss'>ICHMA Business Center
                            Lima, Peru</p>
                        <Grid container sx={{ marginTop: '40px' }}>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >1 (716) 226-0031</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4} ><Item>
                        <img class="workimagecss" src={images[7]} alt='' />

                        <h2 className="contactclassheadingcss">Lahore</h2>
                        <p className='contactclassparagraphcss' style={{ paddingRight: '10px' }}>32 Block C/1, Ghalib Road
                            Gulberg-III, Lahore</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >+92 42 32150119-21</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4} ><Item>
                        <img class="workimagecss" src={images[8]} alt='' />

                        <h2 className="contactclassheadingcss">Islamabad</h2>
                        <p className='contactclassparagraphcss'>4th Floor, One Expressway, Gulberg Greens, Islamabad</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >+92 51 8749814</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                    <Grid md={4} ><Item>
                        <img class="workimagecss" src={images[9]} alt='' />

                        <h2 className="contactclassheadingcss">Dubai</h2>
                        <p className='contactclassparagraphcss'>Office No. 103, First Floor, DIC Building 13, Dubai Internet City, Dubai, UAE</p>
                        <Grid container>
                            <Grid md={1}>
                                <Item><PhoneIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >+971 4 552 0412</p></Item>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '-20px' }}>
                            <Grid md={1}>
                                <Item><EmailIcon className="contactclassicon" /></Item>
                            </Grid>
                            <Grid md={11} >
                                <Item><p className='contactclassaragraphwithinIcomcss' >info@10pearls.com</p></Item>
                            </Grid>
                        </Grid>
                    </Item></Grid>


                </Grid>
            </div >


        </div >

    )
}


