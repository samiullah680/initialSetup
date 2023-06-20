import { Card, FlexChild, FlexLayout, List, TextField, TextStyles } from '@cedcommerce/ounce-ui';
import { type } from 'os';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

const PasswordSettings = () => {

    const [showpassword, setShowPassword] = useState<any>([
        false,
        false,
        false
    ]);

    const [textvalue, setTextvalue] = useState({
        CurrPassword: '',
        NewPassword: '',
        conNewPassword: ''
    });
    return (
        <Card
            title={'Password Reset'}
            primaryAction={{
                content: 'Save New Password',
                type: 'Primary',
                disable: Object.values(textvalue).includes('') ? true : false
            }}
        >
            <FlexLayout
                direction='vertical'
                spacing='tight'
            >
                <TextField
                    name="Current Password"
                    onChange={(e) => {
                        setTextvalue({ ...textvalue, CurrPassword: e });
                    }}
                    type={showpassword[0] ? 'text' : 'password'}
                    value={textvalue.CurrPassword}
                    innerSufIcon={<span
                        style={{ lineHeight: "0", cursor: 'pointer' }}
                        onClick={() => {
                            const temp = [...showpassword];
                            temp[0] = !temp[0];
                            setShowPassword(temp);
                        }}>
                        {showpassword[0] ? <Eye color='#3B424F' size={20} /> : <EyeOff color='#3B424F' size={20} />}
                    </span>}
                />
                <TextField
                    name="New Password"
                    onChange={(e) => {
                        setTextvalue({ ...textvalue, NewPassword: e });
                    }}
                    type={showpassword[1] ? 'text' : 'password'}
                    value={textvalue.NewPassword}
                    innerSufIcon={<span
                        style={{ lineHeight: "0", cursor: 'pointer' }}
                        onClick={() => {
                            const temp = [...showpassword];
                            temp[1] = !temp[1];
                            setShowPassword(temp);
                        }}>
                        {showpassword[1] ? <Eye color='#3B424F' size={20} /> : <EyeOff color='#3B424F' size={20} />}
                    </span>}
                />
                <FlexChild>
                    <>
                        <TextStyles
                            fontweight="normal"
                            lineHeight="LH-2.0"
                            paragraphTypes="SM-1.3"
                            textcolor="light"
                            type="Paragraph"
                            utility='mb-8'
                        >
                            To create a strong password make sure the password contains:
                        </TextStyles>
                        <List type="disc">
                            <TextStyles textcolor="light" type="Paragraph" paragraphTypes="SM-1.3" lineHeight="LH-2.0">
                                A minimum of 8 characters
                            </TextStyles>
                            <TextStyles textcolor="light" type="Paragraph" paragraphTypes="SM-1.3" lineHeight="LH-2.0">
                                An uppercase and a lowercase letter
                            </TextStyles>
                            <TextStyles textcolor="light" type="Paragraph" paragraphTypes="SM-1.3" lineHeight="LH-2.0">
                                A number
                            </TextStyles>
                            <TextStyles textcolor="light" type="Paragraph" paragraphTypes="SM-1.3" lineHeight="LH-2.0">
                                One special character
                            </TextStyles>
                        </List>
                    </>
                </FlexChild>
                <TextField
                    name="Confirm Password"
                    onChange={(e) => {
                        setTextvalue({ ...textvalue, conNewPassword: e });
                    }}
                    type={showpassword[2] ? 'text' : 'password'}
                    value={textvalue.conNewPassword}
                    placeHolder='Confirm new password'
                    innerSufIcon={<span
                        style={{ lineHeight: "0", cursor: 'pointer' }}
                        onClick={() => {
                            const temp = [...showpassword];
                            temp[2] = !temp[2];
                            setShowPassword(temp);
                        }}>
                        {showpassword[2] ? <Eye color='#3B424F' size={20} /> : <EyeOff color='#3B424F' size={20} />}
                    </span>}
                />
            </FlexLayout>
        </Card>
    );
};

export default PasswordSettings;