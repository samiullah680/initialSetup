import { Button, Card, Notification } from '@cedcommerce/ounce-ui';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { DI } from '../../../../Core';
import { PropsI } from '../../../../Core/@types';
import { Activitiesskeleton } from './Helper';


const Activities = (props: PropsI) => {
    const [notification, setNotification] = useState<any>([]);
    const [notificationLoading, setNotificationLoading] = useState(true);
    const sourceData = { ...props.redux?.current?.source };
    const targetData = { ...props.redux?.current?.target };
    const necessaryDetails: any = {
        source: {
            shopId: sourceData?._id, // shopify shop id
            marketplace: sourceData?.marketplace, // shopify
        },
        target: {
            shopId: targetData?._id, // target shop id
            marketplace: targetData?.marketplace, // target
        },
    };

    const getAllNotifications = () => {
        const data = {
            activePage: 1,
            count: 5,
            ...necessaryDetails,
        };
        const results = props.di.POST('connector/get/allNotifications', { ...data })
            .then((e: any) => {
                if (e?.success) {
                    setNotification(e?.data);
                }
                setNotificationLoading(false);

            })
            .catch((e: any) => {
                props.error('Request Failed');
            });

        // this is for demo purpose, remove it
        setNotification([{ "_id": { "$oid": "63ea3b3c82904b18f1004688" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2023-02-13T13:29:32+00:00", "severity": "success", "message": "Product Import Successfully Completed!", "tag": "target_demo7" }, { "_id": { "$oid": "63ea3b3a63074c72650ef831" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2023-02-13T13:29:30+00:00", "severity": "success", "message": "Products fetched from source catalog, Now being processed to comply with our system requirements.", "tag": "target_demo7" }, { "_id": { "$oid": "63ea0f5482904b18f1004687" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2023-02-13T10:22:12+00:00", "severity": "success", "message": "Product Import Successfully Completed!", "tag": "target_demo7" }, { "_id": { "$oid": "63ea0f5363074c72650ef82f" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2023-02-13T10:22:11+00:00", "severity": "success", "message": "Products fetched from source catalog, Now being processed to comply with our system requirements.", "tag": "target_demo7" }, { "_id": { "$oid": "63b40a5110de4d40003ef412" }, "user_id": "636372d8186e6539ed0596c2", "shop_id": "889", "marketplace": "shopify", "appTag": "target_ads", "created_at": "2023-01-03T10:58:25+00:00", "severity": "success", "message": "Products refined successfully", "tag": "target_demo7" }]);
    };

    useEffect(() => {
        getAllNotifications();
        return () => {
            setNotification([]);
            setNotificationLoading(false);
        };
    }, []);

    return (
        <>
            {notificationLoading ? <Activitiesskeleton /> :
                <Card title={'Activity'}
                    action={<Button disable={notification?.length == 0} content='View all' type='TextButton' onClick={() => props.history('../activities')} />}
                >
                    {notification?.map((item: any, index: number) => {
                        return (
                            <Notification
                                key={index}
                                destroy={false}
                                type={item?.severity == "success" ? "success" : item?.severity == "critical" ? "warning" :
                                    item?.severity == "error" ? "danger" : "info"}
                                desciption={moment(item.created_at).fromNow()}
                            >
                                {item?.message}
                            </Notification>
                        );
                    })}
                </Card>}
        </>
    );
};

export default DI(Activities);