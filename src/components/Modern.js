import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

class Modernization extends Component {

    render() {
        return (
            <div class="graysegment" >
                <Grid container spacing={0} sx={{ marginLeft: '130px', marginRight: '135px', }}>
                    <Grid item xs={5} >
                        <Item>
                            <img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Modernization.webp')}
                                blank='' width='480px' height='319%' />
                        </Item>
                    </Grid>
                    <Grid item xs={5} sx={{ paddingTop: '20px' }}>
                        <Item>
                            <h2 class="headingglobalpartner">Modernization</h2>
                            <p class="careerparagraph">
                                Unleash the value of your existing technology by re-architecting it for the future. We help you modernize platforms and applications for high performance, better user experience, scale, and security.
                            </p>
                            <p class=" leanmorecss " >learn more</p>

                        </Item>
                    </Grid>


                </Grid>


            </div>
        );
    }
}

export default Modernization;