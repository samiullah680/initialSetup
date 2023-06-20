import { Badge, Button, Card, FlexLayout, Grid, Noproduct, Pagination, RightArrow, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';
import { DI } from "../../../../../Core";
import { PropsI } from "../../../../../Core/@types";
import { NoProductsvg } from '../../../ErrorPagessvg';
import CreatePopOver from './CreatePopover';

const OrderReturnGrid = (props: PropsI) => {
    function OrderView(id = "1") {
        props.history("../return-order/" + id);
    }
    const data = [
        {
            returnorder_id: <Button type='TextButton' content='254112235684512333666666' onClick={OrderView} />,
            order_id: <TextStyles textcolor='light'>4489652123514944646</TextStyles>,
            created_on: <TextStyles textcolor='light'>1564552874</TextStyles>,
            return_reason: <TextStyles textcolor='light'>Out of Stock</TextStyles>,
            return_status: <Badge badgeTextColor="light" type="Negative-200">Refund Rejected</Badge>,
            action: <CreatePopOver />
        },
        {
            returnorder_id: <Button type='TextButton' content='254112235684512333666666' onClick={OrderView} />,
            order_id: <TextStyles textcolor='light'>4489652123514944646</TextStyles>,
            created_on: <TextStyles textcolor='light'>1564552874</TextStyles>,
            return_reason: <TextStyles textcolor='light'>Out of Stock</TextStyles>,
            return_status: <Badge badgeTextColor="light" type="Positive-300">Complete</Badge>,
            action: <CreatePopOver />
        },
        {
            returnorder_id: <Button type='TextButton' content='254112235684512333666666' onClick={OrderView} />,
            order_id: <TextStyles textcolor='light'>4489652123514944646</TextStyles>,
            created_on: <TextStyles textcolor='light'>1564552874</TextStyles>,
            return_reason: <TextStyles textcolor='light'>Out of Stock</TextStyles>,
            return_status: <Badge badgeTextColor="light" type="Negative-200">Refund Rejected</Badge>,
            action: <CreatePopOver />
        },
        {
            returnorder_id: <Button type='TextButton' content='254112235684512333666666' onClick={OrderView} />,
            order_id: <TextStyles textcolor='light'>4489652123514944646</TextStyles>,
            created_on: <TextStyles textcolor='light'>1564552874</TextStyles>,
            return_reason: <TextStyles textcolor='light'>Out of Stock</TextStyles>,
            return_status: <Badge badgeTextColor="light" type="Positive-300">Complete</Badge>,
            action: <CreatePopOver />
        },
    ];
    return (
        <>
            <Grid
                columns={[
                    {
                        align: 'center',
                        dataIndex: 'returnorder_id',
                        title: 'Return Order ID',
                        width: 285
                    },
                    {
                        align: 'center',
                        dataIndex: 'order_id',
                        title: 'Order ID',
                        width: 210
                    },
                    {
                        align: 'center',
                        dataIndex: 'created_on',
                        title: 'Created On',
                        width: 140
                    },
                    {
                        align: 'center',
                        dataIndex: 'return_reason',
                        title: 'Return Reason',
                        width: 200
                    },
                    {
                        align: 'center',
                        dataIndex: 'return_status',
                        title: 'Return Status',
                        width: 160
                    },
                    {
                        align: 'center',
                        dataIndex: 'action',
                        title: 'Actions',
                        fixed: 'right',
                        width: 100
                    },

                ]}
                dataSource={data}
                locale={{
                    emptyText: (
                        <Noproduct
                            image={NoProductsvg}
                            title="No Order Return Found"
                            description={
                                <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                                    <TextStyles lineHeight="LH-2.0" textcolor='light'>There is no Order Return found this this tab</TextStyles>
                                    <p className='inte__text  inte__text--light none inte__font--normal inte__LineHeight--2'>Need help? Read out <a href="#" title='Help Doc'> Help Doc </a> for further details.</p>
                                </FlexLayout>
                            }
                            buttonText="Sync Return"
                            onClick={() => {
                                alert("Create and Account");
                            }} />
                    ),
                }}
                scrollX={1000}
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
    );
};

export default DI(OrderReturnGrid);