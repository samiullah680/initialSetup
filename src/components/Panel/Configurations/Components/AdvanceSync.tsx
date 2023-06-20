import { Button, Card, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';
import { RefreshCcw } from 'react-feather';

const AdvanceSync = () => {
    return (
        <Card
            title="Synchronize"
            subTitle="If you find any discrepancy in data then please sync from here"
        >
            <Card cardType='Bordered'>
                <FlexLayout direction='vertical' wrap='noWrap' spacing='loose'>
                    <FlexLayout valign='center' wrap='noWrap' halign='fill' spacing='loose'>
                        <TextStyles>Sync Product attributes from Woocommerce </TextStyles>
                        <Button type='Outlined' icon={<RefreshCcw size={16} />} />
                    </FlexLayout>
                    <FlexLayout valign='center' wrap='noWrap' halign='fill' spacing='loose'>
                        <TextStyles>Sync Category from Woocommerce </TextStyles>
                        <Button type='Outlined' icon={<RefreshCcw size={16} />} />
                    </FlexLayout>
                    <FlexLayout valign='center' wrap='noWrap' halign='fill' spacing='loose'>
                        <TextStyles>Sync Shipping Carrier from Arise and Woocommerce </TextStyles>
                        <Button type='Outlined' icon={<RefreshCcw size={16} />} />
                    </FlexLayout>
                    <FlexLayout valign='center' wrap='noWrap' halign='fill' spacing='loose'>
                        <TextStyles>Sync Order Status from Arise and Woocommerce </TextStyles>
                        <Button type='Outlined' icon={<RefreshCcw size={16} />} />
                    </FlexLayout>
                </FlexLayout>
            </Card>
        </Card>
    );
};

export default AdvanceSync;