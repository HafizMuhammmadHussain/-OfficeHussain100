import React from 'react';
import { Slide } from 'react-slideshow-image';
import './stylesheet.css';
import 'react-slideshow-image/dist/styles.css';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { NoEncryption } from '@mui/icons-material';
const Example = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",];

    return (
        <Slide  >
            <div className="each-slide-effect" >
                <div style={{
                    'backgroundImage': `url(${images[0]})`, marginTop: "64px", height: "450px"
                }}>


                    <Grid container justify="space-between">
                        <div style={{ marginLeft: '150px', textAlign: 'left' }}  ><h1 class="h1headingblack"  >Reimagine with Purpose</h1>
                            <p class="careerparagraph">
                                We help businesses digitally transform, build new<br />
                                products, and accelerate digital teams.</p>
                            <button className='buttoninfirstslide' >
                                let's build something
                            </button>
                        </div>
                    </Grid>
                </div>
            </div>
            <div className="each-slide-effect"  >
                <div style={{ 'backgroundImage': `url(${images[1]})`, marginTop: "64px", height: "450px" }}>
                    <Grid container justify="space-between" sx={{ flexDirection: 'row-reverse', }}>
                        <div style={{ marginRight: '150px', }}  >
                            <h2 class="h1headingblack">    A recognized tech partner that<br />guarantees performance.</h2>
                            <button className='buttoninfirstslide' >
                                let's build something
                            </button>
                        </div>
                    </Grid>
                </div>
            </div>

        </Slide >
    );
};

export default Example;