import { Alert, Button, Card, CheckBox, FlexChild, FlexLayout, Radio, Select, Switcher, TextField, TextStyles } from "@cedcommerce/ounce-ui";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { editContext } from "../ProductEdit";

function Shippinginfo(): JSX.Element {

    const shippingContext = useContext(editContext);
    const shippingDetails = shippingContext?.customShippingInfo?.shipping_info_details ?? {};

    return (
        <>
            <Card
                title={"Shipping Information"}
                cardType="Plain">

                <FlexLayout
                    direction="vertical"
                    wrap="noWrap"
                    spacing="loose">

                    <Card cardType="Plain">
                        <TextStyles
                            fontweight="bold"
                            utility="mb-5">Shipping and Return Details</TextStyles>
                        <Card cardType="Bordered">
                            <FlexLayout
                                direction="vertical"
                                spacing="mediumTight"
                                wrap="noWrap">
                                <Switcher
                                    name='Set custom Shipping info'
                                    textAligh="right"
                                    checked={shippingContext?.customShippingInfo?.parent_shipping_switcher ?? false}
                                    onChange={() => { shippingContext?.handleShippingInformation("parent_shipping_switcher", !shippingContext?.customShippingInfo?.parent_shipping_switcher); }}
                                />
                                <div style={{ marginLeft: "48px" }}>
                                    <TextStyles textcolor="light">Enable this to set product specific shipping info. Disable this to use shipping info from profile.</TextStyles>
                                </div>
                                <div style={{ marginLeft: "48px" }}>
                                    <CheckBox labelVal="Is the item ground shipping only?"
                                        checked={shippingContext?.customShippingInfo?.ground_shipping ?? false}
                                        onClick={() => { shippingContext?.handleShippingInformation("ground_shipping", !shippingContext?.customShippingInfo?.ground_shipping); }}
                                    />
                                </div>
                                <div style={{ marginLeft: "48px" }}>
                                    <CheckBox labelVal="Is the item restricted shipping to AK and/or Hi?"
                                        checked={shippingContext?.customShippingInfo?.restricted_countries ?? false}
                                        onClick={() => { shippingContext?.handleShippingInformation("restricted_countries", !shippingContext?.customShippingInfo?.restricted_countries); }}
                                    />
                                </div>
                                <div style={{ marginLeft: "48px" }}>
                                    <CheckBox labelVal="Does the listing contains flammable materials?"
                                        checked={shippingContext?.customShippingInfo?.flammable ?? false}
                                        onClick={() => { shippingContext?.handleShippingInformation("flammable", !shippingContext?.customShippingInfo?.flammable); }}
                                    />
                                </div>
                                <div style={{ marginLeft: "72px" }}>
                                    <Alert type="info">
                                        <TextStyles fontweight="bold">
                                            Hazardous Item(s)
                                        </TextStyles>
                                        <li>Your item(s) will be shipped on ground shipping only.</li>
                                        <li>Expedited shipping option will not be available</li>
                                        <li>Free shipping option will not be available.</li>
                                    </Alert>
                                </div>
                                {shippingContext?.customShippingInfo?.parent_shipping_switcher && (
                                    <FlexLayout direction="vertical"
                                        spacing="mediumTight"
                                        wrap="noWrap">
                                        <Switcher
                                            name='Set custom Shipping info of variants'
                                            textAligh="right"
                                            checked={shippingContext?.customShippingInfo?.variant_shipping_switcher ?? false}
                                            onChange={() => {
                                                shippingContext?.handleShippingInformation("variant_shipping_switcher", !shippingContext?.customShippingInfo?.variant_shipping_switcher);
                                                !shippingContext?.customShippingInfo?.variant_shipping_switcher;
                                            }}

                                        />
                                        <div style={{ marginLeft: "48px" }}>
                                            <h3 className="inte__text  inte__text--light none inte__font--normal">
                                                Enable this to set dimension & weight on individual variants.
                                                <Button type="TextButton">View</Button>
                                            </h3>
                                        </div>
                                    </FlexLayout>
                                )
                                }
                            </FlexLayout>
                        </Card>
                    </Card>
                    {shippingContext?.customShippingInfo?.parent_shipping_switcher && !shippingContext?.customShippingInfo?.variant_shipping_switcher &&
                        <Card cardType="Bordered">
                            <FlexLayout
                                direction="vertical"
                                spacing="mediumTight"
                                wrap="noWrap">
                                <FlexLayout
                                    spacing="loose"
                                >
                                    <FlexChild desktopWidth="33" tabWidth="33" mobileWidth="100">
                                        <TextStyles fontweight="bold">Standard Michaels Attributes</TextStyles>
                                    </FlexChild>
                                    <FlexChild desktopWidth="66" tabWidth="66" mobileWidth="100">
                                        <TextStyles fontweight="bold">Woocommerce Attributes</TextStyles>
                                    </FlexChild>
                                </FlexLayout>
                                <hr className="horizontal_lines" />
                                <FlexLayout
                                    spacing="loose"
                                >
                                    <FlexChild desktopWidth="33" tabWidth="33" mobileWidth="100">
                                        <TextStyles fontweight="bold">Weight</TextStyles>
                                    </FlexChild>
                                    <FlexChild desktopWidth="66" tabWidth="66" mobileWidth="100">
                                        <FlexLayout
                                            direction="vertical"
                                            wrap="noWrap"
                                            spacing="extraTight">
                                            <Radio onClick={() => { shippingContext?.handleShippingDetails('weight', 'default', 'type'); }} checked={shippingDetails?.weight?.type == "default"} name="weight" labelVal="Set WooCommerce weight as Michaels Weight" />
                                            <Radio onClick={() => { shippingContext?.handleShippingDetails('weight', 'custom', 'type'); }} checked={shippingDetails?.weight?.type == "custom"} name="weight" labelVal="Set custom Michaels Weight" />
                                            {shippingDetails?.weight?.type == "custom" &&
                                                <div className="custom-flex">
                                                    <div className="first-child">
                                                        <TextField
                                                            thickness="thin"
                                                            placeHolder="Custom Value" />
                                                    </div>
                                                    <div className="second-child">
                                                        <Select
                                                            thickness="thin"
                                                            onChange={(e) => { shippingContext?.handleShippingDetails('weight', e, 'unit'); }}
                                                            value={shippingDetails?.weight?.unit ?? ''}
                                                            placeholder="select"
                                                            options={[
                                                                {
                                                                    label: "lb",
                                                                    value: "lb"
                                                                },
                                                                {
                                                                    label: "kg",
                                                                    value: "kg"
                                                                },
                                                            ]} />
                                                    </div>
                                                </div>
                                            }
                                        </FlexLayout>
                                    </FlexChild>
                                </FlexLayout>
                                <hr className="horizontal_lines" />
                                <FlexLayout
                                    spacing="loose"
                                >
                                    <FlexChild desktopWidth="33" tabWidth="33" mobileWidth="100">
                                        <TextStyles fontweight="bold">Length</TextStyles>
                                    </FlexChild>
                                    <FlexChild desktopWidth="66" tabWidth="66" mobileWidth="100">
                                        <FlexLayout
                                            direction="vertical"
                                            wrap="noWrap"
                                            spacing="extraTight">
                                            <Radio onClick={() => { shippingContext?.handleShippingDetails('length', 'default', 'type'); }} checked={shippingDetails?.length?.type == "default"} name="length" labelVal="Set WooCommerce length as Michaels length" />
                                            <Radio onClick={() => { shippingContext?.handleShippingDetails('length', 'custom', 'type'); }} checked={shippingDetails?.length?.type == "custom"} name="length" labelVal="Set custom Michaels length" />
                                            {shippingDetails?.length?.type == "custom" &&
                                                <div className="custom-flex">
                                                    <div className="first-child">
                                                        <TextField
                                                            thickness="thin"
                                                            placeHolder="Custom Value" />
                                                    </div>
                                                    <div className="second-child">
                                                        <Select
                                                            thickness="thin"
                                                            onChange={(e) => { shippingContext?.handleShippingDetails('length', e, 'unit'); }}
                                                            value={shippingDetails?.length?.unit ?? ''}
                                                            placeholder="Set Custom"
                                                            options={[
                                                                {
                                                                    label: "in",
                                                                    value: "in"
                                                                },
                                                                {
                                                                    label: "cm",
                                                                    value: "cm"
                                                                },
                                                            ]} />
                                                    </div>
                                                </div>
                                            }
                                        </FlexLayout>
                                    </FlexChild>
                                </FlexLayout>
                                <hr className="horizontal_lines" />
                                <FlexLayout
                                    spacing="loose"
                                >
                                    <FlexChild desktopWidth="33" tabWidth="33" mobileWidth="100">
                                        <TextStyles fontweight="bold">Width</TextStyles>
                                    </FlexChild>
                                    <FlexChild desktopWidth="66" tabWidth="66" mobileWidth="100">
                                        <FlexLayout
                                            direction="vertical"
                                            wrap="noWrap"
                                            spacing="extraTight">
                                            <Radio onClick={() => { shippingContext?.handleShippingDetails('width', 'default', 'type'); }} checked={shippingDetails?.width?.type == "default"} name="width" labelVal="Set WooCommerce width as Michaels width" />
                                            <Radio onClick={() => { shippingContext?.handleShippingDetails('width', 'custom', 'type'); }} checked={shippingDetails?.width?.type == "custom"} name="width" labelVal="Set custom Michaels width" />
                                            {shippingDetails?.width?.type == "custom" &&
                                                <div className="custom-flex">
                                                    <div className="first-child">
                                                        <TextField
                                                            thickness="thin"
                                                            placeHolder="Custom Value" />
                                                    </div>
                                                    <div className="second-child">
                                                        <Select
                                                            thickness="thin"
                                                            onChange={(e) => { shippingContext?.handleShippingDetails('width', e, 'unit'); }}
                                                            value={shippingDetails?.width?.unit ?? ''}
                                                            placeholder="Set Custom"
                                                            options={[
                                                                {
                                                                    label: "in",
                                                                    value: "in"
                                                                },
                                                                {
                                                                    label: "cm",
                                                                    value: "cm"
                                                                },
                                                            ]} />
                                                    </div>
                                                </div>
                                            }
                                        </FlexLayout>
                                    </FlexChild>
                                </FlexLayout>
                                <hr className="horizontal_lines" />
                                <FlexLayout
                                    spacing="loose"
                                >
                                    <FlexChild desktopWidth="33" tabWidth="33" mobileWidth="100">
                                        <TextStyles fontweight="bold">Height</TextStyles>
                                    </FlexChild>
                                    <FlexChild desktopWidth="66" tabWidth="66" mobileWidth="100">
                                        <FlexLayout
                                            direction="vertical"
                                            wrap="noWrap"
                                            spacing="extraTight">
                                            <Radio onClick={() => { shippingContext?.handleShippingDetails('height', 'default', 'type'); }} checked={shippingDetails?.height?.type == "default"} name="height" labelVal="Set WooCommerce height as Michaels height" />
                                            <Radio onClick={() => { shippingContext?.handleShippingDetails('height', 'custom', 'type'); }} checked={shippingDetails?.height?.type == "custom"} name="height" labelVal="Set custom Michaels height" />
                                            {shippingDetails?.height?.type == "custom" &&
                                                <div className="custom-flex">
                                                    <div className="first-child">
                                                        <TextField
                                                            thickness="thin"
                                                            placeHolder="Custom Value" />
                                                    </div>
                                                    <div className="second-child">
                                                        <Select
                                                            thickness="thin"
                                                            onChange={(e) => { shippingContext?.handleShippingDetails('height', e, 'unit'); }}
                                                            value={shippingDetails?.height?.unit ?? ''}
                                                            placeholder="Set Custom"
                                                            options={[
                                                                {
                                                                    label: "in",
                                                                    value: "in"
                                                                },
                                                                {
                                                                    label: "cm",
                                                                    value: "cm"
                                                                },
                                                            ]} />
                                                    </div>
                                                </div>
                                            }
                                        </FlexLayout>
                                    </FlexChild>
                                </FlexLayout>
                            </FlexLayout>
                        </Card>
                    }
                </FlexLayout>
            </Card>
        </>
    );
}

export default Shippinginfo;