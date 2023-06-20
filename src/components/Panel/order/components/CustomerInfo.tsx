import { Avatar, Card, FlexChild, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';
import { Mail, Phone } from 'react-feather';
import user from '../../../../assets/icons/user.svg';
const CustomerInfo = () => {
    return (
        <Card title={'Customer Information'} >
            <FlexLayout direction='vertical' spacing='loose' wrap='noWrap' childWidth='fullWidth'>
                <FlexLayout
                    wrap='noWrap'
                    spacing='mediumTight'
                    valign='start'
                >
                    <Avatar
                        color="black"
                        image={user}
                        size="large"
                        text="Jon Doe"
                        type="circle"
                    />
                    <FlexChild>
                        <>
                            <TextStyles
                                fontweight="bold"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="Paragraph"
                            >Name</TextStyles>
                            <TextStyles
                                fontweight="normal"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility='inte-world_break'
                            >
                                Tanya McCarthy
                            </TextStyles>
                        </>
                    </FlexChild>
                </FlexLayout>
                <hr style={{ border: '1px solid #d7d9db', margin: '0' }} />
                <FlexLayout
                    wrap='noWrap'
                    spacing='mediumTight'
                    valign='start'
                >
                    <Mail size={18} />
                    <FlexChild>
                        <>
                            <TextStyles
                                fontweight="bold"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="Paragraph"
                            >Email</TextStyles>
                            <TextStyles
                                fontweight="normal"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility='inte-world_break'
                            >
                                p.satyaprakash.viet.2009@gmai..com
                            </TextStyles>
                        </>
                    </FlexChild>
                </FlexLayout>
                <FlexLayout
                    wrap='noWrap'
                    spacing='mediumTight'
                    valign='start'
                >
                    <Phone size={18} />
                    <FlexChild>
                        <>
                            <TextStyles
                                fontweight="bold"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="Paragraph"
                            >Phone</TextStyles>
                            <TextStyles
                                fontweight="normal"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="light"
                                type="Paragraph"
                                utility='inte-world_break'
                            >
                                (+442)7587451258
                            </TextStyles>
                        </>
                    </FlexChild>
                </FlexLayout>
            </FlexLayout>
        </Card>
    );
};

export default CustomerInfo;