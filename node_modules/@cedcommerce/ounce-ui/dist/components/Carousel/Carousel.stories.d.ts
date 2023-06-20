import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Carousel").SliderI>;
    argTypes: {
        dots: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        arrows: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        slidesToShow: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        slidesToScroll: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        autoplay: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        swipeToSlide: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        autoplaySpeed: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        infinite: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        responsive: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        vertical: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        verticalSwiping: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        fade: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        id: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        asNavFor: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        dotsalign: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        arrowalign: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const Carousel_with_autoplay_and_dots: any;
export declare const Carousel_with_arrows_and_dots: any;
export declare const Carousel_with_only_dots: any;
export declare const Carousel_with_only_arrows: any;
export declare const vertical_swiping: any;
export declare const infinite_carousel: any;
export declare const carousel_sync: any;
