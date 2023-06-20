import { Button, Card, FlexChild, FlexLayout, Grid, Noproduct, PageHeader, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'react-feather';
import { DI } from "../../../../../Core";
import { PropsI } from "../../../../../Core/@types";
import { NoProductsvg } from '../../../ErrorPagessvg';
import { AcceptModal, RejectModal } from './CreatePopover';

const ViewOrders = (props: PropsI) => {
    const [accept, toggleAccept] = useState(true);
    const [reject, toggleReject] = useState(true);
    // Accept 
    const primaryActionAccept = {
        loading: false,
        content: "Accept",
        onClick: () => {
            alert(" Accepted :)");
            toggleAccept(!accept);
        },
    };
    const secondaryActionAccept = {
        content: "Close",
        loading: false,
        onClick: () => {
            toggleAccept(!accept);
        },
    };
    // Reject
    const primaryActionReject: any = {
        loading: false,
        content: "Reject",
        type: "Danger",
        onClick: () => {
            alert(" Rejected :)");
            toggleReject(!reject);
        },
    };
    const secondaryActionReject = {
        content: "Close",
        loading: false,
        onClick: () => {
            toggleReject(!reject);
        },
    };
    const Img = <img
        src='https://cdn.lorem.space/images/fashion/.cache/640x480/ian-dooley-TT-ROxWj9nA-unsplash.jpg'
        alt='title'
        width={48}
        height={48}
        style={{ borderRadius: '4px' }}
    />;
    const Data = [
        {
            image: Img,
            name: <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                Title of the Product
            </TextStyles>,
            sku: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >215454642</TextStyles>,
            quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >1 unit</TextStyles>,
            price_unit: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > $100 </TextStyles>,
        },
        {
            quantity: <FlexLayout direction='vertical' spacing='mediumTight' wrap='noWrap'>
                <TextStyles fontweight="extraBold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                    Subtotal Price
                </TextStyles>
                <TextStyles fontweight="extraBold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                    Estimated Tax
                </TextStyles>
            </FlexLayout>,
            price_unit: <FlexLayout direction='vertical' spacing='mediumTight' wrap='noWrap'>
                <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                    $100
                </TextStyles>
                <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                    $10
                </TextStyles>
            </FlexLayout>,
        },
        {
            quantity: <TextStyles fontweight="extraBold" subheadingTypes="MD-2.2" textcolor="dark" type="SubHeading">
                Total
            </TextStyles>,
            price_unit: <TextStyles fontweight="extraBold" subheadingTypes="MD-2.2" textcolor="dark" type="SubHeading">
                $110
            </TextStyles>,
        },
    ];
    return (
        <>
            <PageHeader
                action={
                    <FlexLayout spacing="loose" wrap="noWrap">
                        <Button
                            type="Danger"
                            length="fullBtn"
                            halign="Start"
                            onClick={() => toggleReject(!reject)}
                            icon={<XCircle size={20} />}
                        >
                            Reject
                        </Button>
                        <Button
                            type="Primary"
                            length="fullBtn"
                            halign="Start"
                            onClick={() => toggleAccept(!accept)}
                            icon={<CheckCircle size={20} />}
                        >
                            Accept
                        </Button>
                    </FlexLayout>
                }
                reverseNavigation
                title="Returning Order "
                description="#125698"
                onClick={() => props.history(-1)}
            />
            <FlexLayout spacing='loose' valign='start'>
                <FlexChild desktopWidth='100' tabWidth='100' mobileWidth='100'>
                    <Card title={'Returning Order Details'}>
                        <Grid
                            columns={[
                                {
                                    dataIndex: 'image',
                                    key: 'image',
                                    title: 'Image',
                                    width: 100
                                },
                                {
                                    dataIndex: 'name',
                                    key: 'name',
                                    title: 'Name',
                                    width: 250
                                },
                                {
                                    dataIndex: 'sku',
                                    key: 'sku',
                                    title: 'SKU',
                                    width: 100
                                },
                                {
                                    dataIndex: 'quantity',
                                    key: 'quantity',
                                    title: 'Quantity',
                                    width: 130
                                },
                                {
                                    dataIndex: 'price_unit',
                                    key: 'price_unit',
                                    title: 'Price/Unit',
                                    width: 130
                                }

                            ]}
                            dataSource={Data}
                            locale={{
                                emptyText: (
                                    <Noproduct
                                        image={NoProductsvg}
                                        title='No Order Return'
                                        buttonText='Sync Return'
                                        description={
                                            <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                                                <TextStyles lineHeight="LH-2.0" textcolor='light'>There is no order found in this page</TextStyles>
                                                <p className='inte__text  inte__text--light none inte__font--normal inte__LineHeight--2'>Need help? Read out <a href="#" title='Help Doc'> Help Doc </a> for further details.</p>
                                            </FlexLayout>
                                        }
                                    />
                                )
                            }}
                            scrollX={600}
                            tableLayout="fixed"
                        />
                    </Card>
                </FlexChild>
            </FlexLayout>

            {/* Accept order modal */}
            <AcceptModal modalSize="small"
                open={!accept}
                heading={"Accept Order Return"}
                primaryAction={primaryActionAccept}
                secondaryAction={secondaryActionAccept}
                close={() => {
                    toggleAccept(!accept);
                }} />

            {/* Reject order modal */}
            <RejectModal modalSize="small"
                open={!reject}
                heading={"Reject Order Return"}
                primaryAction={primaryActionReject}
                secondaryAction={secondaryActionReject}
                close={() => {
                    toggleReject(!reject);
                }} />
        </>
    );
};

export default DI(ViewOrders);