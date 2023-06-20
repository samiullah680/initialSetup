import { Button, Card, FlexLayout, PageHeader, Tabs, TextStyles } from "@cedcommerce/ounce-ui";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, Copy, Image, Info, Map, Truck } from 'react-feather';
import { Navigate, Route, Routes } from "react-router-dom";
import { DI } from "../../../../Core";
import { PropsI } from "../../../../Core/@types";
import { PanelLayout } from "../../../layout";
import AttributeMap from "./Components/Attributemap";
import BasicInfo from "./Components/Basicinfo";
import ShippingInfo from "./Components/Shippinginfo";
import Upload from "./Components/Upload";
import Variation from "./Components/Variations";
import './Style.css';

export const editContext = React.createContext<any>(null);

interface DetailsI {
    type: "custom" | "default",
    value: any
}

interface basicI {
    [ids: string]: DetailsI
}


function ProductEdit(props: PropsI): JSX.Element {

    const basicRef = useRef<HTMLDivElement | null>(null);
    const attributeRef = useRef<HTMLDivElement | null>(null);
    const uploadRef = useRef<HTMLDivElement | null>(null);
    const shippingRef = useRef<HTMLDivElement | null>(null);
    const variationRef = useRef<HTMLDivElement | null>(null);

    const getEditorValue = (val: string) => {
        const draft = htmlToDraft(
            "<React.Fragment>" + val + "</React.Fragment>"
        );
        const { contentBlocks, entityMap } = draft;
        const contentState = ContentState.createFromBlockArray(
            contentBlocks,
            entityMap
        );
        return EditorState.createWithContent(contentState);
    };

    const initialValue: basicI = {
        title: {
            type: "default",
            value: "title"
        },
        brand: {
            type: "default",
            value: "brand"
        },
        description: {
            type: "custom",
            value: getEditorValue("description")
        },
        tags: {
            type: "custom",
            value: { accepted: ["tag1", "tag2", "tag3"], unaccepted: ["tag4", "tag5"] }
        },
    };

    const [tab, setTab] = useState("basic-info");
    const [basicInfo, setBasicInfo] = useState<basicI>({ ...initialValue });

    const [customShippingInfo, setCustomShippingInfo] = useState<any>({
        parent_shipping_switcher: true,
        variant_shipping_switcher: true,
        ground_shipping: false,
        restriction_countries: false,
        flammable: false,
        shipping_info_details: {
            weight: {
                type: "default",
                default_value: 10,
                custom_value: '',
                unit: "lb"
            },
            length: {
                type: "custom",
                default_value: 12,
                custom_value: '',
                unit: "cm"
            },
            width: {
                type: "custom",
                default_value: 15,
                custom_value: '',
                unit: "in"
            },
            height: {
                type: "custom",
                default_value: 18,
                custom_value: '',
                unit: "cm"
            },
        }
    });

    useEffect(() => {
        function scroller() {
            document.querySelector('.custom-tab--scroll')?.addEventListener(("scroll"), (e: any) => {
                const basic: any = document.getElementById('basic-info-tab')?.offsetHeight;
                const attribute: any = document.getElementById('attribute-mapping-tab')?.offsetHeight;
                const upload: any = document.getElementById('upload-media-tab')?.offsetHeight;
                const shipping: any = document.getElementById('shipping-info-tab')?.offsetHeight;
                // const variation: any = document.getElementById('variations-tab')?.offsetHeight;
                const data = e.target.scrollTop;
                if (data <= basic - 20) {
                    setTab("basic-info");
                } else if (data <= attribute + upload - 20) {
                    setTab("attribute-mapping");
                } else if (data <= upload + attribute + basic - 20) {
                    setTab("upload-media");
                } else if (data <= shipping + upload + attribute + basic - 120) {
                    setTab("shipping-info");
                } else {
                    setTab("variations");
                }
            });
        }
        scroller();
    }, []);

    const handleBasicDataFieldChange = (info: string, value: any) => {
        // console.log(draftToHtml(convertToRaw((value.getCurrentContent()))));
        if (info === "tags") {
            basicInfo[info]?.value.hasOwnProperty("accepted") && basicInfo[info].value["accepted"].push(value);
        } else {
            basicInfo[info].value = value;
        }
        setBasicInfo({ ...basicInfo });
    };

    const handleBasicDataChange = (info: string, value: "custom" | "default") => {
        basicInfo[info].type = value;
        setBasicInfo({ ...basicInfo });
    };

    const deleteTags = (type: "accepted" | "unaccepted", index: number) => {
        basicInfo?.tags?.value?.[type].splice(index, 1);
        setBasicInfo({ ...basicInfo });
    };

    const executeScroll = (data: string) => {
        const basic: any = document.getElementById('basic-info-tab')?.offsetHeight;
        const attribute: any = document.getElementById('attribute-mapping-tab')?.offsetHeight;
        const upload: any = document.getElementById('upload-media-tab')?.offsetHeight;
        const shipping: any = document.getElementById('shipping-info-tab')?.offsetHeight;
        switch (data) {
            // case 'basic-info': basicRef?.current?.scrollIntoView({ behavior: 'smooth' }); break;
            // case 'attribute-mapping': attributeRef?.current?.scrollIntoView({ behavior: 'smooth' }); break;
            // case 'upload-media': uploadRef?.current?.scrollIntoView({ behavior: 'smooth' }); break;
            // case 'shipping-info': shippingRef?.current?.scrollIntoView({ behavior: 'smooth' }); break;
            // case 'variations': variationRef?.current?.scrollIntoView({ behavior: 'smooth' }); break;
            // default: basicRef?.current?.scrollIntoView({ behavior: 'smooth' }); break;
            case 'basic-info': document.querySelector('.custom-tab--scroll')?.scrollTo(0, 0); break;
            case 'attribute-mapping': document.querySelector('.custom-tab--scroll')?.scrollTo(0, basic); break;
            case 'upload-media': document.querySelector('.custom-tab--scroll')?.scrollTo(0, basic + attribute); break;
            case 'shipping-info': document.querySelector('.custom-tab--scroll')?.scrollTo(0, basic + attribute + upload); break;
            case 'variations': document.querySelector('.custom-tab--scroll')?.scrollTo(0, basic + attribute + upload + shipping); break;
            default: document.querySelector('.custom-tab--scroll')?.scrollTo(0, 0); break;
        }
    };

    useMemo(() => {
        const selectedTab = window.location.pathname?.split('/')?.[5];
        if (selectedTab && selectedTab != "") {
            setTab(selectedTab);
        }
        else {
            setTab("basic-info");
        }
    }, []);


    useMemo(() => {
        props.history(tab);
    }, [tab]);

    const handleShippingInformation = (field: string, value: any) => {
        customShippingInfo[field] = value;
        if (customShippingInfo['variant_shipping_switcher'] == true) {
            setTab("variations");
        }
        setCustomShippingInfo({ ...customShippingInfo });
    };

    const handleShippingDetails = (field: string, value: any, type: string) => {
        customShippingInfo['shipping_info_details'][field][type] = value;
        setCustomShippingInfo({ ...customShippingInfo });
    };

    const Provider = editContext.Provider;

    return (
        <>
            <div className="product-edit--section">
                <PageHeader
                    sticky
                    reverseNavigation
                    onClick={() => { props.history('../products'); }}
                    title="Product Edit"
                    action={
                        <Button thickness="thin">Save</Button>
                    }
                />
                <Tabs
                    alignment="vertical"
                    selected={tab}
                    onChange={(data) => {
                        setTab(data);
                        // executeScroll(data);
                        // props.history(data);
                    }}
                    value={[
                        {
                            id: "basic-info",
                            content: "Basic Information",
                            icon: <Info size={20} />,
                        },
                        {
                            id: "attribute-mapping",
                            content: "Attribute Mapping",
                            icon: <Map size={20} />,
                        },
                        {
                            id: "upload-media",
                            content: "Image & Video",
                            icon: <Image size={20} />,
                        },
                        {
                            id: "shipping-info",
                            content: "Shipping Information",
                            icon: <Truck size={20} />,
                        },
                        {
                            id: "variations",
                            content: "Variations",
                            icon: <Copy size={20} />,
                        },
                    ]}
                >
                    <Provider value={{
                        setTab,
                        basicInfo,
                        handleBasicDataChange,
                        handleBasicDataFieldChange,
                        deleteTags,
                        customShippingInfo,
                        handleShippingInformation,
                        handleShippingDetails
                    }}>
                        <Card>
                            {/* <FlexLayout direction="vertical" spacing="extraTight" >
                                    <div ref={basicRef} id="basic-info-tab">
                                        <BasicInfo />
                                    </div>

                                    <hr className="hroizontal-line" />

                                    <div ref={attributeRef} id="attribute-mapping-tab">
                                        <AttributeMap />
                                    </div>

                                    <hr className="hroizontal-line" />

                                    <div ref={uploadRef} id="upload-media-tab">
                                        <Upload />
                                    </div>

                                    <hr className="hroizontal-line" />

                                    <div ref={shippingRef} id="shipping-info-tab">
                                        <ShippingInfo />
                                    </div>

                                    <hr className="hroizontal-line" />

                                    <div ref={variationRef} id="variations-tab">
                                        <Variation />
                                    </div>
                                </FlexLayout> */}
                            <Routes>
                                <Route path="basic-info" element={<BasicInfo />} />
                                <Route path="attribute-mapping" element={<AttributeMap />} />
                                <Route path="upload-media" element={<Upload />} />
                                <Route path="shipping-info" element={<ShippingInfo />} />
                                <Route path="variations" element={<Variation />} />
                                <Route path="*" element={<Navigate to={'basic-info'} />} />
                            </Routes>
                            {/* {tab === "basic-info" ? (
              <BasicInfo />
            ) : tab === "attribute-mapping" ? (
              <AttributeMap />
            ) : tab === "upload-media" ? (
              <Upload />
            ) : tab === "Shipping_info" ? (
              <ShippingInfo />
            ) : (
              <Variation />
            )} */}
                        </Card>
                    </Provider>
                </Tabs>
            </div>
        </>
    );
}

export default DI(ProductEdit);