import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DI, DIProps } from '../../Core';
import { ShowLogOutScreen } from './Panel/index';
import ScrollToTop from './ScrollToTop';

import {
    Button,
    Card,
    FlexLayout,
    Notification as Note,
    Select,
    TextStyles
} from '@cedcommerce/ounce-ui';
import { StoreDispatcher } from '../..';
import {
    loginStatus,
    syncConnectorInfo,
    syncNecessaryInfo,
    syncProfileInfo,
    syncServices
} from '../../Actions';
import { capitalizeFirstLetter } from './Function';
// import { Menu, SubMenu } from './Panel/Menu';

import { PlusCircle } from 'react-feather';
import { PanelLayout } from '../layout';
import Activities from './activities/Activities';
import Configurations from './Configurations/Configurations';
import Dashboard from './Dashboard/Dashboard';
import Faq from './help/Faq';
import Order from './order/Order';
import ReturnViewOrders from './order/OrderReturn/components/ReturnViewOrders';
import OrderReturn from './order/OrderReturn/OrderReturn';
import OrderView from './order/OrderView';
import Pricing from './pricing/Pricing';
import ProductEdit from './products/EditProduct/ProductEdit';
import ProductListing from './products/Listing';
import Products from './products/productListing/Products';
import Create from './profile/Create';
import ProfileGrid from './profile/ProfileGrid';
// import { PanelHeader } from '../shared';
export interface PanelProps extends DIProps {
    name?: string;
    syncNecessaryInfo: () => void;
    syncConnectorInfo: (props: any, shop_url?: string | null) => void;
    syncProfileInfo: () => void;
    loginStatus: () => void;
    syncServices: () => void;
}

function Panel(props: PanelProps): JSX.Element {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    const dispatcher = useContext(StoreDispatcher);
    const { LOGIN_STATUS = { status: 'LOGIN' } } = props.redux;
    const [navigateKeyPress, setNavigateKeyPress] = useState<any>(null);

    useEffect(() => {
        dispatcher({
            type: 'user_id',
            state: {
                user_id: props.match.uId,
            },
        });
        con();
    }, [props.match.uId, props.di.globalState.get('shop')]);

    // handle key press and navigate accordingly

    useEffect(() => {
        document.addEventListener('keydown', (event: any) => {
            if (event.target.tagName == 'INPUT') {
                return true;
            } else {
                setNavigateKeyPress(event.key.toUpperCase());
            }
        });
    }, []);

    useMemo(() => {
        switch (navigateKeyPress) {
            case "D": props.history('dashboard'); break;
            case "P": props.history('product-listing'); break;
            case "T": props.history('profile'); break;
            case "S": props.history('settings'); break;
            case "H": props.history('faq'); break;
            case "N": props.history('activities'); break;
            case "O": props.history('order'); break;
            case "M": props.history('pricing'); break;
        }
    }, [navigateKeyPress]);

    // if (LOGIN_STATUS.status === 'LOGOUT') {
    //     return <ShowLogOutScreen {...props} {...LOGIN_STATUS} />;
    // }

    function con(): void {
        /****  pause for now, if we need step data data on redux level, un-comment it /****/
        // props.syncNecessaryInfo(); //ADD AWAIT DURING PRODUCTION

        const shop = props.di.globalState.get(`shop`);
        // myshopify_domain: "gaurav-fb.myshopify.com"
        props.syncConnectorInfo(props, shop); //Don't add AWAIT DURING PRODUCTION

        /****  pause for now, if we need profile data on redux level, un-comment it /****/
        // props.syncProfileInfo();

        /****  pause for now, if we need services data on redux level, un-comment it /****/
        //props.syncServices();
        setHasBeenCalled(true);
    }

    let BodyRender = null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function onChange(e: any): void {
        if (e.path.includes('https:')) window.open(e.path);
        else props.history(e.path);
    }

    function getCurrentPath(path: string) {
        const newpAth = '/' + path.split('/')[1] + '/' + path.split('/')[3];
        return newpAth;
    }

    // if (stepStatus !== '_COMPLETED_') {
    //     BodyRender = (
    //         // <Onboarding
    //         //     updateStepStatus={updateStepStatus}
    //         //     setGeneralData={setGeneralData}
    //         // />
    //         <>Onboarding steps rendering...</>
    //     );
    // } else {
    BodyRender = renderApp();
    // }

    // return (
    //     <>
    //         {hasBeenCalled && props.redux?.loaded ? (
    //             BodyRender
    //         ) : (
    //             <Loader title="" />
    //         )}
    //     </>
    // );

    return BodyRender;

    function renderApp(): JSX.Element {
        return (
            <>
                {/* <NewSidebar
                    subMenu={SubMenu}
                    path={getCurrentPath(props.location.pathname)}
                    menu={Menu}
                    onChange={(e: Event) => onChange(e)}
                /> */}
                <PanelLayout>
                    {renderRoutes()}
                </PanelLayout>
            </>
        );
    }
    function renderRoutes(): JSX.Element {
        return (
            <ScrollToTop>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="profile" element={<ProfileGrid />} />
                    <Route path="create-profile" element={<Create />} />
                    <Route path="product-listing/*" element={<ProductListing />} />
                    <Route path="product-edit/:P_ID/*" element={<ProductEdit />} />
                    <Route path="products" element={<Products />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="orders/*" element={<Order />} />
                    <Route path="return/*" element={<OrderReturn />} />
                    <Route path="return-order/*" element={<ReturnViewOrders />} />
                    <Route path="orders-view/*" element={<OrderView />} />
                    <Route path="settings/*" element={<Configurations />} />
                    {/* <Route path="settings/*" element={<Settings />} /> */}
                    <Route path="faq" element={<Faq />} />
                    <Route path="activities" element={<Activities />} />
                    <Route
                        path="*"
                        element={
                            <Card>
                                <FlexLayout
                                    direction="vertical"
                                    halign="center"
                                    spacing="extraLoose">
                                    <TextStyles fontweight="extraBold">
                                        Page Not Found
                                    </TextStyles>
                                    <Button onClick={() => props.history(-1)}>
                                        Go Back
                                    </Button>
                                </FlexLayout>
                            </Card>
                        }
                    />
                </Routes>
            </ScrollToTop>
        );
    }
}

export function renderSourceSelectionAction(
    props: PanelProps,
    dispatcher: any
): any {
    let allSources: any = [];
    if (Object.keys(props.redux?.account?.source ?? []).length > 0) {
        allSources = props.redux?.account?.source;
    }
    if (Object.keys(allSources).length > 0) {
        const currentValue = props.redux?.current?.source?.marketplace ?? '';
        allSources = Object.values(allSources)
            .filter((e: any) => e[0] && e[0]['marketplace'])
            .map((e: any) => {
                return {
                    label: (
                        <div className="custom-selector">
                            <FlexLayout valign="center" spacing="none">
                                <img
                                    src={
                                        ""
                                    }
                                />
                                <TextStyles>
                                    {capitalizeFirstLetter(
                                        e?.[0]?.['marketplace'] ?? ''
                                    )}
                                </TextStyles>
                            </FlexLayout>
                        </div>
                    ),
                    value: e[0]['marketplace'],
                };
            });
        allSources.push({
            label: (
                <button
                    className="action-btn"
                    onClick={() => {
                        props.history('config/new-account');
                    }}>
                    <PlusCircle size={16} />
                    <TextStyles>Add Account</TextStyles>
                </button>
            ),
            value: '',
        });
        return (
            <div className="custom-shortby">
                <Select
                    popoverContainer="element"
                    thickness="thick"
                    options={allSources}
                    value={currentValue}
                    onChange={(e: any) => {
                        if (e !== props.di.globalState.get('shop') && e != '') {
                            props.di.globalState.set('shop', e);
                            dispatcher({
                                type: 'user_id',
                                state: {
                                    shop: e,
                                    loaded: false,
                                },
                            });
                            props.history('loading');
                            props.history(-1);
                        }
                    }}
                />
            </div>
        );
    }
    return null;
}

export default DI(Panel, {
    func: {
        syncNecessaryInfo,
        syncConnectorInfo,
        syncProfileInfo,
        loginStatus,
        syncServices,
    },
});
