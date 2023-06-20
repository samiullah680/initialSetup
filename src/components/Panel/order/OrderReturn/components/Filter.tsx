import { AdvanceFilter, Card, FlexLayout, Radio, Select, TextField } from '@cedcommerce/ounce-ui';
import React from 'react';
import { Filter, Search } from 'react-feather';

const Filters = () => {
    return (
        <Card cardType='Bordered' extraClass='ced-filter__wrap'>
            <FlexLayout spacing='tight' wrap='noWrap'>
                <TextField
                    thickness='thin'
                    showHelp=""
                    placeHolder="Enter Title, ID or SKU"
                    innerPreIcon={<Search size={20} />}
                />
                <AdvanceFilter
                    button="Filter"
                    disableApply
                    filters={[
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
                                        label: 'Unmet expectations',
                                        value: 'Unmet expectations'
                                    },
                                    {
                                        label: 'Issue in product quality',
                                        value: 'Issue in product quality'
                                    },
                                    {
                                        label: 'Damaged or defective products',
                                        value: 'Damaged or defective products'
                                    },
                                    {
                                        label: 'Incorrect fit',
                                        value: 'Incorrect fit'
                                    }
                                ]}
                                value=""
                            />,
                            name: 'Reason'
                        },
                    ]}
                    heading="Filters"
                    icon={<Filter color="#2a2a2a" size={20} />}
                    type="Outlined"
                />
            </FlexLayout>
        </Card>
    );
};

export default Filters;