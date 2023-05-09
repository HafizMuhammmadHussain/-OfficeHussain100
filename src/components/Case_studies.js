import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from 'react';
import Button from '@mui/material/Button';

const images = [
    "https://10pearls.com/wp-content/uploads/2021/10/MedStar.webp",
    "https://10pearls.com/wp-content/uploads/2021/10/aarp.webp",
    "https://10pearls.com/wp-content/uploads/2021/10/Decisiv.webp",
    "https://10pearls.com/wp-content/uploads/2021/10/Paypal.webp",
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

class Case_studies extends Component {
    state = {}
    render() {
        return (


            <div style={{ marginTop: '120px', }}>
                <h2 class="headingcarrer" >OUR WORK</h2>
                <h2 class="headingglobalpartner">Featured case studies</h2>

                <Carousel

                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"

                >

                    <div style={{ color: 'gray' }}    >
                        <h2 class="headingglobalpartner" >Paypal</h2 >
                        <img src={images[0]} blank='' width='300px' height='150px'
                        />
                        <br />
                        <a className="Anchorclass" width="auto" >How to Align Enterprise Security & User Experience</a>
                    </div>
                    <div style={{ color: 'gray' }} >
                        <h2 class="headingglobalpartner">Med Star Health</h2>
                        <img src={images[1]} blank='' width='300px' height='150px' />
                        <br />
                        <a className="Anchorclass">New Product Development</a>
                    </div>
                    <div style={{ color: 'gray' }}  >
                        <h2 class="headingglobalpartner">AARP</h2>
                        <img src={images[2]} blank='' width='300px' height='150px' />
                        <br />
                        <a className="Anchorclass">10 Pearls University: Center for Continuous & Advanced Learning</a>
                    </div>
                    <div style={{ color: 'gray' }} >
                        <h2 class="headingglobalpartner">Deisiv</h2 >
                        <img src={images[3]} blank='' width='300px' height='150px' />
                        <br />
                        <a className="Anchorclass">10 Pearls University: Center for Continuous & Advanced Learning</a>

                    </div>



                </Carousel>
                <div style={{ marginTop: '80px', textAlign: 'center' }} >
                    <Button sx={{ color: 'secondary' }} variant="outlined">see case studies</Button>
                </div>
            </div>
        );
    }
}


export default Case_studies;
