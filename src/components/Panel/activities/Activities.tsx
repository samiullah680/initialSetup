import { Button, FlexLayout, Modal, PageHeader, PagenotFound, Tabs, TextStyles } from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { FileText } from 'react-feather';
import { NoNotification } from "../ErrorPagessvg";
import Notifications from "./Notifications";
import OngoingActivities from "./OngoingActivities";

const Activities = () => {
    const [clear, toggleClear] = useState(true);
    // clear 
    const primaryActionClear = {
        loading: false,
        content: "Yes",
        onClick: () => {
            alert(" Yes:)");
            toggleClear(!clear);
        },
    };
    const secondaryActionClear = {
        content: "Cancel",
        loading: false,
        onClick: () => {
            toggleClear(!clear);
        },
    };
    const [selectedTab, setSelectedTab] = useState<string>("ongoing-activities");

    const TabContents: object[] = [
        {
            content: "Ongoing Activities",
            id: "ongoing-activities",
        },
        {
            content: "Completed Activities",
            id: "completed-activities",
        },
    ];

    const handleTabChange = (id: string) => {
        setSelectedTab(id);
    };

    return (
        <>
            <PageHeader title="Activities"
                action={
                    <FlexLayout spacing="mediumTight" wrap="wrap">
                        <Button icon={<FileText size={16} />} type="Outlined">Guide</Button>
                        <Button type="Primary" onClick={() => toggleClear(!clear)}>Clear Activities</Button>
                    </FlexLayout>
                }
            />

            {/* <Tabs
                alignment="horizontal"
                onChange={(e) => handleTabChange(e)}
                selected={selectedTab}
                value={TabContents}
            >
                {selectedTab === "ongoing-activities" ? <OngoingActivities /> : <Notifications />}
            </Tabs> */}
            <FlexLayout direction="vertical" spacing="loose" wrap="noWrap">
                <OngoingActivities />
                <Notifications />
                <div className='ced-errorpage__hidebutton'>
                    <PagenotFound
                        image={NoNotification}
                        title="No Notification Available"
                        description={
                            <FlexLayout direction='vertical' spacing='extraTight' wrap='noWrap'>
                                <TextStyles lineHeight="LH-2.0" textcolor='light' alignment='center'>There is no order found in this page</TextStyles>
                                <p className='inte__text inte-Align--center inte__text--light none inte__font--normal inte__LineHeight--2'>Need help? Read out <a href="#" title='Help Doc'> Help Doc </a> for further details.</p>
                            </FlexLayout>
                        }
                    />
                </div>
            </FlexLayout>
            <Modal
                open={!clear}
                heading={"Clear all notifications"}
                primaryAction={primaryActionClear}
                secondaryAction={secondaryActionClear}
                close={() => {
                    toggleClear(!clear);
                }}
            >
                <TextStyles>Are you sure you want to abort the process?</TextStyles>
            </Modal>
        </>
    );
};

export default Activities;
