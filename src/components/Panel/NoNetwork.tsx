import { FlexLayout, PagenotFound, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';
import { RotateCw } from 'react-feather';
import { Nonetwork } from './ErrorPagessvg';

const NoNetwork = () => {
    return (
        <div className='ced-nonetwork_page'>
            <PagenotFound
                image={Nonetwork}
                title="No Network"
                buttonText='Refresh Page'
                icon={<RotateCw size={20} />}
                description={
                    <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                        <TextStyles lineHeight="LH-2.0" textcolor='light' alignment='center'>Checking the network cables, modem and router</TextStyles>
                        <TextStyles lineHeight="LH-2.0" textcolor='light' alignment='center'>Reconnecting to Wi-Fi</TextStyles>
                    </FlexLayout>
                }
            />
        </div>
    );
};

export default NoNetwork;