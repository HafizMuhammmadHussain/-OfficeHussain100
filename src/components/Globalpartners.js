
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Typography } from '@mui/material';


class GlobalPartners extends Component {
    render() {
        return (
            <div style={{ marginTop: '90px' }}>
                <h2 class="headingglobalpartner">
                    We partner with global enterprises and high-growth companies
                </h2>
                <Grid container spacing={2} sx={{
                    marginTop: '70px', gridRowGap: '45px',
                }}>
                    <Grid item md={2.4} >
                        <Item >
                            <img src={require('file:///C:/Users/Hafiz%20M.Hussain/AppData/Roaming/Microsoft/Windows/Network%20Shortcuts/johnsonjohnson.png')}
                                blank='' width='170px' height='150px' style={{ marginTop: '-40px' }} />
                        </Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <Item>
                            <img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/paypals.png')} blank='' width='150px' height='60px' />
                        </Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <Item>
                            <img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/CNX.jpg')} blank='' width='150px' height='40px' />
                        </Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Uber.png')} blank='' width='150px' height='40px' /></Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <Item>
                            <img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/intuit.png')} blank='' width='150px' height='40px' />
                        </Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/medstartlogonew.png')} blank='' width='150px' height='80px' />
                        </Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Capitalone.png')} blank='' width='150px' height='80px' />  </Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/DiscoveryEducation.png')} blank='' width='150px' height='50px' /></Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/surveymonkey.png')} blank='' width='150px' height='50px' />
                        <Item></Item>
                    </Grid>
                    <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/blackboard.png')} blank='' width='150px' height='60px' /> </Item>
                    </Grid> <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/National%20geogrpahic.png')} blank='' width='150px' height='60px' /></Item>
                    </Grid> <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/k12.png')} blank='' width='150px' height='60px' /> </Item>
                    </Grid> <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/Decisiv.jpg')} blank='' width='150px' height='50px' /></Item>
                    </Grid> <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/docker.png')} blank='' width='150px' height='50px' /></Item>
                    </Grid> <Grid item md={2.4}>
                        <Item><img src={require('file:///C:/Users/Hafiz%20M.Hussain/AppData/Roaming/Microsoft/Windows/Network%20Shortcuts/AARP.png')} blank='' width='150px' height='50px' /></Item>
                    </Grid>
                </Grid>
            </div >
        );
    }
}
export default GlobalPartners;