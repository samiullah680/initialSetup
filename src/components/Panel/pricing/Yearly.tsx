import { Card, Carousel, FlexLayout, TextStyles, Button } from "@cedcommerce/ounce-ui";
import React from "react";
import { Check } from 'react-feather';

function Yearly(): JSX.Element {
    const data = [
        {
            title: "Free",
            price: 0,
            Bill_rate: 0,
            feature: [
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
            ]
        },
        {
            title: "Advance",
            price: 250,
            popular: true,
            Bill_rate: 150,
            feature: [
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
            ]
        },
        {
            title: "Pro",
            price: 350,
            Bill_rate: 250,
            feature: [
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
            ]
        },
        {
            title: "Pro",
            price: 350,
            Bill_rate: 250,
            feature: [
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
                <>Publish Upto  Publish Upto Publish Upto<b>10 Products</b> on</>,
            ]
        },
    ];
    return (
        <>
            <Card cardType="Plain">
                <div className="cousel-section">
                    <Carousel
                        slidesToScroll={1}
                        slidesToShow={3}
                        dots={true}
                        responsive={[
                            {
                                breakpoint: 1366,
                                settings: {
                                    slidesToShow: 2.8,
                                }
                            },
                            {
                                breakpoint: 1250,
                                settings: {
                                    slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 450,
                                settings: {
                                    slidesToShow: 1,
                                }
                            },
                        ]}>

                        {data.map((item: any, index) => {
                            return (
                                <Card
                                    key={index}
                                    cardType="Bordered"
                                    extraClass={` ${item.popular ? 'popular' : 'slide-item'}`}>
                                    <FlexLayout
                                        direction="vertical"
                                        spacing="loose"
                                        wrap="noWrap"
                                        halign="center"
                                        valign="center">
                                        <FlexLayout wrap="noWrap" valign="center" spacing="loose">
                                            <TextStyles
                                                fontweight="extraBold"
                                                alignment="center"
                                                type="SubHeading"
                                                subheadingTypes="MD-2.2">
                                                {item?.title}
                                            </TextStyles>
                                            {
                                                item?.popular && <span className="popular-tag">Popular</span>
                                            }
                                        </FlexLayout>
                                        <FlexLayout
                                            spacing="extraTight"
                                            halign="center">
                                            <div className="mt-20 mb-20">
                                                <sup className="currenct">$</sup>
                                                <span className="amount">{item?.price}</span>
                                                <sub className="time">/Yearly</sub>
                                            </div>
                                        </FlexLayout>

                                        <TextStyles fontweight="bold" alignment="center" textcolor="positive">{`Billed at $ ${item?.Bill_rate}/Year`}</TextStyles>
                                        <Button thickness="thin">
                                            Activate for Free
                                        </Button>

                                        <div className="mt-10">
                                            <FlexLayout direction="vertical" wrap="noWrap" spacing="mediumTight">
                                                {item?.feature.map((data: any, index: number) => {
                                                    return (
                                                        <FlexLayout key={index} spacing="loose" wrap="noWrap" halign="start" >
                                                            <Check color="var(--inte-GR150)" />
                                                            <TextStyles>
                                                                {data}
                                                            </TextStyles>
                                                        </FlexLayout>
                                                    );
                                                })}
                                            </FlexLayout>
                                        </div>
                                    </FlexLayout>
                                </Card>
                            );
                        })}
                    </Carousel>
                </div>
            </Card>
        </>
    );
}

export default Yearly;