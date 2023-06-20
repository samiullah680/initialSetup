import { Card, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';

const ShippingAddress = () => {
    return (
        <Card title={'Shipping Address'} >
            <TextStyles
                fontweight="normal"
                lineHeight="LH-2.0"
                paragraphTypes="MD-1.4"
                textcolor="light"
                type="Paragraph"
                utility='inte-world_break'
            >
                A 1/259 Gomti Nagar, Lucknow Uttar Pradesh 226010
            </TextStyles>
        </Card>
    );
};

export default ShippingAddress;