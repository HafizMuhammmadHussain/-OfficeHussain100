import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

const image = [
    "https://10pearls.com/wp-content/uploads/2021/10/Augmentation-768x512.webp",
];
class Augmentation extends Component {


    render() {
        return (
            <div class="graysegment"  >
                <Grid container spacing={0} sx={{ marginLeft: '130px', marginRight: '135px', }}>
                    <Grid item xs={5} >
                        <Item>
                            <img src={image[0]}
                                blank='' width='480px' height='319%' />
                        </Item>
                    </Grid>
                    <Grid item xs={5} sx={{ paddingTop: '20px' }}>
                        <Item>
                            <h2 class="headingglobalpartner">Augmentation</h2>
                            <p class="careerparagraph">
                                Extend your agile development teams with a high-performance partner. We help you accelerate your digital journey through faster software delivery to outpace the competition.                            </p>

                            <p class="leanmorecss">learn more</p>

                        </Item>
                    </Grid>


                </Grid>


            </div>
        );
    }
}

export default Augmentation;