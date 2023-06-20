import { ActionList, Alert, Button, Card, FlexLayout, PageHeader } from '@cedcommerce/ounce-ui';
import React, { useCallback, useState } from 'react';
import { ChevronDown, ChevronUp, Download, FileText, RefreshCw } from 'react-feather';
import ProductList from './Components/ProductList';
import './ProductStyle.css';

const Products = () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
        <>
            <PageHeader
                action={
                    <FlexLayout spacing="mediumTight" wrap="wrap">
                        <Button icon={<FileText size={16} />} type="Outlined">Guide</Button>
                        <ActionList
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
                                            content: 'Import & Sync from Shopify',
                                            prefixIcon: <Download size={20} />,
                                            // onClick: function noRefCheck() { }
                                        },
                                        {
                                            content: 'Sync Listing(s) Status from Michaels',
                                            prefixIcon: <RefreshCw size={20} />,
                                            // onClick: function noRefCheck() { }
                                        }
                                    ],
                                }
                            ]}
                        />
                        {/* <Popover
                            activator={<Button
                                icon={active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                iconAlign="right"
                                onClick={toggleActive}
                                type="Outlined">More Actions</Button>}
                            open={active}
                            onClose={toggleActive}
                            popoverWidth={322}
                        >
                            <div className='custom-popover-action'>
                                <FlexLayout direction='vertical' childWidth='fullWidth' wrap='noWrap'>
                                    <Button content="Import & Sync from Shopify" halign='Start' type="Outlined" icon={<Download size={20} />} length="fullBtn" />
                                    <Button content="Sync Listing(s) Status from Michaels" halign='Start' icon={<RefreshCw size={20} />} type="Outlined" length="fullBtn" />
                                </FlexLayout>
                            </div>
                        </Popover> */}
                        <Button type="Primary">Bulk Upload</Button>
                    </FlexLayout>
                }
                title="Product Listing"
            />
            <Card extraClass='ced-product__grid'>
                <FlexLayout direction='vertical' spacing='extraLoose' wrap='noWrap'>
                    <Alert
                        destroy
                        // onClose={function noRefCheck() { }}
                        type="info"
                    >
                        Want to upload simple product(s)?
                        <a href='#' target='_blank'> Learn More </a>
                    </Alert>
                    <ProductList />
                </FlexLayout>
            </Card>
        </>
    );
};

export default Products;