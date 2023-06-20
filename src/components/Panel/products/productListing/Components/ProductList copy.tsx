import { Badge, Button, CheckBox, FlexLayout, Grid, Popover, Select, Tabs, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useCallback, useState } from 'react';
import CreatePopOver from './CreatePopover';
import Filters from './Filter';
import { ChevronUp, ChevronDown, Upload, CheckCircle, Trash2 } from 'react-feather';

const ProductList = () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const [selected, setSelected] = useState('all-customers');
    const [rowselect, setrowselect] = useState<any>([]);
    const handleTabChange = useCallback(
        (e: any) => setSelected(e),
        [],
    );

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
            setrowselect(selectedRowKeys);
        },
        getCheckboxProps: (record: any) => ({
            name: record.name,
        }),
    };
    const GridData = [
        {
            key: 1,
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
            children: [
                {
                    key: 2,
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
                    key: 4,
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
                    quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > 999 </TextStyles>,
                    status: <Badge
                        badgeTextColor="dark"
                        size="regular"
                        type="Warning-100"
                    >
                        Not Uploaded
                    </Badge>,
                    action: <CreatePopOver />,
                }
            ]
        },
        {
            key: 5,
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
            children: [
                {
                    key: 6,
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
                    key: 7,
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
                    quantity: <TextStyles paragraphTypes="MD-1.4" textcolor="light" type="Paragraph" > 999 </TextStyles>,
                    status: <Badge
                        badgeTextColor="dark"
                        size="regular"
                        type="Warning-100"
                    >
                        Not Uploaded
                    </Badge>,
                    action: <CreatePopOver />,
                }
            ]
        },
    ];

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
                {rowselect.length == 0 ? "" :
                    <div className='ced-selected__row'>
                        <FlexLayout spacing="mediumTight" valign="center">
                            <Popover
                                activator={<Button
                                    icon={active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    iconAlign="right"
                                    onClick={toggleActive}
                                    type="Outlined">Select Actions</Button>}
                                open={active}
                                onClose={toggleActive}
                                popoverWidth={200}
                            >
                                <div className="custom-popover-action">
                                    <FlexLayout direction='vertical' childWidth='fullWidth' wrap='noWrap'>
                                        <Button content="Publish on Michael" icon={<Upload size={20} />} halign='Start' type="Plain" length="fullBtn" />
                                        <Button content="Activate Listing(s)" icon={<CheckCircle size={20} />} halign='Start' type="Plain" length="fullBtn" />
                                        <Button content="Deactivate Listing(s)" icon={<Trash2 size={20} />} halign='Start' type="Plain" length="fullBtn" />
                                    </FlexLayout>
                                </div>
                            </Popover>
                            <TextStyles textcolor='light'>1 listing(s) selected</TextStyles>
                        </FlexLayout>
                    </div>
                }
                {selected === 'all-customers' ? <Grid
                    columns=
                    {[
                        {
                            width: 40
                        },
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
                            width: 140
                        },
                        {
                            align: 'center',
                            dataIndex: 'quantity',
                            key: 'quantity',
                            title: 'Quantity',
                            width: 140
                        },
                        {
                            align: 'center',
                            dataIndex: 'status',
                            key: 'status',
                            title: 'Status',
                            width: 160
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
                    rowSelection={{
                        ...rowSelection,
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