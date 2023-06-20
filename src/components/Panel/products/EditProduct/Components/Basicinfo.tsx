import { Button, Card, FlexLayout, Radio, Tag, TextField, TextStyles, ToolTip } from "@cedcommerce/ounce-ui";
import React, { useContext, useState } from "react";
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Info, Search } from 'react-feather';
import { editContext } from "../ProductEdit";

interface DetailsI {
    type: "custom" | "default",
    value: string
}

interface basicI {
    [ids: string]: DetailsI
}

function Basicinfo(): JSX.Element {

    const useEditContext = useContext(editContext);

    const [tagValue, setTagValue] = useState<string>("");

    return (
        <>
            <Card cardType="Plain"
                title={"Basic Information"}>
                <Card cardType="Bordered">
                    <FlexLayout
                        direction="vertical"
                        wrap="noWrap"
                        spacing="loose">
                        <FlexLayout
                            direction="vertical"
                            wrap="noWrap"
                            spacing="extraTight">
                            <TextStyles utility="mb-5" fontweight="bold">Product Name</TextStyles>
                            <Radio id="title1" onClick={() => useEditContext?.handleBasicDataChange("title", "default")} checked={useEditContext?.basicInfo?.title?.type == "default"} labelVal="set WooCommerce title as tiktok title" name="title" />
                            <Radio id="title2" onClick={() => useEditContext?.handleBasicDataChange("title", "custom")} checked={useEditContext?.basicInfo?.title?.type == "custom"} labelVal="set custom tiktok title" name="title" />
                            {
                                useEditContext.basicInfo.title.type == "custom" &&
                                <div style={{ marginLeft: "2.6rem" }}>
                                    <TextField onChange={(e) => { useEditContext?.handleBasicDataFieldChange("title", e); }} value={useEditContext?.basicInfo?.title?.value} thickness="thin" placeHolder="Enter Product Name" />
                                </div>
                            }
                        </FlexLayout>

                        <FlexLayout
                            direction="vertical"
                            wrap="noWrap"
                            spacing="extraTight">
                            <TextStyles utility="mb-5" fontweight="bold">Brand Name</TextStyles>
                            <Radio id="default" onClick={() => useEditContext?.handleBasicDataChange("brand", "default")} name="brand" checked={useEditContext?.basicInfo?.brand?.type == "default"} labelVal="set WooCommerce brand as tiktok brand" />
                            <Radio id="custom" onClick={() => useEditContext?.handleBasicDataChange("brand", "custom")} name="brand" checked={useEditContext?.basicInfo?.brand?.type == "custom"} labelVal="set custom tiktok brand" />
                            {
                                useEditContext?.basicInfo?.brand?.type == "custom" &&
                                <div style={{ marginLeft: "2.6rem" }}>
                                    <TextField onChange={(e) => { useEditContext?.handleBasicDataFieldChange("brand", e); }} value={useEditContext?.basicInfo?.brand?.value} thickness="thin" placeHolder="Enter Product Name" />
                                </div>
                            }
                        </FlexLayout>

                        <FlexLayout
                            direction="vertical"
                            wrap="noWrap"
                            spacing="extraTight">
                            <TextStyles utility="mb-5" fontweight="bold">Description</TextStyles>
                            <Radio id="description-d" name="description" onClick={() => useEditContext?.handleBasicDataChange("description", "default")} checked={useEditContext?.basicInfo?.description?.type == "default"} labelVal="set WooCommerce description as tiktok description" />
                            <Radio id="description-c" name="description" onClick={() => useEditContext?.handleBasicDataChange("description", "custom")} checked={useEditContext?.basicInfo?.description?.type == "custom"} labelVal="set custom tiktok description" />
                            {
                                useEditContext.basicInfo.description.type == "custom" &&
                                <div style={{ marginLeft: "2.6rem" }}>
                                    <Editor
                                        editorState={useEditContext?.basicInfo?.description?.value}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        // editorClassName="editorClassName"
                                        onEditorStateChange={(e) => { useEditContext?.handleBasicDataFieldChange("description", e); }}
                                        editorClassName="demo-editor"
                                        toolbar={{
                                            options: [
                                                "inline",
                                                "blockType",
                                                "fontSize",
                                                "fontFamily",
                                                "history",
                                                "textAlign",
                                                "list",
                                            ],
                                            inline: {
                                                options: [
                                                    "bold",
                                                    "italic",
                                                    "underline",
                                                    "strikethrough",
                                                    "monospace",
                                                ],
                                                bold: { className: "bordered-option-classname" },
                                                italic: { className: "bordered-option-classname" },
                                                underline: { className: "bordered-option-classname" },
                                                strikethrough: {
                                                    className: "bordered-option-classname",
                                                },
                                                code: { className: "bordered-option-classname" },
                                            },
                                            blockType: {
                                                className: "bordered-option-classname",
                                            },
                                            fontSize: {
                                                className: "bordered-option-classname",
                                            },
                                            fontFamily: {
                                                className: "bordered-option-classname",
                                            },
                                        }}
                                    />
                                </div>
                            }
                        </FlexLayout>
                    </FlexLayout>
                </Card>

                <Card cardType="Bordered">
                    <TextStyles utility="mb-5" fontweight="bold">Tags</TextStyles>
                    <FlexLayout
                        direction="vertical"
                        wrap="noWrap"
                        spacing="loose">
                        <FlexLayout
                            direction="vertical"
                            wrap="noWrap"
                            spacing="extraTight">
                            <Radio id="tags-d" name="tags" onClick={() => useEditContext?.handleBasicDataChange("tags", "default")} checked={useEditContext?.basicInfo?.tags?.type == "default"}
                                labelVal="set WooCommerce tags as tiktok tags" />
                            <Radio id="tags-c" name="tags" onClick={() => useEditContext?.handleBasicDataChange("tags", "custom")} checked={useEditContext?.basicInfo?.tags?.type == "custom"} labelVal="set custom tiktok tags" />
                        </FlexLayout>
                        {
                            useEditContext?.basicInfo?.tags?.type == "custom" &&
                            <div style={{ marginLeft: "2.6rem" }}>
                                <FlexLayout spacing="extraLoose" childWidth="fullWidth">
                                    <TextField
                                        value={tagValue}
                                        onChange={setTagValue}
                                        thickness="thin"
                                        innerPreIcon={<Search />}
                                        placeHolder="Search Tags"
                                        onEnter={() => {
                                            if (tagValue.trim() != "") {
                                                useEditContext?.handleBasicDataFieldChange("tags", tagValue.trim());
                                                setTagValue("");
                                            }
                                        }}
                                    />
                                    <Button type="Outlined">Add</Button>
                                </FlexLayout>
                            </div>
                        }
                        {Object.keys(useEditContext?.basicInfo?.tags?.value).map((key: string, index: number) => {
                            return <Card key={index} cardType="Subdued"> <FlexLayout
                                direction="vertical"
                                wrap="noWrap"
                                spacing="loose">
                                <FlexLayout spacing="tight" valign="center" wrap="noWrap">
                                    <TextStyles utility="mb-5" fontweight="bold">{key === "accepted" ? "Accepted Tags" : "Not Accepted Tags"}</TextStyles>
                                    <ToolTip helpText={"demo text"} type="light" open={false}>
                                        <Info size={15} />
                                    </ToolTip>
                                </FlexLayout>
                                <FlexLayout wrap="noWrap" spacing="loose">
                                    {useEditContext?.basicInfo?.tags?.value[key]?.map((val: Array<string>, index1: number) => {
                                        return < Tag key={index.toString() + index1.toString()} destroy={() => { useEditContext?.deleteTags(key, index1); }}>
                                            {val}
                                        </Tag>;
                                    })}
                                </FlexLayout>
                            </FlexLayout>
                            </Card>;
                        })}
                    </FlexLayout>
                </Card>

            </Card>
        </>
    );
}
export default Basicinfo;