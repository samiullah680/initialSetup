import { Button, Card, FlexChild, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';
import Shopify from './shopify.png';

const AccountSettings = () => {
    return (
        <Card
            title={'Accounts'}
        >
            <Card
                cardType='Bordered'
            >
                <FlexLayout direction='vertical' spacing='loose'>
                    <TextStyles fontweight="bold">Support</TextStyles>
                    <FlexLayout halign='fill' spacing='loose'>
                        <FlexLayout
                            wrap='noWrap'
                            spacing='loose'
                            valign='center'
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
                                    >Michael</TextStyles>
                                </>
                            </FlexChild>
                        </FlexLayout>
                        <Button content='Update' type='Outlined' />
                    </FlexLayout>
                    <div style={{ marginLeft: '48px', wordBreak: 'break-word' }}>
                        <FlexLayout direction='vertical' spacing='extraTight'>
                            <TextStyles
                                fontweight="normal"
                                lineHeight="LH-2.0"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="Paragraph"
                            >API Key</TextStyles>
                            <p className="Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--medium inte__LineHeight--2 ">
                                Bad114c45c8ddDr8d4d5sD22z2z2z2z2 <Button
                                    content="copy key"
                                    type="TextButton"
                                    onClick={() => navigator.clipboard.writeText("Bad114c45c8ddDr8d4d5sD22z2z2z2z2")}
                                />
                            </p>
                        </FlexLayout>
                    </div>
                </FlexLayout>
            </Card>
            <Card
                cardType='Bordered'
            >
                <FlexLayout direction='vertical' spacing='loose'>
                    <TextStyles fontweight="bold">Target</TextStyles>
                    <FlexLayout
                        wrap='noWrap'
                        spacing='loose'
                        valign='center'
                    >
                        <div className='ced-account__icon'>
                            <img src={Shopify} alt="Shopify" />
                        </div>
                        <FlexChild>
                            <>
                                <TextStyles
                                    fontweight="bold"
                                    lineHeight="LH-2.0"
                                    paragraphTypes="MD-1.4"
                                    textcolor="dark"
                                    type="Paragraph"
                                >Shopify</TextStyles>
                                <TextStyles
                                    fontweight="normal"
                                    lineHeight="LH-2.0"
                                    paragraphTypes="MD-1.4"
                                    textcolor="light"
                                    type="Paragraph"
                                >
                                    Ironman-cedstore.myshopify.com
                                </TextStyles>
                            </>
                        </FlexChild>
                    </FlexLayout>
                    <div style={{ marginLeft: '48px', wordBreak: 'break-word' }}>
                        <FlexLayout direction='vertical' spacing='mediumLoose'>
                            <FlexLayout direction='vertical' spacing='extraTight'>
                                <TextStyles
                                    fontweight="normal"
                                    lineHeight="LH-2.0"
                                    paragraphTypes="MD-1.4"
                                    textcolor="dark"
                                    type="Paragraph"
                                >API Key</TextStyles>
                                <p className="Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--medium inte__LineHeight--2 ">
                                    Bad114c45c8ddDr8d4d5sD22z2z2z2z2 <Button
                                        content="copy key"
                                        type="TextButton"
                                        onClick={() => navigator.clipboard.writeText("Bad114c45c8ddDr8d4d5sD22z2z2z2z2")}
                                    />
                                </p>
                            </FlexLayout>
                            <FlexLayout direction='vertical' spacing='extraTight'>
                                <TextStyles
                                    fontweight="normal"
                                    lineHeight="LH-2.0"
                                    paragraphTypes="MD-1.4"
                                    textcolor="dark"
                                    type="Paragraph"
                                >API Key</TextStyles>
                                <p className="Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--medium inte__LineHeight--2 ">
                                    Bad114c45c8ddDr8d4d5sD22z2z2z2z2 <Button
                                        content="copy key"
                                        type="TextButton"
                                        onClick={() => navigator.clipboard.writeText("Bad114c45c8ddDr8d4d5sD22z2z2z2z2")}
                                    />
                                </p>
                            </FlexLayout>
                        </FlexLayout>
                    </div>
                </FlexLayout>
            </Card>
        </Card>
    );
};

export default AccountSettings;