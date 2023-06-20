import { Card, CheckBox, FlexLayout } from '@cedcommerce/ounce-ui';
import React, { useContext, useState } from 'react';
import { settingsContext } from '../Configurations';

export const MarketPlace = () => {

    const configContext = useContext(settingsContext);

    return (
        <Card
            title={'Marketplace settings'}
            subTitle={'This setting will help in syncing of price, inventory, and listing information from our App to Michaels Marketplace. Note: If you uncheck or disable any options then that piece of information will not sync to Michaels\'s marketplace via our App.'}
        >
            <Card cardType='Bordered'>
                <FlexLayout spacing='loose'>
                    <CheckBox
                        id="Price"
                        labelVal="Price"
                        name="Price"
                        onClick={() => configContext?.handleMarketPlaceConfigChange("price", !configContext?.config?.price?.data?.settings_enabled)}
                        checked={configContext?.config?.price?.data?.settings_enabled ?? false}
                    />
                    <CheckBox
                        id="Inventory"
                        labelVal="Inventory"
                        name="Inventory"
                        onClick={() => configContext?.handleMarketPlaceConfigChange("inventory", !configContext?.config?.inventory?.data?.settings_enabled)}
                        checked={configContext?.config?.inventory?.data?.settings_enabled ?? false} />
                    <CheckBox
                        id="product_info"
                        labelVal="Product Information"
                        name="Product Information"
                        onClick={() => configContext?.handleMarketPlaceConfigChange("product_info", !configContext?.config?.product_info?.data?.settings_enabled)}
                        checked={configContext?.config?.product_info?.data?.settings_enabled ?? false} />
                </FlexLayout>
            </Card>
        </Card>
    );
};
