import { Button, Card, FlexLayout, Radio, TextField, TextStyles, Uploadnew } from "@cedcommerce/ounce-ui";
import React, { useState } from "react";
import { Eye, Play, PlusCircle, Trash } from 'react-feather';

function Upload(): JSX.Element {

    const [imageType, setImageType] = useState("local");
    const [videoType, setVideoType] = useState("local");
    const [imageLink, setImageLink] = useState("");
    const [imageFetchLoading, setImageFetchLoading] = useState(false);

    const [images, setImages] = useState<any>(
        [
            "https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1",
            "https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1",
            "https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1"
        ]
    );

    // CHECK IF IMAGE EXISTS
    function checkIfImageExists(url: any, callback: any) {
        const img = new Image();
        img.src = url;
        if (img.complete) {
            callback(true);
        } else {
            img.onload = () => {
                callback(true);
            };

            img.onerror = () => {
                callback(false);
            };
        }
    }

    const validateImage = () => {
        let flag = false;
        if (imageLink == "" || images.includes(imageLink)) {
            flag = true;
        }
        return flag;
    };

    const handleFetchImage = async () => {
        setImageFetchLoading(true);
        const validity = validateImage();
        if (!validity) {
            // USAGE
            await checkIfImageExists(imageLink, (exists: any) => {
                if (exists) {
                    setImages([...images, imageLink]);
                    setImageLink('');
                } else {
                    console.log('Image does not exist.');
                }
            });
            setImageFetchLoading(false);
        }
    };

    return (
        <>
            <Card
                cardType="Plain"
                title={"Upload Images & Videos"}>

                <Card cardType="Bordered">
                    <FlexLayout
                        direction="vertical"
                        spacing="loose"
                        wrap="noWrap">
                        <TextStyles fontweight="bold">Images</TextStyles>
                        <FlexLayout spacing="loose" valign="center">
                            <Radio id="upload" name="image" checked={imageType == "local"} onClick={() => setImageType("local")} labelVal="Upload From Local" />
                            <Radio id="link" name="image" checked={imageType == "link"} onClick={() => setImageType("link")} labelVal="Fetch Image Via Link" />
                        </FlexLayout>
                        {imageType == "link" &&
                            <FlexLayout
                                spacing="loose"
                                childWidth="fullWidth">
                                <TextField
                                    thickness="thin"
                                    placeHolder="Enter Image Url" value={imageLink} onChange={setImageLink} />
                                <Button onClick={() => handleFetchImage()}>Fetch</Button>
                            </FlexLayout>
                        }
                        <FlexLayout spacing="loose">
                            {images.map((image: any, index: number) => {
                                return <div
                                    key={index}
                                    data-upload={false}
                                    className="thumbnails">
                                    <div className="ced-action__btn">
                                        <Eye size={22} color="#fff" />
                                        <Trash size={22} color="#fff" />
                                    </div>
                                    <img alt="" src={image ?? ""} />
                                </div>;
                            })}
                            {imageType == "local" &&
                                <div
                                    className="thumbnails"
                                    data-upload={true} // prop to enable cursor pointer enable to upload
                                    onClick={() => {
                                        alert('clicked');
                                    }}>
                                    <FlexLayout
                                        halign="center"
                                        valign="center"
                                        spacing="loose"
                                        wrap="wrap">
                                        <PlusCircle size={22} />
                                        <TextStyles alignment="center" type="SubHeading" subheadingTypes="SM-1.8">Upload Images</TextStyles>
                                    </FlexLayout>
                                </div>
                            }
                        </FlexLayout>
                    </FlexLayout>
                </Card>

                <Card cardType="Bordered">
                    <FlexLayout
                        direction="vertical"
                        spacing="loose"
                        wrap="noWrap">
                        <TextStyles fontweight="bold">Videos</TextStyles>
                        <FlexLayout spacing="loose" valign="center">
                            <Radio id="local-video" name="video" checked={videoType == "local"} onClick={() => setImageType("local")} labelVal="Upload From Local" />
                            <Radio id="video-link" name="video" checked={videoType == "link"} onClick={() => setImageType("link")} labelVal="Fetch Video Via Link" />
                        </FlexLayout>
                        {videoType == "link" &&
                            <FlexLayout
                                spacing="loose"
                                childWidth="fullWidth">
                                <TextField
                                    thickness="thin"
                                    placeHolder="Enter Video Url" />
                                <Button>Fetch</Button>
                            </FlexLayout>
                        }
                        <FlexLayout spacing="loose">
                            <div
                                data-upload={false}
                                className="thumbnails">
                                <div className="ced-action__btn">
                                    <Eye size={22} color="#fff" />
                                    <Trash size={22} color="#fff" />
                                </div>
                                <img alt="" src="https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                            </div>
                            <div
                                data-upload={false}
                                className="thumbnails">
                                <div className="ced-action__btn">
                                    <Eye size={22} color="#fff" />
                                    <Trash size={22} color="#fff" />
                                </div>
                                <img alt="" src="https://burst.shopifycdn.com/photos/two-customized-cars-rolling-through-a-city-street.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                            </div>
                            {videoType == "local" &&
                                <div
                                    className="thumbnails"
                                    data-upload={true} // prop to enamle cursor pointer enable to upload
                                    onClick={() => {
                                        alert('clicked');
                                    }}>
                                    <FlexLayout
                                        halign="center"
                                        valign="center"
                                        spacing="loose"
                                        wrap="wrap">
                                        <PlusCircle size={22} />
                                        <TextStyles alignment="center" type="SubHeading" subheadingTypes="SM-1.8">Upload Videos</TextStyles>
                                    </FlexLayout>
                                </div>
                            }
                        </FlexLayout>
                    </FlexLayout>
                </Card>
            </Card>
        </>
    );
}

export default Upload;