import { Alert, Card, FlexLayout, Loader, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropsI } from '../../../src/Core/@types';
import { DI } from '../../Core';


function Confirmation(props: PropsI): JSX.Element {

    const [confirmation, setconfirmation] = useState(true);
    const [message, setmessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const paramsMessage = new URLSearchParams(window.location.search);
        const token = paramsMessage.get("token");
        if (token === null) {
            navigate('/auth/login');
        }
        if (token) {
            props.di.GET("user/verifyuser?token=" + token).then((e) => {
                if (e.success) {
                    navigate('/auth/login');
                } else {
                    props.error(e?.message ?? "Kindly verify again.");
                    setconfirmation(false);
                    setmessage(e?.message ?? "Kindly verify again.");
                    setTimeout(() => {
                        navigate('/auth/login');
                    }, 5000);
                }
            });
        } else {
            props.error("Kindly verify again.");
        }
    }, []);

    const [timer, setTimer] = useState(5);
    useEffect(() => {
        const countdown = setTimeout(() => {
            if (timer !== 0) {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => {
            clearInterval(countdown);
        };
    }, [timer]);

    return (<>
        {confirmation ?
            <FlexLayout halign="center" direction="vertical" spacing="extraLoose">
                <Loader title={"We are verifying your details..."} type="Loader1" />
            </FlexLayout>
            : <div className="mt-30 pt-120 pb-30 inte-onboarding" style={{ width: "initial", margin: "auto", maxWidth: "475px" }}>
                <Card cardType="Shadowed"> <Alert
                    desciption={message}
                    destroy={false}
                    // onClose={() => { }}
                    type="danger"
                >
                    Oops! something went wrong
                </Alert>
                    <FlexLayout halign="center">
                        <TextStyles utility="mt-30">{`You will be autoredirected to Login page in ${timer} seconds`}</TextStyles>
                    </FlexLayout>
                </Card></div>
        }
    </>
    );
}

export default DI(Confirmation);