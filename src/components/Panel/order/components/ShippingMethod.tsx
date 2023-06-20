import { Card, FlexChild, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';
import FedEx from '../../../../assets/images/fedEx.png';

const ShippingMethod = () => {
    return (
        <Card title={'Shipping Method'} >
            <FlexLayout
                wrap='noWrap'
                spacing='loose'
                valign='start'
            >
                <img src={FedEx} />
                <FlexChild desktopWidth='100' tabWidth='100' mobileWidth='100'>
                    <>
                        <TextStyles
                            fontweight="bold"
                            lineHeight="LH-2.0"
                            paragraphTypes="MD-1.4"
                            textcolor="dark"
                            type="Paragraph"
                        >FedEx</TextStyles>
                        <FlexLayout halign='fill' valign='center' spacing='loose' wrap='noWrap'>
                            <TextStyles
                                fontweight="normal"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility='inte-world_break'
                            >
                                Delivery in 1 ~ 3 days
                            </TextStyles>
                            <TextStyles
                                fontweight="extraBold"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility='inte-world_break'
                            >
                                $15.00
                            </TextStyles>
                        </FlexLayout>
                    </>
                </FlexChild>
            </FlexLayout>
        </Card>
    );
};

export default ShippingMethod;