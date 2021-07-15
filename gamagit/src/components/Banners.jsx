import '../styles/carousel.css'
import React, { Component } from "react"
import Slider from "react-slick";

import Banner from "../assets/img1carousel.jpg"

// eslint-disable-next-line
export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        speed: 500,
        fade: true,
        infinite: true,
        cssEase: 'linear',
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
        return (
            <section>
                <div className="carouselMain">
                    <Slider className="carousel1"{...settings}>
                        <div><img className="imgBanner" src={Banner} alt="Imagem do Banner" /></div>
                        <div><img className="imgBanner" src={Banner} alt="Imagem do Banner" /></div>
                        <div><img className="imgBanner" src={Banner} alt="Imagem do Banner" /></div>
                    </Slider>
                </div>
            </section>
        );
    }
}