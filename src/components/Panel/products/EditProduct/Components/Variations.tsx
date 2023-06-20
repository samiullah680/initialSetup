// import { Card, FlexLayout, Grid, Radio, Switcher, TextField } from "@cedcommerce/ounce-ui";
// import React, { useEffect, useMemo, useState } from "react";

import { Alert, Card, FlexLayout, Grid, Radio, Select, Switcher, TextField, TextStyles } from "@cedcommerce/ounce-ui";
import React, { useContext, useEffect, useState } from "react";
import { editContext } from "../ProductEdit";


function Variations(): JSX.Element {

    const useEditContext = useContext(editContext);
    const [showHelpText, setShowHelpText] = useState(true);

    const column = [
        {
            title: "Image",
            dataIndex: "image",
            align: "left",
            key: "Image",
            width: 110,
            visible: true
        },
        {
            title: "Color",
            dataIndex: "color",
            align: "center",
            key: "color",
            width: 100,
            visible: true

        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            align: "center",
            key: "quantity",
            width: 100,
            visible: true

        },
        {
            title: "Sku",
            dataIndex: "sku",
            align: "left",
            key: "sku",
            width: 130,
            visible: true

        },
        {
            title: "Price",
            dataIndex: "price",
            align: "left",
            key: "price",
            width: 190,
            visible: true

        },
        {
            title: "Barcode",
            dataIndex: "barcode",
            align: "left",
            key: "barcode",
            width: 190,
            visible: true

        },
        {
            title: "Weight",
            dataIndex: "weight",
            align: "left",
            key: "weight",
            width: 190,
            visible: useEditContext?.customShippingInfo?.variant_shipping_switcher ?? false

        },
        {
            title: "Length",
            dataIndex: "length",
            align: "left",
            key: "length",
            width: 190,
            visible: useEditContext?.customShippingInfo?.variant_shipping_switcher ?? false
        },
        {
            title: "Height",
            dataIndex: "height",
            align: "left",
            key: "height",
            width: 190,
            visible: useEditContext?.customShippingInfo?.variant_shipping_switcher ?? false
        },
        {
            title: "Width",
            dataIndex: "width",
            align: "left",
            key: "width",
            width: 190,
            visible: useEditContext?.customShippingInfo?.variant_shipping_switcher ?? false
        },
        {
            title: "Actions",
            dataIndex: "actions",
            align: "center",
            key: "actions",
            fixed: "right",
            width: 80,
            visible: true
        },

    ];

    const [rows, setRows] = useState<any>([]);
    const [variationsData, setVariationsData] = useState<any>([
        {
            sku: {
                iseditable: false,
                value: "85",
            },
            barcode: {
                type: "default",
                default_value: 10,
                custom_value: "",
                unit: "INR"
            },
            price: {
                type: "default",
                default_value: 10,
                custom_value: "",
                unit: 'INR'
            },
            color: {
                iseditable: false,
                value: "red",
            },
            quantity: {
                iseditable: false,
                value: "5",
            },
            weight: {
                type: "custom",
                default_value: 10,
                custom_value: 16,
                unit: "lb"
            },
            length: {
                type: "custom",
                default_value: 16,
                custom_value: 54,
                unit: "cm"
            },
            width: {
                type: "custom",
                default_value: 19,
                custom_value: "12",
                unit: "cm"
            },
            height: {
                type: "custom",
                default_value: 50,
                custom_value: 15,
                unit: "cm"
            },
            active: true,
        },
        {
            sku: {
                iseditable: false,
                value: "85",
            },
            barcode: {
                type: "default",
                default_value: 10,
                custom_value: "",
                unit: "INR"
            },
            price: {
                type: "default",
                default_value: 10,
                custom_value: "",
                unit: "INR"
            },
            color: {
                iseditable: false,
                value: "blue",
            },
            quantity: {
                iseditable: false,
                value: 45,
            },
            weight: {
                type: "custom",
                default_value: 10,
                custom_value: 16,
                unit: "lb"
            },
            length: {
                type: "custom",
                default_value: 16,
                custom_value: 54,
                unit: "cm"
            },
            width: {
                type: "custom",
                default_value: 19,
                custom_value: "12",
                unit: "cm"
            },
            height: {
                type: "custom",
                default_value: 50,
                custom_value: 15,
                unit: "cm"
            },
            active: false
        },
        {
            sku: {
                iseditable: false,
                value: "85",
            },
            barcode: {
                type: "default",
                default_value: 10,
                custom_value: "",
                unit: "INR"
            },
            price: {
                type: "default",
                default_value: 10,
                custom_value: "",
                unit: "INR"
            },
            color: {
                iseditable: false,
                value: "blue",
            },
            quantity: {
                iseditable: false,
                value: 45,
            },
            weight: {
                type: "custom",
                default_value: 10,
                custom_value: "",
                unit: "lb"
            },
            length: {
                type: "custom",
                default_value: 12,
                custom_value: 54,
                unit: "cm"
            },
            width: {
                type: "custom",
                default_value: 14,
                custom_value: "12",
                unit: "in"
            },
            height: {
                type: "custom",
                default_value: 16,
                custom_value: 45,
                unit: "cm"
            },
            active: false
        }
    ]);

    const handleVariationsData = (index: number, field: string, value: any, type: any = "") => {
        if (field == "active") {
            variationsData[index][field] = value;
        } else {
            if (type != "") {
                variationsData[index][field][type] = value;
            } else {
                variationsData[index][field]['value'] = value;
            }
        }
        setVariationsData([...variationsData]);
    };


    useEffect(() => {
        const rowsToRender = [...variationsData].map((product: any, index: number) => {
            return {
                key: index,
                image: <img src="https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1" height={82} width={82} alt="" style={{ borderRadius: "5px" }} />,
                quantity: product?.quantity?.value ?? '',
                color: product?.color?.value ?? '',
                sku: <TextField thickness="thin" value={product?.sku?.value ?? ""} disabled />,
                price: <FlexLayout direction="vertical" spacing="extraTight" wrap="noWrap" childWidth="fullWidth" valign="start">
                    <FlexLayout wrap="noWrap" spacing="extraTight" direction="vertical" valign="start">
                        <FlexLayout spacing="extraTight">
                            <Radio onClick={() => handleVariationsData(index, 'price', "default", "type")} name={"price" + index} labelVal="Default" checked={product?.price?.type == "default"} />
                            <TextStyles textcolor="light" fontweight="light">{`($${product?.price?.default_value})`}</TextStyles>
                        </FlexLayout>
                        <Radio onClick={() => handleVariationsData(index, 'price', "custom", "type")} name={"price" + index} labelVal="Custom" checked={product?.price?.type == "custom"} />
                    </FlexLayout>
                    {product?.price?.type == "custom" ?
                        <TextField
                            thickness="thin"
                            placeHolder="value"
                            value={product?.price?.custom_value ?? ""}
                            onChange={(e) => handleVariationsData(index, 'price', e, "custom_value")}
                            suffix="INR"
                        />
                        : <></>
                    }
                </FlexLayout>,
                barcode: <FlexLayout direction="vertical" spacing="extraTight" wrap="noWrap" childWidth="fullWidth">
                    <FlexLayout wrap="noWrap" spacing="extraTight" direction="vertical" valign="start">
                        <FlexLayout spacing="extraTight">
                            <Radio onClick={() => handleVariationsData(index, 'barcode', "default", "type")} name={"barcode" + index} labelVal="Default" checked={product?.barcode?.type == "default"} />
                            <TextStyles textcolor="light" fontweight="light">{`(${product?.barcode?.default_value})`}</TextStyles>
                        </FlexLayout>
                        <Radio onClick={() => handleVariationsData(index, 'barcode', "custom", "type")} name={"barcode" + index} labelVal="Custom" checked={product?.barcode?.type == "custom"} />
                    </FlexLayout>
                    {product?.barcode?.type == "custom" ?
                        <TextField
                            thickness="thin"
                            placeHolder="value"
                            value={product?.barcode?.custom_value ?? ""}
                            onChange={(e) => handleVariationsData(index, 'barcode', e, "custom_value")}
                            suffix="en"
                        /> : <></>
                    }
                </FlexLayout>,
                weight: <FlexLayout direction="vertical" spacing="extraTight" wrap="noWrap" childWidth="fullWidth">
                    <FlexLayout wrap="noWrap" spacing="extraTight" direction="vertical" valign="start">
                        <FlexLayout spacing="extraTight">
                            <Radio onClick={() => handleVariationsData(index, 'weight', "default", "type")} name={"weight" + index} labelVal="Default" checked={product?.weight?.type == "default"} />
                            <TextStyles textcolor="light" fontweight="light">{`(${product?.weight?.default_value})`}</TextStyles>
                        </FlexLayout>
                        <Radio onClick={() => handleVariationsData(index, 'weight', "custom", "type")} name={"weight" + index} labelVal="Custom" checked={product?.weight?.type == "custom"} />
                    </FlexLayout>
                    {product?.weight?.type == "custom" ?
                        <FlexLayout wrap="noWrap" spacing="mediumTight">
                            <TextField
                                thickness="thin"
                                placeHolder="value"
                                value={product?.weight?.custom_value ?? ""}
                                onChange={(e) => handleVariationsData(index, 'weight', e, "custom_value")}
                            />
                            <Select
                                thickness="thin"
                                value="lb"
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
                        </FlexLayout> : <></>
                    }
                </FlexLayout>,
                length: <FlexLayout direction="vertical" spacing="extraTight" wrap="noWrap" childWidth="fullWidth">
                    <FlexLayout wrap="noWrap" spacing="extraTight" direction="vertical" valign="start">
                        <FlexLayout spacing="extraTight">
                            <Radio onClick={() => handleVariationsData(index, 'length', "default", "type")} name={"length" + index} labelVal="Default" checked={product?.length?.type == "default"} />
                            <TextStyles textcolor="light" fontweight="light">{`(${product?.length?.default_value})`}</TextStyles>
                        </FlexLayout>
                        <Radio onClick={() => handleVariationsData(index, 'length', "custom", "type")} name={"length" + index} labelVal="Custom" checked={product?.length?.type == "custom"} />
                    </FlexLayout>
                    {product?.length?.type == "custom" ?
                        <FlexLayout wrap="noWrap" spacing="mediumTight">
                            <TextField
                                thickness="thin"
                                placeHolder="value"
                                value={product?.length?.custom_value ?? ""}
                                onChange={(e) => handleVariationsData(index, 'length', e, "custom_value")}
                            />
                            <Select
                                thickness="thin"
                                value="cm"
                                options={[
                                    {
                                        label: "cm",
                                        value: "cm"
                                    },
                                    {
                                        label: "in",
                                        value: "in"
                                    },
                                ]} />
                        </FlexLayout> : <></>
                    }
                </FlexLayout>,
                height: <FlexLayout direction="vertical" spacing="extraTight" wrap="noWrap" childWidth="fullWidth">
                    <FlexLayout wrap="noWrap" spacing="extraTight" direction="vertical" valign="start">
                        <FlexLayout spacing="extraTight">
                            <Radio onClick={() => handleVariationsData(index, 'height', "default", "type")} name={"height" + index} labelVal="Default" checked={product?.height?.type == "default"} />
                            <TextStyles textcolor="light" fontweight="light">{`(${product?.height?.default_value})`}</TextStyles>
                        </FlexLayout>
                        <Radio onClick={() => handleVariationsData(index, 'height', "custom", "type")} name={"height" + index} labelVal="Custom" checked={product?.height?.type == "custom"} />
                    </FlexLayout>
                    {product?.height?.type == "custom" ?
                        <FlexLayout wrap="noWrap" spacing="mediumTight">
                            <TextField
                                thickness="thin"
                                placeHolder="value"
                                value={product?.height?.custom_value ?? ""}
                                onChange={(e) => handleVariationsData(index, 'height', e, "custom_value")}
                            />
                            <Select
                                thickness="thin"
                                value="cm"
                                options={[
                                    {
                                        label: "cm",
                                        value: "cm"
                                    },
                                    {
                                        label: "in",
                                        value: "in"
                                    },
                                ]} />
                        </FlexLayout> : <></>
                    }
                </FlexLayout>,
                width: <FlexLayout direction="vertical" spacing="extraTight" wrap="noWrap" childWidth="fullWidth">
                    <FlexLayout wrap="noWrap" spacing="extraTight" direction="vertical" valign="start">
                        <FlexLayout spacing="extraTight">
                            <Radio onClick={() => handleVariationsData(index, 'width', "default", "type")} name={"width" + index} labelVal="Default" checked={product?.width?.type == "default"} />
                            <TextStyles textcolor="light" fontweight="light">{`(${product?.width?.default_value})`}</TextStyles>
                        </FlexLayout>
                        <Radio onClick={() => handleVariationsData(index, 'width', "custom", "type")} name={"width" + index} labelVal="Custom" checked={product?.width?.type == "custom"} />
                    </FlexLayout>
                    {product?.width?.type == "custom" ?
                        <FlexLayout wrap="noWrap" spacing="mediumTight">
                            <TextField
                                thickness="thin"
                                placeHolder="value"
                                value={product?.width?.custom_value ?? ""}
                                onChange={(e) => handleVariationsData(index, 'width', e, "custom_value")}
                            />
                            <Select
                                thickness="thin"
                                value="cm"
                                options={[
                                    {
                                        label: "cm",
                                        value: "cm"
                                    },
                                    {
                                        label: "in",
                                        value: "in"
                                    },
                                ]} />
                        </FlexLayout> : <></>
                    }
                </FlexLayout>,
                actions: <FlexLayout halign="center" valign="center">
                    <Switcher checked={product?.active ?? false} onChange={() => handleVariationsData(index, 'active', !product?.active)} />
                </FlexLayout>,
            };
        }
        );
        setRows([...rowsToRender]);
        return () => {
            setRows([]);
        };
    }, [variationsData]);

    return (
        <FlexLayout direction="vertical" spacing="loose" wrap="noWrap">
            {showHelpText &&
                <Alert
                    desciption={'The "Default and Custom attribute" option allows you to either choose default WooCommerce attribute as Michaels or choose a custom WooCommerce attribute where yopu can enter your own field'}
                    destroy
                    onClose={() => setShowHelpText(false)}
                    type="info"
                >
                    Set custom or default attribute
                </Alert>
            }
            <Card
                cardType="Plain"
                title="Variations">
                <Card cardType="Bordered" extraClass="varient-grid">
                    <Grid columns={column.filter(col => col.visible)} dataSource={rows} tableLayout='fixed' scrollX={768} scrollY={500} />
                </Card>
            </Card>
        </FlexLayout>
    );
}

export default Variations;

// function Variations(): JSX.Element {

//     const [rows, setRows] = useState<any>([]);
//     const [variationsData, setVariationsData] = useState<any>([
//         {
//             barcode: {
//                 iseditable: true,
//                 value: "456",
//             },
//             price: {
//                 iseditable: true,
//                 value: "52",
//             },
//             color: {
//                 iseditable: false,
//                 value: "red",
//             },
//             quantity: {
//                 iseditable: false,
//                 value: "5",
//             },
//             weight: {
//                 type: "custom",
//                 default_value: 10,
//                 custom_value: 16,
//                 unit: "lb"
//             },
//             length: {
//                 type: "default",
//                 default_value: 10,
//                 custom_value: "",
//                 unit: "cm"
//             },
//             height: {
//                 type: "default",
//                 default_value: 10,
//                 custom_value: "",
//                 unit: "cm"
//             },
//             active: true,
//         },
//         {
//             sku: {
//                 iseditable: true,
//                 value: "85",
//             },
//             barcode: {
//                 iseditable: true,
//                 value: "65",
//             },
//             price: {
//                 iseditable: true,
//                 value: "7",
//             },
//             color: {
//                 iseditable: false,
//                 value: "blue",
//             },
//             quantity: {
//                 iseditable: false,
//                 value: 45,
//             },
//             weight: {
//                 type: "default",
//                 default_value: 10,
//                 custom_value: "",
//                 unit: "lb"
//             },
//             length: {
//                 type: "custom",
//                 default_value: 10,
//                 custom_value: 54,
//                 unit: "cm"
//             },
//             height: {
//                 type: "default",
//                 default_value: 10,
//                 custom_value: "",
//                 unit: "cm"
//             },
//             active: false
//         },
//         {
//             sku: {
//                 iseditable: true,
//                 value: "85",
//             },
//             barcode: {
//                 iseditable: true,
//                 value: "65",
//             },
//             price: {
//                 iseditable: true,
//                 value: "7",
//             },
//             color: {
//                 iseditable: false,
//                 value: "blue",
//             },
//             quantity: {
//                 iseditable: false,
//                 value: 45,
//             },
//             weight: {
//                 type: "default",
//                 default_value: 10,
//                 custom_value: "",
//                 unit: "lb"
//             },
//             length: {
//                 type: "custom",
//                 default_value: 10,
//                 custom_value: 54,
//                 unit: "cm"
//             },
//             height: {
//                 type: "default",
//                 default_value: 10,
//                 custom_value: "",
//                 unit: "cm"
//             },
//             active: false
//         }
//     ]);

//     const column = [
//         {
//             title: "Image",
//             dataIndex: "image",
//             align: "center",
//             key: "Image",
//             width: 100
//         },
//         // {
//         //     title: "Sku",
//         //     dataIndex: "sku",
//         //     align: "center",
//         //     key: "sku",
//         //     width: 120
//         // },
//         {
//             title: "Barcode",
//             dataIndex: "barcode",
//             align: "center",
//             key: "barcode",
//             width: 120
//         },
//         {
//             title: "Price",
//             dataIndex: "price",
//             align: "center",
//             key: "price",
//             width: 150
//         },
//         {
//             title: "Color",
//             dataIndex: "Color",
//             align: "center",
//             key: "Color",
//             width: 100
//         },
//         {
//             title: "Quantity",
//             dataIndex: "quantity",
//             align: "center",
//             key: "quantity",
//             width: 100
//         },
//         {
//             title: "Weight",
//             dataIndex: "weight",
//             align: "left",
//             key: "weight",
//             width: 200
//         },
//         {
//             title: "Length",
//             dataIndex: "length",
//             align: "left",
//             key: "length",
//             width: 200
//         },
//         {
//             title: "Height",
//             dataIndex: "height",
//             align: "left",
//             key: "height",
//             width: 200
//         },
//         {
//             title: "Actions",
//             dataIndex: "actions",
//             align: "center",
//             key: "actions",
//             fixed: "right",
//             width: 80
//         },

//     ];

//     const handleVariationsData = (index: number, field: string, value: any, type: any = "") => {
//         if (field == "active") {
//             variationsData[index][field] = value;
//         } else {
//             if (type != "") {
//                 variationsData[index][field][type] = value;
//             } else {
//                 variationsData[index][field]['value'] = value;
//             }
//         }
//         setVariationsData([...variationsData]);
//     }


//     useEffect(() => {
//         const rowsToRender = [...variationsData].map((product: any, index: number) => {
//             return {
//                 key: index,
//                 image: <img src="https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1" height={50} width={50} alt="" style={{ borderRadius: "5px" }} />,
//                 barcode: <TextField onChange={(e) => handleVariationsData(index, 'barcode', e)} thickness="thin" value={product?.barcode?.value ?? ''} />,
//                 price: <FlexLayout direction="vertical" spacing="extraTight" wrap="noWrap" childWidth="fullWidth">
//                     <FlexLayout wrap="noWrap" spacing="loose">
//                         <Radio labelVal="Default" checked />
//                         <Radio labelVal="Custom" />
//                     </FlexLayout>
//                     <TextField onChange={(e) => handleVariationsData(index, 'price', e)} thickness="thin" value={product?.price?.value ?? ''} suffix="INR" />
//                 </FlexLayout>,
//                 quantity: product?.quantity?.value ?? '',
//                 Color: product?.color?.value ?? '',
//                 weight: <FlexLayout
//                     direction="vertical"
//                     wrap="noWrap"
//                     spacing="extraTight">
//                     <FlexLayout spacing="tight">
//                         <Radio onClick={() => handleVariationsData(index, 'weight', "default", "type")} name={"weight" + index} labelVal="Default" checked={product?.weight?.type == "default"} />
//                         <Radio onClick={() => handleVariationsData(index, 'weight', "custom", "type")} name={"weight" + index} labelVal="Custom" checked={product?.weight?.type == "custom"} />
//                     </FlexLayout>
//                     {product?.weight?.type == "default" ?
//                         <TextField
//                             disabled
//                             thickness="thin"
//                             placeHolder="value"
//                             value={product?.weight?.default_value ?? ""}
//                         />
//                         :
//                         <TextField
//                             thickness="thin"
//                             placeHolder="value"
//                             value={product?.weight?.custom_value ?? ""}
//                             onChange={(e) => handleVariationsData(index, 'weight', e, "custom_value")}
//                         />
//                     }
//                 </FlexLayout>,
//                 length: <FlexLayout
//                     direction="vertical"
//                     wrap="noWrap"
//                     spacing="extraTight">
//                     <FlexLayout spacing="tight">
//                         <Radio onClick={() => handleVariationsData(index, 'length', "default", "type")} name={"length" + index} labelVal="Default" checked={product?.length?.type == "default"} />
//                         <Radio onClick={() => handleVariationsData(index, 'length', "custom", "type")} name={"length" + index} labelVal="Custom" checked={product?.length?.type == "custom"} />
//                     </FlexLayout>
//                     {product?.length?.type == "default" ?
//                         <TextField
//                             disabled
//                             thickness="thin"
//                             placeHolder="value"
//                             value={product?.length?.default_value ?? ""}
//                         />
//                         :
//                         <TextField
//                             thickness="thin"
//                             placeHolder="value"
//                             value={product?.length?.custom_value ?? ""}
//                             onChange={(e) => handleVariationsData(index, 'length', e, "custom_value")}
//                         />
//                     }
//                 </FlexLayout>,
//                 height: <FlexLayout
//                     direction="vertical"
//                     wrap="noWrap"
//                     spacing="extraTight">
//                     <FlexLayout spacing="tight">
//                         <Radio onClick={() => handleVariationsData(index, 'height', "default", "type")} name={"height" + index} labelVal="Default" checked={product?.height?.type == "default"} />
//                         <Radio onClick={() => handleVariationsData(index, 'height', "custom", "type")} name={"height" + index} labelVal="Custom" checked={product?.height?.type == "custom"} />
//                     </FlexLayout>
//                     {product?.height?.type == "default" ?
//                         <TextField
//                             disabled
//                             thickness="thin"
//                             placeHolder="value"
//                             value={product?.height?.default_value ?? ""}
//                         />
//                         :
//                         <TextField
//                             thickness="thin"
//                             placeHolder="value"
//                             value={product?.height?.custom_value ?? ""}
//                             onChange={(e) => handleVariationsData(index, 'height', e, "custom_value")}
//                         />
//                     }
//                 </FlexLayout>,
//                 actions: <>
//                     <FlexLayout halign="center" valign="center">
//                         <Switcher checked={product?.active ?? false} onChange={() => handleVariationsData(index, 'active', !product?.active)} />
//                     </FlexLayout>
//                 </>
//             }
//         });
//         setRows([...rowsToRender]);
//         return () => {
//             setRows([]);
//         }
//     }, [variationsData])


//     return (
//         <div style={{ maxWidth: "1050px" }}>
//             <Card
//                 cardType="Plain"
//                 title="Variations">
//                 <Card cardType="Bordered" extraClass="varient-grid">
//                     <Grid columns={column} dataSource={rows} tableLayout="fixed" scrollX={768} scrollY={500} />
//                 </Card>
//             </Card>
//         </div>
//     );
// }

// export default Variations;