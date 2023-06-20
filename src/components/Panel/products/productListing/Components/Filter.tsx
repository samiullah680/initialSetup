import { AdvanceFilter, Button, Card, CheckBox, FlexLayout, Popover, Radio, Select, TextField } from '@cedcommerce/ounce-ui';
import React, { useCallback, useContext, useState } from 'react';
import { ChevronDown, ChevronUp, Filter, Search } from 'react-feather';
import { DI } from '../../../../../Core';
import { PropsI } from '../../../../../Core/@types';
import { listingContext } from './ProductList';

interface FiltersI extends PropsI {
    visibleColumns?: React.ReactNode
}

const Filters = (props: PropsI) => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const productsContext = useContext(listingContext);
    // const { columns, setColumns } = productsContext;

    const handleColumnsVisibility = (colIndex: any) => {
        console.log(colIndex, 'cici');
        const visibleColumnsArrays = [...productsContext.columns].filter(col1 => col1?.visible).map(col => { return col?.dataIndex; });
        if (!(visibleColumnsArrays.length <= 1 && visibleColumnsArrays.includes(colIndex))) {
            const changedColumns = [...productsContext.columns].map(col => { if (col?.dataIndex == colIndex) return { ...col, visible: !col?.visible }; else return { ...col }; });
            console.log(changedColumns, 'cici');
            productsContext.setColumns([...changedColumns]);
        } else {
            props.error("At least one column will be selected");
        }
    };

    const renderColumnsChoicelist = () => {
        const colOptions = [...productsContext.columns].map(col => { return { label: col.title, value: col.dataIndex }; });
        const selectedVal = [...productsContext.columns].filter(col1 => col1?.visible).map(col => { return col?.dataIndex; });
        return colOptions.map((cl, i) => <CheckBox key={i} labelVal={cl?.label ?? ''} checked={selectedVal.includes(cl.value)} name="Name" onClick={() => handleColumnsVisibility(cl.value)} />);
    };

    return (
        <Card cardType='Bordered' extraClass='ced-filter__wrap'>
            <FlexLayout spacing='tight' wrap='wrap'>
                <TextField
                    thickness='thin'
                    showHelp=""
                    placeHolder="Enter Title, ID or SKU"
                    innerPreIcon={<Search size={20} />}
                />
                <Popover
                    activator={<Button
                        icon={active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        iconAlign="right"
                        onClick={toggleActive}
                        type="Outlined">More Actions</Button>}
                    open={active}
                    onClose={toggleActive}
                    popoverWidth={156}
                >
                    <div className='custom-popover-action'>
                        <FlexLayout direction='vertical' childWidth='fullWidth' halign='center' wrap='noWrap'>
                            {renderColumnsChoicelist()}
                            {/* <CheckBox labelVal="ID" name="Name" />
                            <CheckBox labelVal="Price" name="Name" />
                            <CheckBox labelVal="Quantity" name="Name" />
                            <CheckBox labelVal="SKU" name="Name" />
                            <CheckBox labelVal="Category" name="Name" />
                            <CheckBox labelVal="Status" name="Name" /> */}
                        </FlexLayout>
                    </div>
                </Popover>
                <AdvanceFilter
                    button="Filter"
                    disableApply
                    filters={[
                        {
                            children: <FlexLayout direction="vertical" spacing="loose">
                                <Radio checked labelVal="Simple" name="2" />
                                <Radio labelVal="Variant" name="2" />
                                <Radio labelVal="None of the above" name="2" />
                            </FlexLayout>,
                            name: 'Listing Type'
                        },
                        {
                            children: <Select
                                options={[
                                    {
                                        label: 'Default',
                                        value: 'Default'
                                    },
                                    {
                                        label: 'Profile First',
                                        value: 'Profile First'
                                    },
                                    {
                                        label: 'Profile Second',
                                        value: 'Profile Second'
                                    }
                                ]}
                                searchEable
                                value=""
                            />,
                            name: 'Template'
                        },
                        {
                            children: <FlexLayout direction="vertical" spacing="mediumTight">
                                <TextField
                                    name="Minimum Quantity"
                                    placeHolder="Enter Quantity"
                                    type="text"
                                />
                                <TextField
                                    name="Maximum Quantity"
                                    placeHolder="Enter Quantity"
                                    type="text"
                                />
                            </FlexLayout>,
                            name: 'Quantity'
                        },
                        {
                            children: <FlexLayout direction="vertical" spacing="mediumTight">
                                <TextField
                                    name="Minimum Price"
                                    placeHolder="Enter Price"
                                    type="text"
                                />
                                <TextField
                                    name="Maximum Price"
                                    placeHolder="Enter Price"
                                    type="text"
                                />
                            </FlexLayout>,
                            name: 'Price'
                        },
                        {
                            children: <Select
                                options={[
                                    {
                                        label: 'Default',
                                        value: 'Default'
                                    },
                                    {
                                        label: 'Boots',
                                        value: 'Boots'
                                    },
                                    {
                                        label: 'Sandals',
                                        value: 'Sandals'
                                    },
                                    {
                                        label: 'Sneaker',
                                        value: 'Sneaker'
                                    },
                                    {
                                        label: 'Sports Shoes',
                                        value: 'Sports Shoes'
                                    }
                                ]}
                                searchEable
                                value=""
                            />,
                            name: 'Category'
                        },
                        {
                            children: <TextField
                                placeHolder="Enter Barcode"
                                type="text"
                            />,
                            name: 'Barcode'
                        }
                    ]}
                    heading="Filters"
                    icon={<Filter color="#2a2a2a" size={20} />}
                    type="Outlined"
                />
            </FlexLayout>
        </Card>
    );
};

export default DI(Filters);