import { Card, FlexChild, FlexLayout, Select, Switcher, TextField, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useContext } from 'react';
import { settingsContext } from '../Configurations';

const ListingSettings = () => {

    const configContext = useContext(settingsContext);
    return (
        <Card
            title={'Listing Settings'}
            subTitle='Select your preferred listing(s) settings for Michaels.'
        >
            <Card cardType='Bordered'>
                <FlexLayout direction='vertical' wrap='noWrap' spacing='loose'>
                    <FlexChild>
                        <>
                            <Switcher
                                name='Listing Auto Import'
                                textAligh="right"
                                onChange={() => { configContext?.handleListingConfigChange("import", !configContext?.config?.product?.data?.import?.settings_enabled); }}
                                checked={configContext?.config?.product?.data?.import?.settings_enabled ?? false}
                            />
                            <div style={{ marginLeft: "48px" }}>
                                <FlexLayout>
                                    <TextStyles textcolor="light">Enable automatic import of any new listing on the app from Shopify </TextStyles>
                                </FlexLayout>
                            </div>
                        </>
                    </FlexChild>
                    <FlexChild>
                        <>
                            <Switcher
                                name='Listing Auto Upload'
                                textAligh="right"
                                onChange={() => { configContext?.handleListingConfigChange("upload", !configContext?.config?.product?.data?.upload?.settings_enabled); }}
                                checked={configContext?.config?.product?.data?.upload?.settings_enabled ?? false}
                            />
                            <div style={{ marginLeft: "48px" }}>
                                <FlexLayout>
                                    <TextStyles textcolor="light">Enable automatic listing upload from the Shopify to the Michaels marketplace </TextStyles>
                                </FlexLayout>
                            </div>
                        </>
                    </FlexChild>
                    <FlexChild>
                        <>
                            <Switcher
                                name='Listing Auto Delete'
                                textAligh="right"
                                onChange={() => { configContext?.handleListingConfigChange("delete", !configContext?.config?.delete?.data?.delete?.settings_enabled); }}
                                checked={configContext?.config?.product?.data?.delete?.settings_enabled ?? false}
                            />
                            <div style={{ marginLeft: "48px" }}>
                                <FlexLayout>
                                    <TextStyles textcolor="light">If enabled, listings deleted from the Shopify will be automatically deleted on the app and the listing will be deactivated on the Michaels </TextStyles>
                                </FlexLayout>
                            </div>
                        </>
                    </FlexChild>
                    <FlexChild>
                        <FlexLayout valign='end' spacing='mediumTight'>
                            <FlexChild desktopWidth='66' tabWidth='66' mobileWidth='66'>
                                <Select
                                    thickness="thick"
                                    name="Price Markup"
                                    // value="Fixed Increment"
                                    options={[
                                        {
                                            label: "Fixed Increment",
                                            value: "Fixed Increment"
                                        },
                                        {
                                            label: "Fixed Decrement",
                                            value: "Fixed Decrement"
                                        },
                                    ]}
                                    onChange={(e) => { configContext?.handleListingConfigChange("price_markup", e, "type"); }}
                                    value={configContext?.config?.price_markup?.data?.type ?? ""}
                                />
                            </FlexChild>
                            <FlexChild desktopWidth='33' tabWidth='33' mobileWidth='33'>
                                <TextField
                                    type="number"
                                    placeHolder='Enter here'
                                    onChange={(e) => { configContext?.handleListingConfigChange("price_markup", e, "value"); }}
                                    value={configContext?.config?.price_markup?.data?.value ?? ""}
                                />
                            </FlexChild>
                        </FlexLayout>
                    </FlexChild>
                </FlexLayout>
            </Card>
        </Card>
    );
};

export default ListingSettings;