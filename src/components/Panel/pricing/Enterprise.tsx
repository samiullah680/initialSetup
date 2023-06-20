import { Button, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';

function Enterprise(): JSX.Element {
    return (
        <>
            <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="loose"
                valign="center"
                halign="center">
                <Button type="TextButton">View All Feature</Button>
                <TextStyles
                    type="SubHeading"
                    subheadingTypes="MD-2.2"
                    fontweight="bold">
                    Enterprice Plan
                </TextStyles>
                <TextStyles textcolor="light">
                    Avails Yourself our Extra added perks and get regular
                    updates about your state. Highly Recoomends for Enterprice
                    Users .
                </TextStyles>
                <Button thickness="thin">Contact Us</Button>
            </FlexLayout>
        </>
    );
}
export default Enterprise;
