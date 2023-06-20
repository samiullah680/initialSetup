import { Alert, Button, Card, FlexLayout, PageHeader, Tabs, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useCallback, useState } from 'react';
import { FileText } from 'react-feather';
import Filters from './components/Filter';
import OrderReturnGrid from './components/OrderReturnGrid';

const OrderReturn = () => {
    const [selected, setselected] = useState('all');
    const handleTabChange = useCallback(
        (e: any) => setselected(e),
        []
    );
    return (
        <>
            <PageHeader
                action={
                    <FlexLayout spacing="loose" wrap="noWrap">
                        <Button
                            // onClick={function noRefCheck() { }}
                            type="Outlined"
                            icon={<FileText size={16} />}
                        >
                            Guide
                        </Button>
                        <Button
                            // onClick={function noRefCheck() { }}
                            type="Primary">
                            Sync Return
                        </Button>
                    </FlexLayout>
                }
                title="Order Return"
            />
            <Card>
                <FlexLayout direction='vertical' spacing='loose' wrap='noWrap'>
                    <Alert
                        destroy
                        // onClose={function noRefCheck() { }}
                        type="info"
                    >
                        <TextStyles>
                            If you do not accept/reject any order Michales will automiticall reject it after hrs
                        </TextStyles>
                    </Alert>
                    <Tabs
                        alignment="horizontal"
                        onChange={(e) => handleTabChange(e)}
                        selected={selected}
                        value={[
                            {
                                badge: true,
                                badgeContent: '4',
                                badgeTextColor: 'light',
                                content: 'All',
                                customBgColors: '#9984DB',
                                id: 'all'
                            },
                            {
                                badge: true,
                                badgeContent: '2',
                                badgeTextColor: 'dark',
                                customBgColors: '#FEE6AE',
                                content: 'Pending Returns',
                                id: 'pending_returns'
                            },
                            {
                                badge: true,
                                badgeContent: '1',
                                badgeTextColor: 'light',
                                customBgColors: '#FF8277',
                                content: 'Refund Rejected',
                                id: 'refund_rejected'
                            },
                            {
                                badge: true,
                                badgeContent: '1',
                                badgeTextColor: 'light',
                                customBgColors: '#269E6C',
                                content: 'Complete',
                                id: 'complete'
                            }
                        ]}
                    >
                        {selected === 'all' ?
                            <>
                                <Filters />
                                <OrderReturnGrid />
                            </>
                            :
                            null
                        }
                    </Tabs>
                </FlexLayout>
            </Card>
        </>
    );
};

export default OrderReturn;