import { Button, Card, CheckBox, FlexLayout, FormElement, Select, TextField, TextStyles } from '@cedcommerce/ounce-ui'
import { useState } from 'react'
import { DI, DIProps } from '../../Core'
import { BoardingLayout } from '../layout'

function NewOnboarding(props: DIProps) {
    const [apiTextBox, setApiTextBox] = useState("");
    const [clubEnable, setClubEnable] = useState(false);
    const [terms, setTerms] = useState(false);
    return (
        <BoardingLayout>
            <div
                className="mt-30"
                style={{ width: "initial", margin: "auto", maxWidth: "700px" }}
            >
                <Card cardType="Plain" primaryAction={{
                    content: 'Connect With Catch',
                    type: 'Primary',
                    disable: (!clubEnable || !terms)
                }}>
                    {/* <FlexLayout direction="vertical" spacing="mediumTight">
                        <TextStyles
                            alignment="left"
                            fontweight="extraBold"
                            lineHeight="LH-2.4"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="SubHeading"
                            utility="none"
                        >
                            Connect your inventory account
                        </TextStyles>
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            lineHeight="LH-2.0"
                            paragraphTypes="MD-1.4"
                            textcolor="light"
                            type="Paragraph"
                            utility="none"
                        >
                            To enable smart inventory and order management, connect your
                            inventory account to the app.
                        </TextStyles>
                    </FlexLayout> */}
                    <FormElement>
                        <TextField name="Catch API Key (Australia)" value={apiTextBox} placeHolder='Enter here' onChange={setApiTextBox} />
                        <CheckBox checked={clubEnable} labelVal="Catch Club Enable" onClick={() => setClubEnable(prev => !prev)} />
                        <FlexLayout spacing='tight' wrap='noWrap'>
                            <CheckBox checked={terms} labelVal="I agree with terms and conditions" onClick={() => setTerms(prev => !prev)} />
                            <a href="#">Read Here</a>
                        </FlexLayout>
                        {/* <Select
                            name="Select your Data Center"
                            options={[
                                {
                                    label: "1",
                                    value: "in",
                                },
                                {
                                    label: "2",
                                    value: "us",
                                },
                            ]}
                            placeholder="Select your Data Center"
                            popoverContainer="body"
                            position="top"
                            thickness="thin"
                        /> 
                         <hr className="custom-hr mb-15 mt-15" /> 
                        <FlexLayout direction="vertical" spacing="extraLoose">
                            <Button
                                halign="Center"
                                iconAlign="right"
                                length="fullBtn"
                                thickness="large"
                                type="Primary"
                                iconRound={false}
                            >
                                Connect Account
                            </Button>
                            <FlexLayout spacing="extraTight">
                                <TextStyles textcolor="light">{`Don't have account?`}</TextStyles>
                                <Button
                                    halign="Center"
                                    iconAlign="left"
                                    length="none"
                                    thickness="thin"
                                    type="TextButton"
                                >
                                    Register at Target
                                </Button>
                            </FlexLayout>
                        </FlexLayout> */}
                    </FormElement>
                </Card>
            </div>
        </BoardingLayout>
    )
}

export default DI(NewOnboarding)