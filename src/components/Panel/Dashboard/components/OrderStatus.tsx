import { Button, Card, FlexLayout, TextStyles } from '@cedcommerce/ounce-ui';
import { useNavigate } from 'react-router-dom';
import { Error, Finished, Imported, Pending, Refunded, Warning } from './IconSvg';

const OrderStatus = () => {

    const navigate = useNavigate();

    return (
        <Card
            cardType='Subdued'
            title={'Order Status'}
            action={
                <Button
                    type='TextButton'
                >
                    View All
                </Button>
            }
        >
            <FlexLayout
                spacing='loose'
                wrap='wrap'
                desktopWidth='25'
                tabWidth='50'
                mobileWidth='50'
            >
                <Card extraClass='p-12'>
                    <FlexLayout
                        direction='vertical'
                        spacing='mediumTight'
                        wrap='noWrap'
                    >
                        <FlexLayout
                            halign='fill'
                            valign='center'
                            wrap='noWrap'>
                            <TextStyles
                                fontweight="bold"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="simpleText"
                            >
                                Pending
                            </TextStyles>
                            {Pending}
                        </FlexLayout>
                        <TextStyles
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            paragraphTypes="MD-1.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                        >
                            0
                        </TextStyles>
                        <Button
                            content="View Products"
                            type="Plain"
                            onClick={() => navigate('../order/pending')}
                        />
                    </FlexLayout>
                </Card>
                <Card extraClass='p-12'>
                    <FlexLayout
                        direction='vertical'
                        spacing='mediumTight'
                        wrap='noWrap'
                    >
                        <FlexLayout
                            halign='fill'
                            valign='center'
                            wrap='noWrap'>
                            <TextStyles
                                fontweight="bold"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="simpleText"
                            >
                                Cancelled
                            </TextStyles>
                            {Error}
                        </FlexLayout>
                        <TextStyles
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            paragraphTypes="MD-1.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                        >
                            0
                        </TextStyles>
                        <Button
                            content="View Products"
                            type="Plain"
                            onClick={() => navigate('../order/cancelled')}
                        />
                    </FlexLayout>
                </Card>
                <Card extraClass='p-12'>
                    <FlexLayout
                        direction='vertical'
                        spacing='mediumTight'
                        wrap='noWrap'
                    >
                        <FlexLayout
                            halign='fill'
                            valign='center'
                            wrap='noWrap'>
                            <TextStyles
                                fontweight="bold"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="simpleText"
                            >
                                Ready To Ship
                            </TextStyles>
                            {Warning}
                        </FlexLayout>
                        <TextStyles
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            paragraphTypes="MD-1.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                        >
                            0
                        </TextStyles>
                        <Button
                            content="View Products"
                            type="Plain"
                            onClick={() => navigate('../order/ready-to-ship')}
                        />
                    </FlexLayout>
                </Card>
                <Card extraClass='p-12'>
                    <FlexLayout
                        direction='vertical'
                        spacing='mediumTight'
                        wrap='noWrap'
                    >
                        <FlexLayout
                            halign='fill'
                            valign='center'
                            wrap='noWrap'>
                            <TextStyles
                                fontweight="bold"
                                paragraphTypes="MD-1.4"
                                textcolor="dark"
                                type="simpleText"
                            >
                                Refunded
                            </TextStyles>
                            {Refunded}
                        </FlexLayout>
                        <TextStyles
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            paragraphTypes="MD-1.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                        >
                            0
                        </TextStyles>
                        <Button
                            content="View Products"
                            type="Plain"
                            onClick={() => navigate('../order/refunded')}
                        />
                    </FlexLayout>
                </Card>
            </FlexLayout>
        </Card>
    );
};

export default OrderStatus;