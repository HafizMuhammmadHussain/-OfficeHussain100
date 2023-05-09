import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from 'react';

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

class Helps extends Component {
    state = {}
    render() {
        return (


            <div style={{ marginTop: '40px', }}>
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

                    <div   >
                        <img src={require('../../assets/helppic1.webp')} blank='' width='300px' height='150px'
                        />
                        <br />
                        <a className="Anchorclass" >10 Pearsl 90 Day Mindset</a>
                    </div>


                    <div    >
                        <img src={require('../../assets/helpic2.webp')} blank='' width='300px' height='150px'
                        />
                        <br />
                        <a className="Anchorclass">How to Align Enterprise Security & User Experience</a>
                    </div>
                    <div >
                        <img src={require('../../assets/helppic3.webp')} blank='' width='300px' height='150px' />
                        <br />
                        <a className="Anchorclass">New Product Development</a>
                    </div>
                    <div   >
                        <img src={require('../../assets/pic4.webp')} blank='' width='300px' height='150px' />
                        <br />
                        <a className="Anchorclass">10 Pearls University: Center for Continuous & Advanced Learning</a>
                    </div>
                    <div   >
                        <img src={require('../../assets/pic5.webp')} blank='' width='300px' height='150px' />
                        <br />
                        <a className="Anchorclass">10Pearls Tips: Designing a Secure IoT Device</a>
                    </div>
                    <div   >
                        <img src={require('../../assets/pic6.webp')} blank='' width='300px' height='150px' />
                        <br />
                        <a className="Anchorclass">DevOps Best Practices: QA Test Automation</a>
                    </div>
                    <div   >
                        <img src={require('../../assets/pic7.webp')} blank='' width='300px' height='150px' />
                        <br />

                        <a className="Anchorclass">GDPR Demystified</a>
                    </div>

                </Carousel>
            </div>
        );
    }
}


export default Helps;
