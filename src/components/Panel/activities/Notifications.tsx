import { Button, Card, FlexChild, FlexLayout, Modal, Notification as Note, Pagination, Skeleton, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useEffect, useState } from 'react';
import NoActivitity from "../../../assets/images/no-activities.svg";
import { DI, DIProps } from '../../../Core';

export interface Props extends DIProps {
    syncNecessaryInfo: () => void;
    syncConnectorInfo: (props: any, shop_url?: string | null) => void;
}

function Notifications(props: Props) {

    const sourceData = { ...props.redux?.current?.source };
    const targetData = { ...props.redux?.current?.target };

    const necessaryDetails: any = {
        'source': {
            'shopId': sourceData?._id, // shopify shop id
            'marketplace': sourceData?.marketplace // shopify
        },
        'target': {
            'shopId': targetData?._id, // target shop id
            'marketplace': targetData?.marketplace // target
        },
    };

    const [notifications, setNotifications] = useState<any>([]);
    const [pagination, setPagination] = useState({
        activePage: 1,
        count: "10"
    });
    const [totalPage, setTotalPage] = useState(10);
    const [loading, setLoading] = useState(true);
    const [modalloading, setmodalloading] = useState(false);
    const [modal, setModal] = useState(false);
    const [totalNotifications, setTotalNotifications] = useState(0);

    const handleTotalpage = (totalNotifications: number) => {
        let pages = 0;
        if (totalNotifications % parseInt(pagination.count) === 0) {
            pages = totalNotifications / parseInt(pagination.count);
        } else {
            pages = Math.trunc(totalNotifications / parseInt(pagination.count)) + 1;
        }
        setTotalPage(pages);
    };

    const getAllNotifications = () => {
        setLoading(true);
        const data = {
            activePage: pagination.activePage,
            count: pagination.count,
            ...necessaryDetails
        };
        // edit the endpoint according to your requirement
        props.di.POST(`connector/get/allNotifications`, { ...data }).then((e) => {
            if (e.success) {
                setNotifications(e?.data?.rows ?? []);
                setTotalNotifications(e?.data?.count);
                handleTotalpage(e?.data?.count);
            }
            // this is for demo purpose, remove this.
            setNotifications(
                [{
                    "_id": { "$oid": "63b40a5110de4d40003ef412" },
                    "user_id": "636372d8186e6539ed0596c2",
                    "shop_id": "889",
                    "marketplace": "shopify",
                    "appTag": "target_ads",
                    "created_at": "2023-01-03T10:58:25+00:00",
                    "severity": "success",
                    "message": "Products refined successfully",
                    "tag": "target_demo7"
                },
                {
                    "_id": { "$oid": "63b40a321e8c697cd6547e53" },
                    "user_id": "636372d8186e6539ed0596c2",
                    "shop_id": "889",
                    "marketplace": "shopify",
                    "appTag": "target_ads",
                    "created_at": "2023-01-03T10:57:54+00:00",
                    "severity": "success",
                    "message": "62 product(s) imported successfully",
                    "tag": "target_demo7"
                },
                { "_id": { "$oid": "63a40506bbd5402cb867f5d3" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2022-12-22T07:19:34+00:00", "severity": "success", "message": "Products refined successfully", "tag": "target_demo7" }, { "_id": { "$oid": "63a404f6433eec4e7438aad5" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2022-12-22T07:19:18+00:00", "severity": "success", "message": "62 product(s) imported successfully", "tag": "target_demo7" }, { "_id": { "$oid": "63a3fedfbbd5402cb867f5d2" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2022-12-22T06:53:19+00:00", "severity": "success", "message": "Products refined successfully", "tag": "target_demo7" }, { "_id": { "$oid": "63a3fea8433eec4e7438aad3" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2022-12-22T06:52:24+00:00", "severity": "success", "message": "62 product(s) imported successfully", "tag": "target_demo7" }, { "_id": { "$oid": "63a2ee9ff7840a668815cce2" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2022-12-21T11:31:43+00:00", "severity": "success", "message": "Products refined successfully", "tag": "target_demo7" }, { "_id": { "$oid": "63a2ee84c4d0ce2ab242e153" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2022-12-21T11:31:16+00:00", "severity": "success", "message": "62 product(s) imported successfully", "tag": "target_demo7" }, { "_id": { "$oid": "63a2ddf59e6a416e50381234" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2022-12-21T10:20:37+00:00", "severity": "success", "message": "Products refined successfully", "tag": "target_demo7" }, { "_id": { "$oid": "63a2dde27b1d291ce91c7067" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2022-12-21T10:20:18+00:00", "severity": "success", "message": "62 product(s) imported successfully", "tag": "target_demo7" }]
            );
            setTotalNotifications(100);
            setLoading(false);
        });
    };

    useEffect(() => {
        getAllNotifications();
        return () => {
            setNotifications([]);
            setTotalNotifications(0);
        };
    }, [pagination]);

    const handlePagination = (field: string, value: any) => {
        setPagination({ ...pagination, [field]: value });
    };

    const clearAllNotifications = () => {
        setmodalloading(true);
        props.di.GET(`connector/get/clearNotifications`).then((e) => {
            if (e.success) {
                props.success(e.message ?? "Request Unsuccessful");
                getAllNotifications();
            } else {
                props.error(e.message ?? "Request Unsuccessful");
            }
            setModal(false);
            setmodalloading(false);
        });
    };

    return (
        <>
            <Card title="Completed Activities"
                action={
                    <Button
                        content="Clear All Notifications"
                        onClick={() => setModal(true)}
                        type="TextButton"
                    />
                }
            >
                {loading ?
                    <FlexLayout direction='vertical' spacing='loose' wrap='noWrap'>
                        {[1, 2, 3, 4, 5].map((index) => {
                            return (
                                <FlexLayout spacing='loose' wrap='noWrap' valign='start' key={index}>
                                    <Skeleton type='custom' width='20px' height='20px' rounded />
                                    <FlexChild desktopWidth='75' mobileWidth='75' tabWidth='75'>
                                        <FlexLayout direction='vertical' spacing='mediumTight' wrap='noWrap' childWidth='fullWidth'>
                                            <Skeleton type='line' line={1} height="25px" />
                                            <Skeleton type='custom' width='75%' height='20px' />
                                        </FlexLayout>
                                    </FlexChild>
                                </FlexLayout>
                            );
                        })}
                    </FlexLayout>
                    : notifications.length > 0 ?
                        <FlexLayout direction='vertical' spacing='loose'>
                            <div>
                                {notifications.map((noti: any, i: any) => {
                                    return <Note
                                        key={i}
                                        type={noti?.severity == "success" ? "success" : noti?.severity == "critical" ? "warning" :
                                            noti?.severity == "error" ? "danger" : "info"}
                                        destroy={false}
                                        desciption={new Date(noti?.created_at).toUTCString()}>
                                        {/* <p dangerouslySetInnerHTML={{ __html: noti?.message }}></p> */}
                                        {noti?.message}
                                    </Note>;
                                })}
                            </div>
                            {totalPage > 1 &&
                                <div className='custom-shortby'>
                                    <Pagination
                                        totalitem={totalNotifications}
                                        countPerPage={pagination.count}
                                        currentPage={pagination.activePage}
                                        onCountChange={(e) => { handlePagination("count", e); }}
                                        onEnter={(e) => { handlePagination("activePage", e); }}
                                        onNext={() => { handlePagination("activePage", pagination.activePage + 1); }}
                                        onPrevious={() => { handlePagination("activePage", pagination.activePage - 1); }}
                                        optionPerPage={[
                                            {
                                                label: '10',
                                                value: '10'
                                            },
                                            {
                                                label: '15',
                                                value: '15'
                                            },
                                            {
                                                label: '20',
                                                value: '20'
                                            },
                                        ]}
                                        totalPages={totalPage}
                                    />
                                </div>}
                        </FlexLayout> :
                        <div className="pt-30 pb-30">
                            <FlexLayout direction="vertical" halign="center" valign="center">
                                <img src={NoActivitity} alt="No Activities" />
                                <b>No Data Found!</b>
                            </FlexLayout>
                        </div>
                }
            </Card>
            <Modal
                close={() => {
                    setModal(!modal);
                }}
                open={modal}
                heading={`Clear all notifications`}
                modalSize="small"
                primaryAction={{
                    content: 'Yes',
                    loading: modalloading,
                    onClick: clearAllNotifications
                }}
                secondaryAction={{
                    content: 'Cancel',
                    loading: false,
                    onClick: () => setModal(!modal)
                }}
            >
                <FlexLayout spacing='loose'>
                    <TextStyles fontweight="normal">{`Are you sure to clear all notifications?`}</TextStyles>
                </FlexLayout>
            </Modal>
        </>
    );
}

export default DI(Notifications);