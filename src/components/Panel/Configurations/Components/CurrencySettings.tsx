import { Button, Card, FlexChild, FlexLayout, TextField, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useContext } from 'react';
import { settingsContext } from '../Configurations';

const CurrencySettings = () => {

    const configContext = useContext(settingsContext);

    return (
        <Card
            title={'Currency settings'}
            subTitle='Select your preferred currency settings'
        >
            <Card
                cardType='Bordered'
                title={
                    <TextStyles>Your shopify store currency is INR. We automatically convert your shopify INR currency to Michaels USD currency. Verify and update, if required.</TextStyles>
                }
            >
                <FlexLayout valign='center' spacing='mediumTight'>
                    <FlexChild desktopWidth='66' tabWidth='66' mobileWidth='66'>
                        <>
                            <TextField
                                name="conversion rate"
                                onChange={(e) => { configContext.handleCurrencyConfigChange("value", e); }}
                                placeHolder="Enter here"
                                type="number"
                                value={configContext?.config?.currency?.data?.value}
                            />
                            <TextStyles utility='mt-4' textcolor='light'>1 USD = INR</TextStyles>
                        </>
                    </FlexChild>
                    <FlexChild desktopWidth='33' tabWidth='33' mobileWidth='33'>
                        <Button
                            thickness='large'
                            content="Fetch Latest Rate"
                            type="Outlined"
                            length='fullBtn'
                            disable
                        />
                    </FlexChild>
                </FlexLayout>
            </Card>
        </Card>
    );
};

export default CurrencySettings;