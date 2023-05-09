import { text } from '@fortawesome/fontawesome-svg-core';
import { textAlign } from '@mui/system';
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

class Innovationclass extends Component {
    state = {}
    render() {
        return (
            <div className="graysegment">
                < Grid container spacing={0} sx={{ marginLeft: '130px', marginRight: '135px', }}>
                    <Grid item xs={6} sx={{ paddingTop: '20px' }}>
                        <Item>
                            <div>
                                <h2 class="headingglobalpartner">Innovation</h2>
                                <p class="careerparagraph" style={{ paddingRight: '12px' }}>We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale.</p>
                                <p class="leanmorecss">learn more</p>
                            </div>

                        </Item>
                    </Grid>
                    <Grid item xs={4} >
                        <Item>
                            <img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Innovation.webp')}
                                blank='' width='480px' height='319%' />
                        </Item>
                    </Grid>


                </Grid>

            </ div>
        );

    }
}


export default Innovationclass;