import { Card, FlexLayout, Grid, Radio, Switcher, TextField } from "@cedcommerce/ounce-ui";
import React from "react";

function Variations(): JSX.Element {
    const column = [
        {
            title: "Image",
            dataIndex: "image",
            align: "center",
            key: "Image",
            width: 100
        },
        {
            title: "Sku",
            dataIndex: "sku",
            align: "center",
            key: "sku",
            width: 120
        },
        {
            title: "Barcode",
            dataIndex: "barcode",
            align: "center",
            key: "barcode",
            width: 120
        },
        {
            title: "Price",
            dataIndex: "price",
            align: "center",
            key: "price",
            width: 150
        },
        {
            title: "Color",
            dataIndex: "Color",
            align: "center",
            key: "Color",
            width: 100
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            align: "center",
            key: "quantity",
            width: 100
        },
        {
            title: "Weight",
            dataIndex: "weight",
            align: "left",
            key: "weight",
            width: 200
        },
        {
            title: "Length",
            dataIndex: "length",
            align: "left",
            key: "length",
            width: 200
        },
        {
            title: "Height",
            dataIndex: "height",
            align: "left",
            key: "height",
            width: 200
        },
        {
            title: "Actions",
            dataIndex: "actions",
            align: "center",
            key: "actions",
            fixed: "right",
            width: 80
        },

    ];
    const row = [
        {
            image: <img src="https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1" height={50} width={50} alt="" style={{ borderRadius: "5px" }} />,
            sku: <TextField thickness="thin" value={500} />,
            barcode: <TextField thickness="thin" value={500} />,
            price: <TextField thickness="thin" value={500} suffix="INR" />,
            quantity: 200,
            Color: "red",
            weight: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Weight" />
                <Radio labelVal="Set Custom Michaels Weight" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            length: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Length" />
                <Radio labelVal="Set Custom Michaels Length" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            height: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Height" />
                <Radio labelVal="Set Custom Michaels Height" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            actions: <>
                <FlexLayout halign="center" valign="center">
                    <Switcher />
                </FlexLayout>
            </>
        },
        {
            image: <img src="https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1" height={50} width={50} alt="" style={{ borderRadius: "5px" }} />,
            sku: <TextField thickness="thin" value={500} />,
            barcode: <TextField thickness="thin" value={500} />,
            price: <TextField thickness="thin" value={500} suffix="INR" />,
            quantity: 200,
            Color: "red",
            weight: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Weight" />
                <Radio labelVal="Set Custom Michaels Weight" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            length: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Length" />
                <Radio labelVal="Set Custom Michaels Length" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            height: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Height" />
                <Radio labelVal="Set Custom Michaels Height" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            actions: <>
                <FlexLayout halign="center" valign="center">
                    <Switcher />
                </FlexLayout>
            </>
        },
        {
            image: <img src="https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1" height={50} width={50} alt="" style={{ borderRadius: "5px" }} />,
            sku: <TextField thickness="thin" value={500} />,
            barcode: <TextField thickness="thin" value={500} />,
            price: <TextField thickness="thin" value={500} suffix="INR" />,
            quantity: 200,
            Color: "red",
            weight: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Weight" />
                <Radio labelVal="Set Custom Michaels Weight" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            length: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Length" />
                <Radio labelVal="Set Custom Michaels Length" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            height: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Height" />
                <Radio labelVal="Set Custom Michaels Height" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            actions: <>
                <FlexLayout halign="center" valign="center">
                    <Switcher />
                </FlexLayout>
            </>
        },
        {
            image: <img src="https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1" height={50} width={50} alt="" style={{ borderRadius: "5px" }} />,
            sku: <TextField thickness="thin" value={500} />,
            barcode: <TextField thickness="thin" value={500} />,
            price: <TextField thickness="thin" value={500} suffix="INR" />,
            quantity: 200,
            Color: "red",
            weight: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Weight" />
                <Radio labelVal="Set Custom Michaels Weight" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            length: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Length" />
                <Radio labelVal="Set Custom Michaels Length" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            height: <FlexLayout
                direction="vertical"
                wrap="noWrap"
                spacing="extraTight">
                <Radio labelVal="Set Default Michaels Height" />
                <Radio labelVal="Set Custom Michaels Height" />
                <TextField
                    thickness="thin"
                    placeHolder="Custom Value" />
            </FlexLayout>,
            actions: <>
                <FlexLayout halign="center" valign="center">
                    <Switcher />
                </FlexLayout>
            </>
        }
    ];
    return (
        <>
            <Card
                cardType="Plain"
                title="Variations">
                <Card cardType="Bordered" extraClass="varient-grid">
                    <Grid columns={column} dataSource={row} tableLayout='fixed' scrollX={768} scrollY={500} />
                </Card>
            </Card>
        </>
    );
}

export default Variations;