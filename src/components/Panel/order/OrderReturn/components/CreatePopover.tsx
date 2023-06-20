import { Button, Modal, Popover, Select, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react';
import { CheckCircle, MoreVertical, XCircle } from 'react-feather';

export function AcceptModal(props: any) {
    return (
        < Modal
            modalSize={props.modalSize}
            open={props.open}
            heading={props.heading}
            primaryAction={props.primaryAction}
            secondaryAction={props.secondaryAction}
            close={props.close}
        >
            <Select
                options={[
                    {
                        label: 'Unmet expectations',
                        value: 'Unmet expectations'
                    },
                    {
                        label: 'Issue in product quality',
                        value: 'Issue in product quality'
                    },
                    {
                        label: 'Damaged or defective products',
                        value: 'Damaged or defective products'
                    },
                    {
                        label: 'Incorrect fit',
                        value: 'Incorrect fit'
                    }
                ]}
                name="Select reason to accept this order return."
                value=""
            />
        </Modal >
    );
}

export function RejectModal(props: any) {
    return (
        <Modal
            modalSize={props.modalSize}
            open={props.open}
            heading={props.heading}
            primaryAction={props.primaryAction}
            secondaryAction={props.secondaryAction}
            close={props.close}
        >
            <TextStyles>Are you sure you want to reject this order return?</TextStyles>
        </Modal>
    );
}
const CreatePopOver = (key: any) => {
    const [PopoverEnable, setPopoverEnable] = useState(-1);
    const [accept, toggleAccept] = useState(true);
    const [reject, toggleReject] = useState(true);
    // Accept 
    const primaryActionAccept = {
        loading: false,
        content: "Accept",
        onClick: () => {
            alert(" Accepted :)");
            toggleAccept(!accept);
        },
    };
    const secondaryActionAccept = {
        content: "Close",
        loading: false,
        onClick: () => {
            toggleAccept(!accept);
        },
    };
    // Reject
    const primaryActionReject: any = {
        loading: false,
        content: "Reject",
        type: "Danger",
        onClick: () => {
            alert(" Rejected :)");
            toggleReject(!reject);
        },
    };
    const secondaryActionReject = {
        content: "Close",
        loading: false,
        onClick: () => {
            toggleReject(!reject);
        },
    };
    return (
        <>
            <Popover
                open={PopoverEnable === key}
                popoverWidth={155}
                onClose={() => {
                    PopoverEnable === key
                        ? setPopoverEnable(-1)
                        : setPopoverEnable(key);
                }}
                activator={
                    <Button
                        icon={<MoreVertical size={20} />}
                        type="Outlined"
                        onClick={() => {
                            PopoverEnable === key
                                ? setPopoverEnable(-1)
                                : setPopoverEnable(key);
                        }}
                    />
                }>
                <div className="custom-popover-action">
                    <Button
                        type="Outlined"
                        length="fullBtn"
                        halign="Start"
                        onClick={() => toggleAccept(!accept)}
                        icon={<CheckCircle size={20} />}
                    >
                        Accept
                    </Button>

                    <Button
                        type="Outlined"
                        length="fullBtn"
                        halign="Start"
                        onClick={() => toggleReject(!reject)}
                        icon={<XCircle size={20} />}
                    >
                        Reject
                    </Button>
                </div>
            </Popover>
            {/* Accept order modal */}
            <AcceptModal modalSize="small"
                open={!accept}
                heading={"Accept Order Return"}
                primaryAction={primaryActionAccept}
                secondaryAction={secondaryActionAccept}
                close={() => {
                    toggleAccept(!accept);
                }} />

            {/* Reject order modal */}
            <RejectModal modalSize="small"
                open={!reject}
                heading={"Reject Order Return"}
                primaryAction={primaryActionReject}
                secondaryAction={secondaryActionReject}
                close={() => {
                    toggleReject(!reject);
                }} />
        </>
    );
};

export default CreatePopOver;