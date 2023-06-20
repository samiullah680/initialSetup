import { Alert, Card, FlexLayout, PageHeader } from '@cedcommerce/ounce-ui';
import { useState } from 'react';
import { PanelLayout } from '../../layout';
import Enterprise from './Enterprise';
import Feature from './Features';
import Monthly from './Monthly';
import './PricingStyle.css';
import Question from './Questions';
import Yearly from './Yearly';

function Pricing(): JSX.Element {
    const [isplan, setIsplan] = useState(false);
    const toggleClass = () => {
        setIsplan(!isplan);
    };
    return (
        <>
            <PageHeader
                title="Pricing"
                description="Avail the free trial for the application and choose the best suited pricing plan for requirement"
            />

            <Alert type="info">
                Some plans may not be available for your account as you are
                exceeding the product limit in those specific plans.
            </Alert>

            <Card extraClass="mt-15">
                <div className="pricing-section">
                    <FlexLayout
                        direction="vertical"
                        wrap="noWrap"
                        spacing="extraLoose">
                        <div
                            className={
                                isplan
                                    ? 'Custom-plan-toggle Active'
                                    : 'Custom-plan-toggle'
                            }
                            onClick={() => {
                                toggleClass();
                            }}>
                            <input
                                className="switch-input switch_plan_chan"
                                id="switch-plan"
                                type="checkbox"
                                name="choiceList"
                            />
                            <span
                                className="switchLable"
                                data-on="Yes"
                                data-off="No"
                            />
                            <span className="switchHandle" />
                            <span className="left-content ">Monthly</span>
                            <span className="right-content">Annualy</span>
                        </div>

                        {isplan ? <Yearly /> : <Monthly />}

                        <hr className="horizontal_line" />

                        <Enterprise />

                        <hr className="horizontal_line" />

                        <Feature />

                        <hr className="horizontal_line" />

                        <Question />
                    </FlexLayout>
                </div>
            </Card>
        </>
    );
}

export default Pricing;
