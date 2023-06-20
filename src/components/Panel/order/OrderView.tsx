import { Avatar, Badge, Button, Card, FlexChild, FlexLayout, Grid, PageHeader, PagenotFound, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';
import { Mail, Phone } from 'react-feather';
import user from '../../../assets/icons/user.svg';
import { DI } from '../../../Core';
import { PropsI } from '../../../Core/@types';
import { PanelLayout } from '../../layout';
import { NoOrder } from '../ErrorPagessvg';
import CustomerInfo from './components/CustomerInfo';
import ShippingAddress from './components/ShippingAddress';
import ShippingMethod from './components/ShippingMethod';

const OrderView = (props: PropsI) => {
    const Img = <img
        src='https://cdn.lorem.space/images/fashion/.cache/640x480/ian-dooley-TT-ROxWj9nA-unsplash.jpg'
        alt='title'
        width={48}
        height={48}
        style={{ borderRadius: '4px' }}
    />;

    const Columns = [
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
    ];
    const Data = [
        {
            image: Img,
            name: <FlexLayout direction='vertical' spacing='mediumTight' wrap='noWrap'>
                <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                    Title of the Product
                </TextStyles>
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                        SKU:
                    </TextStyles>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                        215454642
                    </TextStyles>
                </FlexLayout>
            </FlexLayout>,
            quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >1 unit</TextStyles>,
            price_unit: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > $100 </TextStyles>,
        },
        {
            image: Img,
            name: <FlexLayout direction='vertical' spacing='mediumTight' wrap='noWrap'>
                <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                    Title of the Product
                </TextStyles>
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                        SKU:
                    </TextStyles>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                        215454642
                    </TextStyles>
                </FlexLayout>
            </FlexLayout>,
            quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > 1 unit</TextStyles>,
            price_unit: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > $100</TextStyles>,
        },
        {
            image: Img,
            name: <FlexLayout direction='vertical' spacing='mediumTight' wrap='noWrap'>
                <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                    Title of the Product
                </TextStyles>
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                        SKU:
                    </TextStyles>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                        215454642
                    </TextStyles>
                </FlexLayout>
            </FlexLayout>,
            quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > 1 unit</TextStyles>,
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
                    $600
                </TextStyles>
                <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                    $10
                </TextStyles>
            </FlexLayout>,
        },
        {
            quantity: <TextStyles fontweight="extraBold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                Total
            </TextStyles>,
            price_unit: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                $610
            </TextStyles>,
        },
    ];
    return (
        <>
            <PageHeader
                action={
                    <Button
                        thickness="thin"
                        type="Outlined">Cancel</Button>
                }
                metaData={<Badge
                    position="bottom"
                    size="small"
                    type="Warning-100"
                >
                    Awaiting Shipment
                </Badge>}
                reverseNavigation
                title="Order #125698"
                onClick={() => props.history(-1)}
            />
            <FlexLayout spacing='loose' valign='start'>
                <FlexChild desktopWidth='66' tabWidth='100' mobileWidth='100'>
                    <Card title={'Order Details'} >
                        <Grid columns={Columns} dataSource={Data} tableLayout="fixed" scrollX={600} />
                        <div className='ced-errorpage__hidebutton'>
                            <PagenotFound
                                image={NoOrder}
                                title="No Order"
                                description={
                                    <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                                        <TextStyles lineHeight="LH-2.0" textcolor='light' alignment='center'>There is no order found in this page</TextStyles>
                                        <p className='inte__text inte-Align--center inte__text--light none inte__font--normal inte__LineHeight--2'>Need help? Read out <a href="#" title='Help Doc'> Help Doc </a> for further details.</p>
                                    </FlexLayout>
                                }
                            />
                        </div>
                    </Card>
                </FlexChild>
                <FlexChild desktopWidth='33' tabWidth='100' mobileWidth='100'>
                    <FlexLayout spacing='loose' desktopWidth='100' tabWidth='50' mobileWidth='100'>
                        <CustomerInfo />
                        <ShippingMethod />
                        <ShippingAddress />
                    </FlexLayout>
                </FlexChild>
            </FlexLayout>
        </>
    );
};

export default DI(OrderView);