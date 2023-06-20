import { Card, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';

function Question(): JSX.Element {
    const data = [
        {
            title: 'How Does This Free trial works ',
            description: (
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Velit quam laboriosam ipsam quod assumenda libero est illum
                    sunt cumque odit, suscipit enim earum vero, dolores quos
                    magni placeat itaque ad.
                </>
            ),
        },
        {
            title: 'How Does This Free trial works ',
            description: (
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Velit quam laboriosam ipsam quod assumenda libero est illum
                    sunt cumque odit, suscipit enim earum vero, dolores quos
                    magni placeat itaque ad.
                </>
            ),
        },
        {
            title: 'How Does This Free trial works ',
            description: (
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Velit quam laboriosam ipsam quod assumenda libero est illum
                    sunt cumque odit, suscipit enim earum vero, dolores quos
                    magni placeat itaque ad.
                </>
            ),
        },
        {
            title: 'How Does This Free trial works ',
            description: (
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Velit quam laboriosam ipsam quod assumenda libero est illum
                    sunt cumque odit, suscipit enim earum vero, dolores quos
                    magni placeat itaque ad.
                </>
            ),
        },
        {
            title: 'How Does This Free trial works ',
            description: (
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Velit quam laboriosam ipsam quod assumenda libero est illum
                    sunt cumque odit, suscipit enim earum vero, dolores quos
                    magni placeat itaque ad.
                </>
            ),
        },
        {
            title: 'How Does This Free trial works ',
            description: (
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Velit quam laboriosam ipsam quod assumenda libero est illum
                    sunt cumque odit, suscipit enim earum vero, dolores quos
                    magni placeat itaque ad.
                </>
            ),
        },
        {
            title: 'How Does This Free trial works ',
            description: (
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Velit quam laboriosam ipsam quod assumenda libero est illum
                    sunt cumque odit, suscipit enim earum vero, dolores quos
                    magni placeat itaque ad.
                </>
            ),
        },
    ];
    return (
        <>
            <TextStyles
                type="SubHeading"
                subheadingTypes="MD-2.2"
                alignment="center"
                utility="heading-title"
                fontweight="bold">
                Have Some Questions? Here are the answers
            </TextStyles>
            <FlexLayout desktopWidth="50" spacing="loose">
                {data.map((data: any, index) => {
                    return (
                        <Card cardType="Plain" key={index}>
                            <TextStyles
                                fontweight="extraBold"
                                utility="mb-5">
                                {data?.title}
                            </TextStyles>
                            <TextStyles textcolor="light">
                                {data?.description}
                            </TextStyles>
                        </Card>
                    );
                })}
            </FlexLayout>
        </>
    );
}

export default Question;
