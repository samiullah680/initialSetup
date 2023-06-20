import { Button, Popover } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react';
import { Edit, Eye, MoreVertical } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const CreatePopOver = (key: any) => {
    const [PopoverEnable, setPopoverEnable] = useState(-1);
    const navigate = useNavigate();
    return (
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
                    icon={<Edit size={20} />}
                    onClick={() => navigate('../product-edit/1/')}
                >
                    Edit Listing
                </Button>

                <Button
                    type="Outlined"
                    length="fullBtn"
                    halign="Start"
                    icon={<Eye size={20} />}
                    onClick={() => navigate('../product-edit/1/')}
                >
                    View Listing
                </Button>
            </div>
        </Popover>
    );
};

export default CreatePopOver;