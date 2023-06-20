import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
declare const Carousel: FC<SliderI>;
export default Carousel;
export interface SliderI {
    dots?: boolean;
    arrows?: boolean;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    children?: any;
    fade?: boolean;
    swipeToSlide?: boolean;
    verticalSwiping?: boolean;
    responsive?: any;
    vertical?: boolean;
    infinite?: boolean;
    dotsalign?: "bottomRight" | "bottomLeft" | "bottomCenter" | "topLeft" | "topRight";
    arrowalign?: "center" | "topleft" | "topright" | "bottomright" | "default" | "bottomleft" | "bottomCenter";
    key?: any;
}
