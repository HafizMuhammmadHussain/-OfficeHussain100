import { Typography } from '@mui/material';
import React, { Component } from 'react';
import App from '../App';
import Helps from './Appbar/Help';
import Augmentation from './Augment';
import Casestudies from './Case_studies';
import Digitalization from './Digital';
import Footer from './Footer';
import GlobalPartners from './Globalpartners';
import Innovationclass from './Innovation';
import Modernization from './Modern';
import Readystarted from './Ready';
import Recognitions from './Recognition';
import Slidee from './slide';
import Technologyplatform from './Technology';
function Home() {
    return (
        <div container>
            <Slidee />
            <GlobalPartners />
            <div style={{ marginTop: '90px' }}>
                <h2 class="headingglobalpartner" >
                    We help businesses disrupt, accelerate & scale
                </h2>
                <Helps />
                <Innovationclass />
                <Modernization />
                <Digitalization />
                <Augmentation />
                <Casestudies />
                <Technologyplatform />
                <Recognitions />
                <Readystarted />

            </div>
        </div>

    );
}

export default Home;