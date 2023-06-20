import { Card, FlexChild, FlexLayout, Select, Switcher, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useContext } from 'react';
import { settingsContext } from '../Configurations';

const OrderManagement = () => {

    const configContext = useContext(settingsContext);
    return (
        <Card
            title={'Order Management'}
            subTitle='Select your preferred order settings'
        >
            <Card
                cardType='Bordered'
            >
                <FlexLayout
                    direction='vertical'
                    spacing='loose'
                    wrap='noWrap'
                >
                    <FlexChild>
                        <>
                            <Switcher
                                name='Auto Create Order'
                                textAligh="right"
                                onChange={() => { configContext?.handleOrderConfigChange("auto_create", "settings_enabled", !configContext?.config?.order?.data?.auto_create?.settings_enabled); }}
                                checked={configContext?.config?.order?.data?.auto_create?.settings_enabled ?? false}
                            />
                            <div style={{ marginLeft: "48px" }}>
                                <FlexLayout>
                                    <TextStyles textcolor="light">Enable it to create orders on the Shopify </TextStyles>
                                </FlexLayout>
                            </div>
                        </>
                    </FlexChild>
                    <FlexChild>
                        <>
                            <Switcher
                                name='Auto Cancel Order'
                                textAligh="right"
                                onChange={() => { configContext?.handleOrderConfigChange("auto_cancel", "settings_enabled", !configContext?.config?.order?.data?.auto_cancel?.settings_enabled); }}
                                checked={configContext?.config?.order?.data?.auto_cancel?.settings_enabled ?? false}
                            />
                            <div style={{ marginLeft: "48px" }}>
                                <FlexLayout>
                                    <TextStyles textcolor="light">If enabled, failed orders will be canceled on Michaels </TextStyles>
                                </FlexLayout>
                            </div>
                        </>
                    </FlexChild>
                    <FlexChild>
                        <div style={{ marginLeft: "48px" }}>
                            <Select
                                thickness="thick"
                                name="Cancel Reason"
                                // value="Out of stock"
                                options={[
                                    {
                                        label: "Out of stock",
                                        value: "Out of stock"
                                    },
                                    {
                                        label: "Pricing error",
                                        value: "Pricing error"
                                    },
                                    {
                                        label: "Address is not Serviceable",
                                        value: "Address is not Serviceable"
                                    }
                                ]}
                                onChange={(e) => { configContext?.handleOrderConfigChange("auto_cancel", "reason", e); }}
                                value={configContext?.config?.order?.data?.auto_cancel?.reason ?? ""}
                            />
                        </div>
                    </FlexChild>
                    <FlexChild>
                        <>
                            <Switcher
                                name='Manage Shipment'
                                textAligh="right"
                                onChange={() => { configContext?.handleOrderConfigChange("shipment", "settings_enabled", !configContext?.config?.order?.data?.shipment?.settings_enabled); }}
                                checked={configContext?.config?.order?.data?.shipment?.settings_enabled ?? false}
                            />
                            <div style={{ marginLeft: "48px" }}>
                                <FlexLayout>
                                    <TextStyles textcolor="light">Enable it if you want to send shipment details to Michaels from Shopify </TextStyles>
                                </FlexLayout>
                            </div>
                        </>
                    </FlexChild>
                    <FlexChild>
                        <>
                            <Switcher
                                name='Shopify order name as Michael Order id'
                                textAligh="right"
                                onChange={() => { configContext?.handleOrderConfigChange("name_as_id", "settings_enabled", !configContext?.config?.order?.data?.order_as_id?.settings_enabled); }}
                                checked={configContext?.config?.order?.data?.name_as_id?.settings_enabled ?? false}
                            />
                            <div style={{ marginLeft: "48px" }}>
                                <FlexLayout>
                                    <TextStyles textcolor="light">If enabled, we will send Michael Order id on Shopify Order name index. </TextStyles>
                                </FlexLayout>
                            </div>
                        </>
                    </FlexChild>
                </FlexLayout>
            </Card>
        </Card>
    );
};

export default OrderManagement;