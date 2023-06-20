import { ActionList, Button, Card, FlexLayout, Modal, Popover, Select, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useCallback, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { DI } from '../../../../Core';
import { PropsI } from '../../../../Core/@types';
import { Error, Finished, Imported, Warning } from './IconSvg';

const ProductStatus = (props: PropsI) => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    const [uploadModal, setUploadModal] = useState<boolean>(false);
    const [allProfilesToUpload, setAllProfilesToUpload] = useState<any>([{ label: "Default", value: "all_products" }, { label: "Profile-1", value: "profile1" }]);
    const [profileValue, setProfileValue] = useState("all_products");

    const handleProfileChange = (value: any) => {
        setProfileValue(value);
    };

    return (
        <Card
            cardType='Subdued'
            title={'Product Status'}
            action={
                <FlexLayout spacing="loose" wrap="noWrap" valign='center'>
                    {/* <ActionList
                        activator={<Button
                            icon={active ? <ChevronUp /> : <ChevronDown />}
                            iconAlign="right"
                            onClick={toggleActive}
                            type="Outlined">More Actions</Button>}
                        open={active}
                        onClose={toggleActive}
                        options={[
                            {
                                items: [
                                    {
                                        content: 'Action 1',
                                        onClick: function noRefCheck() { }
                                    },
                                    {
                                        content: 'Action 1',
                                        onClick: function noRefCheck() { }
                                    },
                                    {
                                        content: 'Action 1',
                                        onClick: function noRefCheck() { }
                                    }
                                ],
                            }
                        ]}
                    /> */}
                    {/* <Popover
                        activator={<Button
                            icon={active ? <ChevronUp /> : <ChevronDown />}
                            iconAlign="right"
                            onClick={toggleActive}
                            type="Outlined">More Actions</Button>}
                        open={active}
                        onClose={toggleActive}
                        popoverWidth={156}
                    >
                        <div className="custom-popover-action">
                            <FlexLayout direction='vertical' childWidth='fullWidth' halign='center' wrap='noWrap'>
                                <Button content="Action 1" type="Outlined" halign='Start' length="fullBtn" />
                                <Button content="Action 2" type="Outlined" halign='Start' length="fullBtn" />
                                <Button content="Action 3" type="Outlined" halign='Start' length="fullBtn" />
                            </FlexLayout>
                        </div>
                    </Popover> */}
                    <Button
                        type='TextButton'
                    >
                        View All
                    </Button>
                    <Button
                        onClick={() => setUploadModal(true)}
                        type="Primary">
                        Bulk Upload
                    </Button>
                </FlexLayout>
            }
        >
            <FlexLayout
                spacing='loose'
                wrap='wrap'
                desktopWidth='25'
                tabWidth='50'
                mobileWidth='50'
            >
                <Card extraClass='p-12'>
                    <FlexLayout
                        direction='vertical'
                        spacing='mediumTight'
                        wrap='noWrap'
                    >
                        <FlexLayout
                            halign='fill'
                            valign='center'
                            wrap='noWrap'>
                            <TextStyles
                                fontweight="bold"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="simpleText"
                            >
                                Finished
                            </TextStyles>
                            {Finished}
                        </FlexLayout>
                        <TextStyles
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            paragraphTypes="MD-1.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                        >0</TextStyles>
                        <Button
                            content="View Products"
                            type="Plain"
                            onClick={() => props.history('../product-listing/finished')}
                        />
                    </FlexLayout>
                </Card>
                <Card extraClass='p-12'>
                    <FlexLayout
                        direction='vertical'
                        spacing='mediumTight'
                        wrap='noWrap'
                    >
                        <FlexLayout
                            halign='fill'
                            valign='center'
                            wrap='noWrap'>
                            <TextStyles
                                fontweight="bold"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="simpleText"
                            >
                                Error(s)
                            </TextStyles>
                            {Error}
                        </FlexLayout>
                        <TextStyles
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            paragraphTypes="MD-1.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                        >
                            0
                        </TextStyles>
                        <Button
                            content="View Products"
                            type="Plain"
                            onClick={() => props.history('../product-listing/error')}
                        />
                    </FlexLayout>
                </Card>
                <Card extraClass='p-12'>
                    <FlexLayout
                        direction='vertical'
                        spacing='mediumTight'
                        wrap='noWrap'
                    >
                        <FlexLayout
                            halign='fill'
                            valign='center'
                            wrap='noWrap'>
                            <TextStyles
                                fontweight="bold"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="simpleText"
                            >
                                Warning(s)
                            </TextStyles>
                            {Warning}
                        </FlexLayout>
                        <TextStyles
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            paragraphTypes="MD-1.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                        >
                            0
                        </TextStyles>
                        <Button
                            content="View Products"
                            type="Plain"
                            onClick={() => props.history('../product-listing/warning')}
                        />
                    </FlexLayout>
                </Card>
                <Card extraClass='p-12'>
                    <FlexLayout
                        direction='vertical'
                        spacing='mediumTight'
                        wrap='noWrap'
                    >
                        <FlexLayout
                            halign='fill'
                            valign='center'
                            wrap='noWrap'>
                            <TextStyles
                                fontweight="bold"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="simpleText"
                            >
                                Imported
                            </TextStyles>
                            {Imported}
                        </FlexLayout>
                        <TextStyles
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            paragraphTypes="MD-1.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                        >
                            0
                        </TextStyles>
                        <Button
                            content="View Products"
                            type="Plain"
                            onClick={() => props.history('../product-listing')}
                        />
                    </FlexLayout>
                </Card>
            </FlexLayout>
            <Modal
                close={() => {
                    setUploadModal(!uploadModal);
                }}
                open={uploadModal}
                heading="Bulk upload on Target"
                modalSize="large"
                primaryAction={{
                    content: 'Upload products',
                    // onClick: () => uploadProductsOnTarget()
                }}
                secondaryAction={{
                    content: 'Cancel',
                    loading: false,
                    onClick: () => setUploadModal(!uploadModal)
                }}
            >
                <FlexLayout direction='vertical' spacing='loose'>
                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        type="simpleText"
                        utility="none"
                    >
                        The Upload to Target feature allows you to bulk upload your Source products on Target in one go. Simply select your desired template from the drop-down and the app will initiate the action accordingly.
                    </TextStyles>
                    <TextStyles
                        alignment="left"
                        fontweight="bold"
                        type="simpleText"
                        utility="none"
                    >
                        You are about to bulk upload products on Target as per the selected template, are you sure you want to proceed?
                    </TextStyles>
                    <FlexLayout direction='vertical' spacing="mediumTight">
                        {Array.isArray(allProfilesToUpload) && allProfilesToUpload.length > 0 &&
                            <Select
                                options={allProfilesToUpload}
                                value={profileValue}
                                onChange={handleProfileChange}
                            />
                        }
                    </FlexLayout>
                    <FlexLayout spacing='extraTight' valign='center'>
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            textcolor="light"
                            type="simpleText"
                            utility="none"
                        >Learn more about how to
                        </TextStyles>
                        <Button
                            halign="Center"
                            length="none"
                            onClick={() => {
                                setUploadModal(false);
                                props.history('../faq', { "state": "upload" });
                            }}
                            thickness="extraThin"
                            type="Plain"
                        >
                            bulk upload
                        </Button>
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            textcolor="light"
                            type="simpleText"
                            utility="none"
                        >products on Target.
                        </TextStyles>
                    </FlexLayout>
                </FlexLayout>
            </Modal>
        </Card>
    );
};

export default DI(ProductStatus);