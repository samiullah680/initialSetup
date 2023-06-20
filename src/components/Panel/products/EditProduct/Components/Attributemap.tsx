import { Accordion, Card, FlexChild, FlexLayout, Radio, Select, TextField, TextStyles } from "@cedcommerce/ounce-ui";
import React, { useState } from "react";

function Attributemap(): JSX.Element {
    const [Variation, setvariation] = useState(false);
    return (
        <>
            <Card
                cardType="Plain"
                title={"Product Specifications Attributes"}>
                <Card cardType="Bordered">
                    <FlexLayout
                        direction="vertical"
                        wrap="noWrap"
                        spacing="loose">
                        <TextStyles>Marketplace Category</TextStyles>
                        <Select
                            thickness="thin"
                            placeholder="Select Marketplace Category"
                            options={[
                                {
                                    label: "1",
                                    value: "1"
                                },
                                {
                                    label: "1",
                                    value: "1"
                                },
                                {
                                    label: "1",
                                    value: "1"
                                },
                                {
                                    label: "1",
                                    value: "1"
                                },
                            ]} />
                        <Accordion
                            active={true}
                            title="Product Category">
                            <Card>
                                <FlexLayout
                                    direction="vertical"
                                    wrap="noWrap"
                                    spacing="tight">
                                    <FlexLayout
                                        desktopWidth="50"
                                        tabWidth="50"
                                        mobileWidth="100">
                                        <TextStyles fontweight="bold">Standard Michaels Attributes</TextStyles>
                                        <TextStyles fontweight="bold">Woocommerce Attributes</TextStyles>
                                    </FlexLayout>
                                    <hr className="horizontal_lines" />
                                    <FlexLayout
                                        desktopWidth="50"
                                        tabWidth="50"
                                        mobileWidth="100">
                                        <TextStyles textcolor="light">Brand</TextStyles>
                                        <FlexLayout
                                            direction="vertical"
                                            wrap="noWrap"
                                            spacing="extraTight">
                                            <Select
                                                thickness="thin"
                                                placeholder="Set Custom"
                                                options={[
                                                    {
                                                        label: "1",
                                                        value: "1"
                                                    },
                                                    {
                                                        label: "1",
                                                        value: "1"
                                                    }
                                                ]} />
                                            <TextField
                                                thickness="thin"
                                                placeHolder="Custom Value" />
                                        </FlexLayout>
                                    </FlexLayout>

                                    <hr className="horizontal_lines" />

                                    <FlexLayout
                                        desktopWidth="50"
                                        tabWidth="50"
                                        mobileWidth="100">
                                        <TextStyles textcolor="light">Weight</TextStyles>
                                        <Select
                                            thickness="thin"
                                            placeholder="Weight"
                                            options={[
                                                {
                                                    label: "1",
                                                    value: "1"
                                                },
                                                {
                                                    label: "1",
                                                    value: "1"
                                                },
                                            ]} />
                                    </FlexLayout>

                                    <hr className="horizontal_lines" />

                                    <FlexLayout
                                        desktopWidth="50"
                                        tabWidth="50"
                                        mobileWidth="100">
                                        <TextStyles textcolor="light">Height</TextStyles>
                                        <div className="custom-flex">
                                            <div className="first-child">
                                                <TextField
                                                    thickness="thin"
                                                    value={3} />
                                            </div>
                                            <div className="second-child">
                                                <Select
                                                    thickness="thin"
                                                    value="in"
                                                    placeholder="Weight"
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
                                    </FlexLayout>
                                </FlexLayout>
                            </Card>
                        </Accordion>

                        <Accordion
                            active={Variation}
                            onClick={() => setvariation(!Variation)}
                            title={"Variation Attribute"}>
                            <Card>
                                <FlexLayout
                                    direction="vertical"
                                    wrap="noWrap"
                                    spacing="tight">
                                    <FlexLayout
                                        desktopWidth="50"
                                        tabWidth="50"
                                        mobileWidth="100">
                                        <TextStyles fontweight="bold">Standard Michaels Attributes</TextStyles>
                                        <TextStyles fontweight="bold">Woocommerce Attributes</TextStyles>
                                    </FlexLayout>

                                    <hr className="horizontal_lines" />

                                    <FlexLayout
                                        desktopWidth="50"
                                        tabWidth="50"
                                        mobileWidth="100">
                                        <TextStyles textcolor="light">Brand</TextStyles>
                                        <FlexLayout
                                            direction="vertical"
                                            wrap="noWrap"
                                            spacing="extraTight">
                                            <Select
                                                thickness="thin"
                                                placeholder="Set Custom"
                                                options={[
                                                    {
                                                        label: "1",
                                                        value: "1"
                                                    },
                                                    {
                                                        label: "1",
                                                        value: "1"
                                                    }
                                                ]} />
                                            <TextField
                                                thickness="thin"
                                                placeHolder="Custom Value" />
                                        </FlexLayout>
                                    </FlexLayout>

                                    <hr className="horizontal_lines" />

                                    <FlexLayout
                                        desktopWidth="50"
                                        tabWidth="50"
                                        mobileWidth="100">
                                        <TextStyles textcolor="light">Weight</TextStyles>
                                        <Select
                                            thickness="thin"
                                            placeholder="Weight"
                                            options={[
                                                {
                                                    label: "1",
                                                    value: "1"
                                                },
                                                {
                                                    label: "1",
                                                    value: "1"
                                                },
                                            ]} />
                                    </FlexLayout>

                                    <hr className="horizontal_lines" />

                                    <FlexLayout
                                        desktopWidth="50"
                                        tabWidth="50"
                                        mobileWidth="100">
                                        <TextStyles textcolor="light">Height</TextStyles>
                                        <div className="custom-flex">
                                            <div className="first-child">
                                                <TextField
                                                    thickness="thin"
                                                    value={3} />
                                            </div>
                                            <div className="second-child">
                                                <Select
                                                    thickness="thin"
                                                    value="in"
                                                    placeholder="Weight"
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
                                    </FlexLayout>
                                </FlexLayout>
                            </Card>
                        </Accordion>
                    </FlexLayout>
                </Card>

            </Card>
        </>
    );
}

export default Attributemap;