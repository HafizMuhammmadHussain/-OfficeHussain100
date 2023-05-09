
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

const image = [
    "https://10pearls.com/wp-content/uploads/2021/10/Digitalization-768x512.webp",
];

class Digitalization extends Component {

    render() {
        return (
            <div class="graysegment"  >
                <Grid container spacing={0} sx={{ marginLeft: '130px', marginRight: '135px', }}>
                    <Grid item xs={6} sx={{ paddingTop: '20px' }} >
                        <Item>
                            <div>
                                <h2 class="headingglobalpartner" >Digitalization</h2>
                                <p class="careerparagraph">Automate manual business processes and optimize the customer experience for better efficiency and engagement. We implement intelligent digital platforms and solutions that drive productivity..</p>
                                <p class=" leanmorecss " >learn more</p>

                            </div>

                        </Item>
                    </Grid>
                    <Grid item xs={4} >
                        <Item>
                            <img src={image[0]}
                                blank='' width='480px' height='319%' />
                        </Item>
                    </Grid>


                </Grid>

            </div>
        );
    }
}

export default Digitalization;