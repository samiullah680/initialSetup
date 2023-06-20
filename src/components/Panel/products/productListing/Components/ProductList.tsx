import { Badge, Button, Card, CheckBox, ChoiceList, FlexLayout, Grid, Noproduct, Pagination, Popover, Tabs, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useCallback, useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, Download, Trash2, Upload } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { NoProductsvg } from '../../../ErrorPagessvg';
import CreatePopOver from './CreatePopover';
import Filters from './Filter';

export const listingContext = React.createContext<any>(null);

const ProductList = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const [selected, setSelected] = useState('all');
    const [rowselect, setrowselect] = useState<any>([]);
    const handleTabChange = useCallback(
        (e: any) => setSelected(e),
        [],
    );

    // const rowSelection = {
    //     onChange: (selectedRowKeys: React.Key[]) => {
    //         setrowselect(selectedRowKeys);
    //     },
    //     // getCheckboxProps: (record: any) => ({
    //     //     name: record.name,
    //     // }),
    // };

    const [selectedRowKeys, setselectedRowKeys] = useState<any>([]);

    const rowSelection = {
        preserveSelectedRowKeys: true,
        selectedRowKeys,
        onChange: (selectedRowKey: any, selectedRows: any) => {
            const ids: any = [];
            Object.values(selectedRows).forEach((val: any) => {
                if (ids.includes(val['source_product_id'])) {
                    ids.splice(ids.indexOf(val['source_product_id']), 1);
                } else {
                    ids.push(val['source_product_id']);
                }
            });
            setselectedRowKeys(selectedRowKey);
            // setSelectedProductIds(ids);
        }
    };

    const VariantData = [
        {
            key: 4,
            parentKey: 1,
            image: <img
                src="https://cdn.lorem.space/images/fashion/.cache/640x480/ian-dooley-TT-ROxWj9nA-unsplash.jpg"
                width='60px'
                height='60px'
                style={{ borderRadius: '4px' }}
                alt=""
            />,
            title: <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                <Button onClick={() => navigate('../product-edit/1/')} content="Nike Legacy Women's Shoes Size" length='fullBtn' halign='Start' type='TextButton' />
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles utility='text-nowrap' fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                        Product SKU:
                    </TextStyles>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                        215454642
                    </TextStyles>
                </FlexLayout>
            </FlexLayout>,
            quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > 999 </TextStyles>,
            status: <Badge
                badgeTextColor="light"
                size="regular"
                type="Negative-200"
            >
                Pending
            </Badge>,
            action: <CreatePopOver />,
            type: "child"
        },
        {
            key: 5,
            parentKey: 1,
            image: <img
                src="https://cdn.lorem.space/images/fashion/.cache/640x480/ian-dooley-TT-ROxWj9nA-unsplash.jpg"
                width='60px'
                height='60px'
                style={{ borderRadius: '4px' }}
                alt=""
            />,
            title: <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                <Button onClick={() => navigate('../product-edit/1/')} content="Nike Legacy Women's Shoes Size" length='fullBtn' halign='Start' type='TextButton' />
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles utility='text-nowrap' fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                        Product SKU:
                    </TextStyles>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                        215454642
                    </TextStyles>
                </FlexLayout>
            </FlexLayout>,
            quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > 999 </TextStyles>,
            status: <Badge
                badgeTextColor="light"
                size="regular"
                type="Positive-300"
            >
                Live
            </Badge>,
            action: <CreatePopOver />,
            type: "child"
        },
        {
            key: 6,
            parentKey: 1,
            image: <img
                src="https://cdn.lorem.space/images/fashion/.cache/640x480/ian-dooley-TT-ROxWj9nA-unsplash.jpg"
                width='60px'
                height='60px'
                style={{ borderRadius: '4px' }}
                alt=""
            />,
            title: <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                <Button onClick={() => navigate('../product-edit/1/')} content="Nike Legacy Women's Shoes Size" length='fullBtn' halign='Start' type='TextButton' />
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles utility='text-nowrap' fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
                        Product SKU:
                    </TextStyles>
                    <TextStyles fontweight="bold" paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" >
                        215454642
                    </TextStyles>
                </FlexLayout>
            </FlexLayout>,
            quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > 999 </TextStyles>,
            status: <Badge
                badgeTextColor="dark"
                size="regular"
                type="Warning-100"
            >
                Not Uploaded
            </Badge>,
            action: <CreatePopOver />,
            type: "child"
        },
    ];

    const [GridData, setGridData] = useState<any>([
        {
            key: 1,
            image: <img
                src="https://cdn.lorem.space/images/fashion/.cache/640x480/ian-dooley-TT-ROxWj9nA-unsplash.jpg"
                width='60px'
                height='60px'
                style={{ borderRadius: '4px' }}
                alt=""
            />,
            variants: [...VariantData],
            // variants: [...VariantData],
            title: <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                <Button onClick={() => navigate('../product-edit/1/')} content="Nike Legacy Women's Shoes Size" length='fullBtn' halign='Start' type='TextButton' />
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles utility='text-nowrap' fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
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
        {
            key: 2,
            image: <img
                src="https://cdn.lorem.space/images/burger/.cache/640x480/erik-odiin-F_xGk7V0Xbc-unsplash.jpg"
                width='60px'
                height='60px'
                style={{ borderRadius: '4px' }}
                alt=""
            />,
            // variants: [...VariantData],
            // variants: [...VariantData],
            title: <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                <Button onClick={() => navigate('../product-edit/1/')} content="Nike Legacy Women's Shoes Size" length='fullBtn' halign='Start' type='TextButton' />
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles utility='text-nowrap' fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
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
                type="Positive-300"
            >
                Live
            </Badge>,
            action: <CreatePopOver />,
        },
        {
            key: 3,
            image: <img
                src="https://cdn.lorem.space/images/hotel/.cache/640x480/reisetopia-aI6Su7Mu9Ro-unsplash.jpg"
                width='60px'
                height='60px'
                style={{ borderRadius: '4px' }}
                alt=""
            />,
            // variants: [...VariantData],
            // variants: [...VariantData],
            title: <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                <Button onClick={() => navigate('../product-edit/1/')} content="Nike Legacy Women's Shoes Size" length='fullBtn' halign='Start' type='TextButton' />
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles utility='text-nowrap' fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
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
                badgeTextColor="dark"
                size="regular"
                type="Warning-100"
            >
                Not Uploaded
            </Badge>,
            action: <CreatePopOver />,
        },
        {
            key: 9,
            image: <img
                src="https://cdn.lorem.space/images/burger/.cache/640x480/eiliv-sonas-aceron-uBigm8w_MpA-unsplash.jpg"
                width='60px'
                height='60px'
                style={{ borderRadius: '4px' }}
                alt=""
            />,
            // variants: [...VariantData],
            // variants: [...VariantData],
            title: <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                <Button onClick={() => navigate('../product-edit/1/')} content="Nike Legacy Women's Shoes Size" length='fullBtn' halign='Start' type='TextButton' />
                <FlexLayout spacing='extraTight' wrap='noWrap'>
                    <TextStyles utility='text-nowrap' fontweight="bold" paragraphTypes="MD-1.4" textcolor="dark" type="Paragraph" >
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
                badgeTextColor="dark"
                size="regular"
                type="Warning-100"
            >
                Not Uploaded
            </Badge>,
            action: <CreatePopOver />,
        },
    ]);

    const [columns, setColumns] = useState<any>([
        {
            dataIndex: 'image',
            visible: true,
            key: 'image',
            title: 'Image',
            width: 76,
        },
        {
            dataIndex: 'title',
            visible: true,
            key: 'title',
            title: 'Title',
        },
        {
            align: 'center',
            dataIndex: 'price',
            visible: true, key: 'price',
            title: 'Price',
            width: 140
        },
        {
            align: 'center',
            dataIndex: 'quantity',
            visible: true,
            key: 'quantity',
            title: 'Quantity',
            width: 140
        },
        {
            align: 'center',
            dataIndex: 'status',
            visible: true,
            key: 'status',
            title: 'Status',
            width: 160
        },
        {
            align: 'center',
            fixed: 'right',
            dataIndex: 'action',
            visible: true,
            key: 'action',
            title: 'Actions',
            width: 100
        }
    ]);

    const getGridDataWithoutChildren = (gridData: any) => {
        let dataReturn = [];
        const gridWithoutChildren = [...gridData];
        dataReturn = [...gridWithoutChildren].map((row: any) => {
            const { key, image, title, price, quantity, status, action } = row;
            return { key, image, title, price, quantity, status, action };
        });
        return dataReturn;
    };

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
                        id: 'all'
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
                <listingContext.Provider value={{ columns, setColumns }}>
                    <Filters />
                </listingContext.Provider>
                {rowselect.length === 0 ? "" :
                    <div className='ced-selected__row'>
                        <FlexLayout spacing="mediumTight" valign="center">
                            {/* <span className='ced-selected__all'>
                                <CheckBox checked labelVal='' />
                            </span> */}
                            <Popover
                                activator={<Button
                                    icon={active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    iconAlign="right"
                                    onClick={toggleActive}
                                    type="Outlined">Select Actions</Button>}
                                open={active}
                                onClose={toggleActive}
                                popoverWidth={215}
                            >
                                <div className="custom-popover-action">
                                    <FlexLayout direction='vertical' childWidth='fullWidth' wrap='noWrap'>
                                        <Button content="Publish on Michael" icon={<Upload size={20} />} halign='Start' type="Outlined" length="fullBtn" />
                                        <Button content="Activate Listing(s)" icon={<CheckCircle size={20} />} halign='Start' type="Outlined" length="fullBtn" />
                                        <Button content="Deactivate Listing(s)" icon={<Trash2 size={20} />} halign='Start' type="DangerOutlined" length="fullBtn" />
                                    </FlexLayout>
                                </div>
                            </Popover>
                            <TextStyles textcolor='light'>1 listing(s) selected</TextStyles>
                        </FlexLayout>
                    </div>
                }
                {selected === 'all' ?
                    <>
                        <Grid
                            columns={[...columns].filter((col: any) => col?.visible)}
                            dataSource={
                                // getGridDataWithoutChildren([...GridData])
                                [...GridData]
                            }
                            locale={{
                                emptyText: (
                                    <Noproduct
                                        image={NoProductsvg}
                                        title="No Product"
                                        description={
                                            <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                                                <TextStyles lineHeight="LH-2.0" textcolor='light'>Your file have some error. We’re trying to fix it.</TextStyles>
                                                <p className='inte__text  inte__text--light none inte__font--normal inte__LineHeight--2'>Need help? Read out <a href="#" title='Help Doc'> Help Doc </a> for further details.</p>
                                            </FlexLayout>
                                        }
                                        buttonText="Import Product"
                                        icon={<Download size={16} />}
                                        onClick={() => {
                                            alert("Create and Account");
                                        }} />
                                ),
                            }}
                            scrollX={800}
                            size="middle"
                            tableLayout="auto"
                            rowSelection={{
                                ...rowSelection,
                                checkStrictly: false,
                            }}
                            expandable={{
                                showExpandColumn: true,
                                expandedRowRender: (col: any) => {
                                    // const index = GridData.findIndex((item: any) => item.key == col.key);
                                    return (
                                        <Grid
                                            columns={[...columns].filter(col => col.key != "price" && col?.visible)}
                                            dataSource={col?.variants ?? []}
                                            size="middle"
                                            tableLayout="auto"
                                            rowSelection={{
                                                hideSelectAll: true,
                                                ...rowSelection,
                                                checkStrictly: false
                                            }}
                                            scrollX={800}
                                        />
                                    );
                                },
                                rowExpandable: (record: any) =>
                                    record?.variants && record.variants.length > 0
                            }}
                        />
                        <Card cardType='Bordered' extraClass='ced-pagination__wrap'>
                            <Pagination
                                countPerPage={10}
                                currentPage={1}
                                optionPerPage={[
                                    {
                                        label: '10',
                                        value: '10'
                                    },
                                    {
                                        label: '15',
                                        value: '15'
                                    },
                                    {
                                        label: '20',
                                        value: '20'
                                    },
                                    {
                                        label: '25',
                                        value: '25'
                                    },
                                    {
                                        label: '50',
                                        value: '50'
                                    }
                                ]}
                                totalitem={200}
                            />
                        </Card>
                    </>
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