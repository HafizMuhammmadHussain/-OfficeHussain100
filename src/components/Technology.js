import { Typography } from '@mui/material';
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';



class Technologyplatform
    extends Component {
    images = [
        "https://10pearls.com/wp-content/uploads/2020/11/Google_Cloud_Logo.svg",
        "https://10pearls.com/wp-content/uploads/2021/10/aws-partnernetwork.svg",
        "https://10pearls.com/wp-content/uploads/2021/10/microsoft-partner-logo-new.svg",
        "https://10pearls.com/wp-content/uploads/2020/11/salesforce_logo.svg",
        "https://10pearls.com/wp-content/uploads/2020/11/servicenow-1-1.svg",
        "https://10pearls.com/wp-content/uploads/2020/11/sap-ariba-vector-logo-1.svg",
        "https://10pearls.com/wp-content/uploads/2020/11/Microsoft_Azure_Logo.svg",
        "https://10pearls.com/wp-content/uploads/2020/11/Adobe_logo_and_wordmark_2017.svg",

    ];
    state = {}
    render() {
        return (
            <div style={{
                marginTop: '150px', backgroundColor: '#F2F2F2', marginLeft: '-130px', marginRight: '-135px',
            }}>
                <div style={{ marginLeft: '130px', marginRight: '135px', paddingRight: '70px' }}>
                    <h2 class="headingcarrer" style={{ paddingTop: '70px' }}   >TECHNOLOGY PLATFORMS
                    </h2>

                    <Grid container spacing={3} sx={{ marginTop: '60px', }}

                    >    {this.images.map(image => (

                        <Grid item xs={3} sx={{ paddingBottom: "40px", paddingRight: "4px" }}>
                            <Item>
                                <img src={image} />

                            </Item>
                        </Grid>
                    ))}

                    </Grid>
                </div>
            </div >
        )

    }
}

export default Technologyplatform;
;