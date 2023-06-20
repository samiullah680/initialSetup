import { Badge, Button, Card, FlexChild, FlexLayout, List, PageHeader, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';
import { ExternalLink, FileText } from 'react-feather';
import { DI } from '../../../Core';
import { PropsI } from '../../../Core/@types';
import Activities from './components/Activities';
import Faqs from './components/Faq';
import OrderStatus from './components/OrderStatus';
import ProductStatus from './components/ProductStatus';
import './DashboardStyle.css';

const Dashboard = (props: PropsI) => {

    return (
        <div className='ced-dashboard'>
            <PageHeader
                action={<Button
                    // onClick={function noRefCheck() { }}
                    type="Outlined"
                    icon={<FileText size={16} />}
                >Guide</Button>
                }
                title="Dashboard"
            />
            <FlexLayout spacing='mediumLoose' wrap='wrap' valign='start'>
                <FlexChild desktopWidth='66' tabWidth='100' mobileWidth='100'>
                    <>
                        <Card>
                            <FlexLayout direction='vertical' spacing='loose'>
                                <ProductStatus />
                                <OrderStatus />
                            </FlexLayout>
                        </Card>
                        {/* <Faqs /> */}
                        <Activities />
                    </>
                </FlexChild>
                <FlexChild desktopWidth='33' tabWidth='100' mobileWidth='100'>
                    <FlexLayout direction='vertical' spacing='mediumLoose' wrap='noWrap'>
                        <Card
                            title={'Connected Marketplace Account'}
                        >
                            <FlexLayout halign='fill' spacing='loose' wrap='noWrap'>
                                <FlexChild desktopWidth='66' tabWidth='66' mobileWidth='66'>
                                    <FlexLayout
                                        wrap='noWrap'
                                        spacing='mediumTight'
                                        valign='start'
                                    >
                                        <div className='ced-account__icon'>
                                            <span>M</span>
                                        </div>
                                        <FlexChild>
                                            <>
                                                <TextStyles
                                                    fontweight="bold"
                                                    lineHeight="LH-2.0"
                                                    paragraphTypes="MD-1.4"
                                                    textcolor="dark"
                                                    type="Paragraph"
                                                >Marketplace</TextStyles>
                                                <TextStyles
                                                    fontweight="normal"
                                                    lineHeight="LH-2.0"
                                                    paragraphTypes="MD-1.4"
                                                    textcolor="light"
                                                    type="Paragraph"
                                                    utility='inte-world_break pt-5'
                                                >
                                                    Cedfbe-633582fb9x8dhdbdio834ubububdd89
                                                </TextStyles>
                                            </>
                                        </FlexChild>
                                    </FlexLayout>
                                </FlexChild>
                                <Badge
                                    position="bottom"
                                    size="small"
                                    type="Positive-100"
                                >
                                    Connected
                                </Badge>
                            </FlexLayout>
                        </Card>
                        <Card title={'Important Links'}>
                            <List type="disc">
                                <p className='inte-textwith__link inte__text  inte__text--light none inte__font--normal inte-world_break'>
                                    View your Catalogue
                                    <a href=''> <ExternalLink size={16} /></a>
                                </p>
                                <p className='inte-textwith__link inte__text  inte__text--light none inte__font--normal inte-world_break'>
                                    Visit your Shop (Cedfbe633582fb9x8d io834ububu bdd89Business)
                                    <a href=''> <ExternalLink size={16} /></a>
                                </p>
                                <p className='inte-textwith__link inte__text  inte__text--light none inte__font--normal inte-world_break'>
                                    Open Ad Manager <a href=''> <ExternalLink size={16} /></a>
                                </p>
                            </List>
                        </Card>
                        {/* <Activities /> */}
                    </FlexLayout>
                </FlexChild>
            </FlexLayout>
        </div>
    );
};

export default DI(Dashboard);