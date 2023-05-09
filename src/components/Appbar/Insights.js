import { Button } from '@mui/material';
import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { fontSize, fontStyle } from '@mui/system';

export default function Insights() {

    const image = [
        'https://10pearls.com/wp-content/uploads/2020/10/insights-header.png',
    ];

    const images = [
        "https://10pearls.com/wp-content/uploads/2022/11/exelonimg.png",
        "https://10pearls.com/wp-content/uploads/2022/11/Healthcare.jpg",
        "https://10pearls.com/wp-content/uploads/2022/11/10pearls-acquires-whiz-thumb.png",
        "https://10pearls.com/wp-content/uploads/2022/11/wbj-fastest-growing-company-2022-thumb.png",
        "https://10pearls.com/wp-content/uploads/2022/08/10Pearls-Recognized-on-CRN-Fast-Growth-150-List-thumb.png",
        "https://10pearls.com/wp-content/uploads/2022/08/10Pearls-Inc.png",
        "https://10pearls.com/wp-content/uploads/2022/08/blog_Insight_pixel.png",
        "https://10pearls.com/wp-content/uploads/2022/07/MicrosoftTeams-image.png",
        "https://10pearls.com/wp-content/uploads/2022/06/10Pearls-Recognized-on-CRN.png",
        "https://10pearls.com/wp-content/uploads/2022/05/BlogInsight_Cloud.jpg",
        "https://10pearls.com/wp-content/uploads/2022/05/BlogInsight_Augmented-Reality.jpg",
        "https://10pearls.com/wp-content/uploads/2022/05/BlogInsight-Legacy.jpg",
    ];
    return (
        <div >
            <div style={{
                color: 'black',
                lineHeight: '34px',
                'backgroundImage': `url(${image[0]})`,
                width: '1214px',
                height: '400px',
                paddingTop: '150px',


            }}>
                <h1 style={{ fontWeight: '400', }}>Insights</h1>
                <p style={{ fontSize: '22px' }}>10Pearls thought leaders and subject matter
                    <br />experts share their insights and experiences</p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>

                `
                <Button variant="contained"
                    style={{ marginRight: '10px', }}
                >
                    all
                </Button>


                <Button variant="contained"
                    style={{ marginRight: '10px' }}
                >
                    videos
                </Button>
                <Button variant="contained"
                    style={{ marginRight: '10px' }}
                >
                    blog
                </Button>
                <Button variant="contained"
                    style={{ marginRight: '10px' }}
                >
                    ebooks
                </Button>
                <Button variant="contained"
                    style={{ marginRight: '10px' }}
                >
                    news
                </Button>
            </div>

            <Grid container sx={{ marginTop: '60px', width: 'auto', }}>
                <Grid md={4} sx={{ marginTop: '60px' }}  ><Item>
                    <img class="Insightimagecss" src={images[0]} alt='' />

                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >Exelon Recognizes 10Pearls in 2022 DEI Honor Roll.
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>
                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }}><Item>
                    <img class="Insightimagecss" src={images[1]} alt='' />

                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >Want to make healthcare better for all? Focus on Intuitive Design                       </p>
                        <p class="leanmorecss">read more</p>
                    </div>
                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }}><Item>
                    <img class="Insightimagecss" src={images[2]} alt='' />

                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >10Pearls Acquires Peru-based Software Development Company, Whiz
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>
                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }}><Item>


                    <img class="Insightimagecss" src={images[3]} alt='' />

                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >It’s a Double Win! 10Pearls Wins WBJ’s Fastest Growing Company in DC and Social Impact Eagle Awards
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>

                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }}><Item>
                    <img class="Insightimagecss" src={images[4]} alt='' />
                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >10Pearls Recognized as No. 23 on the 2022 CRN Fast Growth 150 List
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>


                </Item></Grid>

                <Grid md={4} sx={{ marginTop: '60px' }}><Item>

                    <img class="Insightimagecss" src={images[5]} alt='' />
                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >10Pearls Named to 2022 Inc. 5000 List of Fastest-Growing Companies in America for the 4th Time in a Row
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>
                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }}><Item>
                    <img class="Insightimagecss" src={images[6]} alt='' />
                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >10Pearls Acquires Digital Agency Pixel506.
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>
                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }} ><Item>

                    <img class="Insightimagecss" src={images[7]} alt='' />
                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >EY announces Imran Aftab of 10Pearls as an EY Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner.
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>


                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }} ><Item>

                    <img class="Insightimagecss" src={images[8]} alt='' />
                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >10Pearls Recognized on CRN’s 2022 Solution Provider 500 List
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>
                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }}><Item>

                    <img class="Insightimagecss" src={images[9]} alt='' />
                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >What Can the Cloud Do for Your Business?
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>
                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }}><Item>

                    <img class="Insightimagecss" src={images[10]} alt='' />
                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >Using Augmented Reality to Promote Your Brand
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>

                </Item></Grid>
                <Grid md={4} sx={{ marginTop: '60px' }}><Item>

                    <img class="Insightimagecss" src={images[11]} alt='' />
                    <div class="InsightImagegraydiv">
                        <p class="textworkimagecss" >Are Legacy Systems Holding You Back?
                        </p>
                        <p class="leanmorecss">read more</p>
                    </div>
                </Item></Grid>
            </Grid>



        </div>
    )
}


