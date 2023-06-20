import { Card, FlexLayout, TextField } from '@cedcommerce/ounce-ui';
import React, { useContext } from 'react';
import { settingsContext } from '../Configurations';

const InventoryRules = () => {

    const configContext = useContext(settingsContext);

    return (
        <Card
            title={'Inventory Rules'}
            subTitle='Select your preferred inventory settings for Michaels.'
        >
            <Card cardType='Bordered'>
                <FlexLayout
                    direction='vertical'
                    spacing='loose'
                    wrap='noWrap'
                >
                    <TextField
                        name="Minimum threshold value"
                        onChange={(e) => configContext.handleInventoryConfigChange("min_value", e)}
                        placeHolder="Enter here"
                        showHelp="Whenever the listing reaches this inventory value on Michaels, the listing will get Out of Stock"
                        type="number"
                        value={configContext?.config?.threshold?.data?.min_value ?? ""}
                    />
                    <TextField
                        name="Maximum inventory level"
                        onChange={(e) => configContext.handleInventoryConfigChange("max_value", e)}
                        placeHolder="Enter here"
                        showHelp="Send this inventory to Michaels in case you have chosen Don't track inventory or Continue when out of stock"
                        type="number"
                        value={configContext?.config?.threshold?.data?.max_value ?? ""}
                    />
                </FlexLayout>
            </Card>
        </Card>
    );
};

export default InventoryRules;