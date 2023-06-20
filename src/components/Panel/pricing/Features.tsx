import { TextStyles, FlexLayout, Card } from '@cedcommerce/ounce-ui';
import React from 'react';
import { Check } from 'react-feather';

function Feature(): JSX.Element {
    const data = [
        {
            title: 'Listings',
            features: [
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
            ],
        },
        {
            title: 'Listings',
            features: [
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
            ],
        },
        {
            title: 'Listings',
            features: [
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
                <>
                    Publish Upto Publish Upto Publish Upto<b>10 Products</b> on
                </>,
            ],
        },
    ];
    return (
        <>
            <TextStyles
                alignment="center"
                type="SubHeading"
                subheadingTypes="MD-2.2"
                utility="heading-title"
                fontweight="bold">
                Awsome Features You are getting in Each Plan
            </TextStyles>

            <FlexLayout desktopWidth="33" spacing="loose">
                {data.map((data: any, index: any) => {
                    return (
                        <Card
                            key={index}
                            title={data?.title}
                            cardType="Bordered">
                            <FlexLayout
                                direction="vertical"
                                spacing="loose"
                                wrap="noWrap">
                                {data?.features.map(
                                    (item: any, index: number) => {
                                        return (
                                            <FlexLayout
                                                key={index}
                                                spacing="loose"
                                                wrap="noWrap"
                                                halign="start">
                                                <Check color="var(--inte-GR150)" />
                                                <TextStyles textcolor="light">
                                                    {item}
                                                </TextStyles>
                                            </FlexLayout>
                                        );

                                    }
                                )}
                            </FlexLayout>
                        </Card>
                    );
                })}

            </FlexLayout>
        </>
    );
}

export default Feature;
