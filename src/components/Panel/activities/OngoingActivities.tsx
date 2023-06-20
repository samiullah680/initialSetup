import { Button, Card, FlexChild, FlexLayout, Modal, Progressbar, Skeleton, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useEffect, useState } from 'react';
import NoActivitity from "../../../assets/images/no-activities.svg";
import { DI, DIProps } from '../../../Core';
import { capitalizeFirstLetter } from '../Function';

export interface Props extends DIProps {
    syncNecessaryInfo: () => void;
    syncConnectorInfo: (props: any, shop_url?: string | null) => void;
}

function OngoingActivities(props: Props) {
    const sourceData = { ...props.redux?.current?.source };
    const targetData = { ...props.redux?.current?.target };

    const necessaryDetails: any = {
        'source': {
            'shopId': sourceData?._id, // source shop id
            'marketplace': sourceData?.marketplace // shopify
        },
        'target': {
            'shopId': targetData?._id, // target shop id
            'marketplace': targetData?.marketplace // target
        },
    };

    const [open, setopen] = useState(false);
    const initialAbortData = {
        feed_id: "",
        shop_id: "",
        marketplace: "",
        // send_notification: true,
        message: "Your process has been aborted.",
        severity: "critical"
    };
    const [pageLoading, setPageLoading] = useState<boolean>(true);
    const [queuedTasks, setQueuedTasks] = useState<any>([]);
    const [abortIdData, setAbortIdData] = useState<any>({
        ...initialAbortData
    });
    const [abortLoading, setAbortLoading] = useState<any>({});

    const abortRunningProgress = () => {
        const data = {
            ...abortIdData
        };
        setAbortLoading({ ...abortLoading, [abortIdData['feed_id']]: true });
        //change the endpoint as per your requirement.
        props.di.POST(`connector/get/feedAbort`, { ...data }).then((e) => {
            if (e.success) {
                props.success(e?.message ?? "Request successful");
                getAllQueuedTasks();
            } else {
                props.error(e?.message ?? "Request unsuccessful");
            }
            setAbortIdData({ ...initialAbortData }); setopen(false);
            setAbortLoading({ ...abortLoading, [abortIdData['feed_id']]: false });
        });
    };

    const getAllQueuedTasks = () => {
        // change endpoint as per your requirement
        props.di.POST("connector/get/allQueuedTasks", { ...necessaryDetails }).then((e) => {
            if (e.success) {
                setQueuedTasks(e.data?.rows);
            }
            setPageLoading(false);

            // this is for demo purpose, remove this.
            setQueuedTasks([{ "_id": { "$oid": "63ea0f4102edb13af17f2fb2" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "process_code": "product_import", "progress": 1, "created_at": "2023-02-13T10:21:53+00:00", "message": "SHOPIFY_PRODUCT_IMPORT : Product(s) import Request is accepted by Shopify.", "tag": "target_demo7", "updated_at": "2023-02-13 10:21:58" }]);
        });
    };

    useEffect(() => {
        getAllQueuedTasks();
        return () => {
            setAbortIdData({ ...initialAbortData });
            setAbortLoading({});
            setopen(false);
        };
    }, []);


    const handleAbortData = (abortData: any) => {
        setAbortIdData({ ...abortIdData, feed_id: abortData?._id?.$oid, shop_id: abortData?.shop_id, marketplace: abortData?.marketplace });
    };

    return (
        <>
            <Card title="Ongoing Activities" >
                {pageLoading ?
                    <FlexLayout spacing='loose' wrap='noWrap' direction='vertical'>
                        <FlexChild desktopWidth='75' mobileWidth='75' tabWidth='75'>
                            <FlexLayout direction='vertical' spacing='mediumTight' wrap='noWrap' childWidth='fullWidth'>
                                <Skeleton type='line' line={1} height="25px" />
                                <Skeleton type='custom' width='75%' height='20px' />
                            </FlexLayout>
                        </FlexChild>
                        <Skeleton type='line' line={1} height="25px" />
                    </FlexLayout>
                    :
                    <FlexLayout direction="vertical" spacing="extraLoose">
                        {queuedTasks.length > 0 ? queuedTasks.map((task: any, index: any) => {
                            return <FlexLayout
                                key={index}
                                direction="vertical"
                                wrap="noWrap"
                                spacing="loose">
                                <FlexLayout halign="fill" valign="center" spacing="loose">
                                    <FlexLayout direction='vertical' spacing='mediumTight' wrap='noWrap'>
                                        <TextStyles fontweight='bold'>{capitalizeFirstLetter(task?.message.replace(/_/gi, ' '))}</TextStyles>
                                        <TextStyles textcolor="light">{new Date(task?.created_at).toUTCString()}</TextStyles>
                                    </FlexLayout>
                                    {/* <Button
                                        thickness="thin"
                                        type="DangerOutlined"
                                        loading={abortLoading?.[abortIdData?.feed_id] ?? false}
                                        onClick={() => {
                                            handleAbortData(task);
                                            setopen(true);
                                        }}>
                                        Abort Process
                                    </Button> */}
                                </FlexLayout>
                                <Progressbar
                                    progessThickness="thin"
                                    percentage={task?.progress ?? 0} />
                                {/* <TextStyles textcolor="light">70 of 100 uploaded</TextStyles> */}
                            </FlexLayout>;
                        }) :
                            <div className="pt-30 pb-30">
                                <FlexLayout direction="vertical" halign="center" valign="center">
                                    <img src={NoActivitity} alt="No Activities" />
                                    <b>No Data Found!</b>
                                </FlexLayout>
                            </div>
                        }
                    </FlexLayout>
                }
            </Card>
            <Modal
                open={open}
                close={() => { setAbortIdData({ ...initialAbortData }); setopen(false); }}
                heading={"Abort Process"}
                primaryAction={{
                    content: "Abort",
                    type: "Danger",
                    thickness: "thin",
                    loading: abortLoading?.[abortIdData?.feed_id] ?? false,
                    onClick: abortRunningProgress
                }}
                secondaryAction={{
                    content: "Cancel",
                    type: "Outlined",
                    thickness: "thin",
                    onClick: () => { setAbortIdData({ ...initialAbortData }); setopen(false); }
                }}>
                <FlexLayout
                    direction="vertical"
                    wrap="noWrap"
                    spacing="loose">
                    <TextStyles>
                        Are you sure you want to abort the process?
                    </TextStyles>
                    <TextStyles textcolor="light">
                        {`${abortIdData?.marketplace == "shopify" ? "Product import" : "Product upload"} is in progress, and it will take time to complete. You can abort the process at any time.`}
                    </TextStyles>
                </FlexLayout>
            </Modal>
        </>
    );
}



export default DI(OngoingActivities);