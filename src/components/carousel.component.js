import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarouselComponent() {
    return (
        
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
            <div>
                    <img src="../dog_1.jpg"  height="200" width="200" />
                </div>
                <div>
                    <img src="../dog_6.jpg" height="200" width="200" />
                </div>
                <div>
                    <img src="../dog_9.jpg" height="200" width="200" />
                </div>
                <div>
                    <img src="../dog_10.jpg" height="200" width="200" />
                </div>
                <div>
                    <img src="../dog_11.jpg" height="200" width="200" />
                </div>
            </Carousel>
        </div>
    );
}