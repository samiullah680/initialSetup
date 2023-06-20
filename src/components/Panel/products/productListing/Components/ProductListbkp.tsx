import { Badge, Button, FlexLayout, Grid, Tabs, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useCallback, useState } from 'react';
import CreatePopOver from './CreatePopover';
import Filters from './Filter';

const ProductList = () => {
    const GridData = [
        {
            image: <img
                src="https://cdn.lorem.space/images/fashion/.cache/640x480/ian-dooley-TT-ROxWj9nA-unsplash.jpg"
                width='60px'
                height='60px'
                style={{ borderRadius: '4px' }}
            />,
            title: <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                <Button content="Nike Legacy Women's Shoes Size" type='TextButton' />
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                        Product SKU:
                    </TextStyles>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                        215454642
                    </TextStyles>
                </FlexLayout>
            </FlexLayout>,
            price: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > INR 200 </TextStyles>,
            quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > 999 </TextStyles>,
            status: <Badge
                badgeTextColor="light"
                size="regular"
                type="Negative-200"
            >
                Pending
            </Badge>,
            action: <CreatePopOver />,
        },
    ];

    const [selected, setSelected] = useState('all-customers');
    const handleTabChange = useCallback(
        (e: any) => setSelected(e),
        [],
    );
    return (
        <>
            <Tabs
                alignment="horizontal"
                onChange={(e) => handleTabChange(e)}
                selected={selected}
                value={[
                    {
                        badge: true,
                        badgeContent: '100',
                        badgeTextColor: 'light',
                        content: 'All',
                        customBgColors: '#9984DB',
                        id: 'all-customers'
                    },
                    {
                        badge: true,
                        badgeContent: '10',
                        badgeTextColor: 'dark',
                        customBgColors: '#FEE6AE',
                        content: 'Not Uploaded',
                        id: 'not_uploaded'
                    },
                    {
                        badge: true,
                        badgeContent: '20',
                        badgeTextColor: 'light',
                        customBgColors: '#FF8277',
                        content: 'In Progress',
                        id: 'in_progress'
                    },
                    {
                        badge: true,
                        badgeContent: '10',
                        badgeTextColor: 'light',
                        customBgColors: '#269E6C',
                        content: 'Live',
                        id: 'live'
                    },
                    {
                        badge: true,
                        badgeContent: '25',
                        badgeTextColor: 'dark',
                        customBgColors: '#FEC84B',
                        content: 'Pending',
                        id: 'pending'
                    },
                    {
                        badge: true,
                        badgeContent: '15',
                        badgeTextColor: 'light',
                        customBgColors: '#FF0000',
                        content: 'Failed',
                        id: 'failed'
                    },
                    {
                        badge: true,
                        badgeContent: '0',
                        badgeTextColor: 'dark',
                        customBgColors: '#B9BBC1',
                        content: 'Seller Deactivated',
                        id: 'seller_deactivated'
                    }
                ]}
            >
                <Filters />
                {selected === 'all-customers' ? <Grid
                    columns=
                    {[
                        {
                            dataIndex: 'image',
                            key: 'image',
                            title: 'Image',
                            width: 76
                        },
                        {
                            dataIndex: 'title',
                            key: 'title',
                            title: 'Title',
                        },
                        {
                            align: 'center',
                            dataIndex: 'price',
                            key: 'price',
                            title: 'Price',
                            width: 100
                        },
                        {
                            align: 'center',
                            dataIndex: 'quantity',
                            key: 'quantity',
                            title: 'Quantity',
                            width: 100
                        },
                        {
                            align: 'center',
                            dataIndex: 'status',
                            key: 'status',
                            title: 'Status',
                            width: 120
                        },
                        {
                            align: 'center',
                            dataIndex: 'action',
                            key: 'action',
                            title: 'Actions',
                            width: 100
                        }
                    ]}
                    dataSource={GridData}
                    scrollX={800}
                    size="middle"
                    tableLayout="auto"
                    rowSelection={{}}
                    expandable={{
                        showExpandColumn: true,
                        expandedRowRender: (record: any) => {
                            return (
                                <Grid
                                    columns=
                                    {[
                                        {
                                            dataIndex: 'image',
                                            key: 'image',
                                            title: 'Image',
                                            width: 76
                                        },
                                        {
                                            dataIndex: 'title',
                                            key: 'title',
                                            title: 'Title',
                                        },
                                        {
                                            align: 'center',
                                            dataIndex: 'quantity',
                                            key: 'quantity',
                                            title: 'Quantity',
                                            width: 100
                                        },
                                        {
                                            align: 'center',
                                            dataIndex: 'status',
                                            key: 'status',
                                            title: 'Status',
                                            width: 120
                                        },
                                        {
                                            align: 'center',
                                            dataIndex: 'action',
                                            key: 'action',
                                            title: 'Actions',
                                            width: 100
                                        }
                                    ]}
                                    dataSource={GridData}
                                    size="middle"
                                    tableLayout="auto"
                                    rowSelection={{}}
                                    scrollX={800}
                                />
                            );
                        },
                    }}

                />
                    : selected === 'Product' ? '2'
                        : selected === 'Pending' ? '3'
                            : selected === 'Warning' ? '4'
                                : selected === 'Finished' ? '5'
                                    : selected === 'Not Uploaded' ? '6'
                                        : null}
            </Tabs>
        </>
    );
};

export default ProductList;