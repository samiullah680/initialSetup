import { Card, PageHeader, Tabs } from "@cedcommerce/ounce-ui";
import React, { createContext, useMemo, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { PanelLayout } from "../../layout";
import AccountSettings from "./Components/AccountSettings";
import AdvanceSync from "./Components/AdvanceSync";
import CurrencySettings from "./Components/CurrencySettings";
import { AdvaneSync, Dollar, Inventory, Listing, Market, Order, Password, UserAccount } from "./Components/IconSvg";
import InventoryRules from "./Components/InventoryRules";
import ListingSettings from "./Components/ListingSettings";
import { MarketPlace } from "./Components/MarketPlace";
import OrderManagement from "./Components/OrderManagement";
import PasswordSettings from "./Components/PasswordSettings";
import './Style.css';

export const settingsContext = React.createContext<any>({});

function Configurations(): JSX.Element {

    const navigate = useNavigate();
    const [tab, settab] = useState("marketplace");

    const [config, setConfig] = useState<any>({
        price: {
            group_code: "price",
            data: {
                settings_enabled: false
            }
        },
        inventory: {
            group_code: "inventory",
            data: {
                settings_enabled: false
            }
        },
        product_info: {
            group_code: "product_info",
            data: {
                settings_enabled: false
            }
        },
        product: {
            group_code: "product",
            data: {
                import: {
                    settings_enabled: false
                },
                upload: {
                    settings_enabled: false
                },
                delete: {
                    settings_enabled: false
                }
            }
        },
        price_markup: {
            group_code: "price_markup",
            data: {
                type: "",
                value: ""
                // settings_enabled: false
            }
        },
        threshold: {
            group_code: "threshold",
            data: {
                min_value: "",
                max_value: ""
            }
        },
        order: {
            group_code: "order",
            data: {
                auto_create: {
                    settings_enabled: false
                },
                auto_cancel: {
                    settings_enabled: false,
                    reason: ""
                },
                shipment: {
                    settings_enabled: false
                },
                name_as_id: {
                    settings_enabled: false
                }
            }
        },
        currency: {
            group_code: "currency",
            data: {
                value: ""
            }
        }
    });

    useMemo(() => {
        const selectedTab = window.location.pathname?.split('/')?.[4];
        if (selectedTab && selectedTab != "") {
            settab(selectedTab);
        }
        else {
            settab("marketplace");
        }
    }, []);


    const handleMarketPlaceConfigChange = (con: string, enable: any, extraparam = "") => {
        if (config?.[con]?.data?.settings_enabled != undefined) {
            config[con].data.settings_enabled = enable ?? false;
        }
        setConfig({ ...config });
    };

    const handleListingConfigChange = (con: string, value: any, type: any = "") => {
        if (con === "price_markup" && config?.[con]?.data?.[type] != undefined) {
            config[con].data[type] = value;
        }
        else if (config?.product?.data?.[con]?.settings_enabled != undefined) {
            config.product.data[con].settings_enabled = value;
        }
        setConfig({ ...config });
    };

    const handleInventoryConfigChange = (type: string, value: any) => {
        if (config?.threshold?.data?.[type] != undefined) {
            config.threshold.data[type] = value;
            setConfig({ ...config });
        }
    };

    const handleOrderConfigChange = (con: string, type: string, value: any) => {
        if (config?.order?.data?.[con]?.[type] != undefined) {
            config.order.data[con][type] = value;
        }
        setConfig({ ...config });
    };

    const handleCurrencyConfigChange = (type: string, value: any) => {
        if (config?.currency?.data?.[type] != undefined) {
            config.currency.data[type] = value;
        }
        setConfig({ ...config });
    };

    const Provider = settingsContext.Provider;

    return (
        <>
            <div className="ced-config__settings">
                <PageHeader
                    reverseNavigation
                    sticky
                    title="Settings"
                />
                <Tabs
                    alignment="vertical"
                    selected={tab}
                    onChange={(data) => { settab(data); navigate(data); }}
                    value={[
                        {
                            id: "marketplace",
                            content: "Marketplace settings",
                            icon: (Market),
                        },
                        {
                            id: "listing",
                            content: "Listing settings",
                            icon: (Listing)
                        },
                        {
                            id: "inventory",
                            content: "Inventory rules",
                            icon: (Inventory)
                        },
                        {
                            id: "order",
                            content: "Order management",
                            icon: (Order)
                        },
                        {
                            id: "currency",
                            content: "Currency settings",
                            icon: (Dollar)
                        },
                        {
                            id: "account",
                            content: "Account settings",
                            icon: (UserAccount)
                        },
                        {
                            id: "password",
                            content: "Password settings",
                            icon: (Password)
                        },
                        {
                            id: "advance_sync",
                            content: "Advance Sync",
                            icon: (AdvaneSync)
                        }
                    ]}>
                    <Provider value={{
                        config,
                        handleMarketPlaceConfigChange,
                        handleListingConfigChange,
                        handleInventoryConfigChange,
                        handleOrderConfigChange,
                        handleCurrencyConfigChange
                    }}>
                        <Card cardType="Plain">
                            <Routes>
                                <Route path="marketplace" element={<MarketPlace />} />
                                <Route path="listing" element={<ListingSettings />} />
                                <Route path="inventory" element={<InventoryRules />} />
                                <Route path="order" element={<OrderManagement />} />
                                <Route path="currency" element={<CurrencySettings />} />
                                <Route path="account" element={<AccountSettings />} />
                                <Route path="password" element={<PasswordSettings />} />
                                <Route path="advance_sync" element={<AdvanceSync />} />
                                <Route path="*" element={<Navigate to={'marketplace'} />} />
                            </Routes>
                            {/* {tab === "marketplace" ? <MarketPlace />
                                : tab === "listing" ? <ListingSettings />
                                    : tab === "inventory" ? <InventoryRules />
                                        : tab === "order_management" ? <OrderManagement />
                                            : tab === "currency_settings" ? <CurrencySettings />
                                                : tab === "account_settings" ? <AccountSettings />
                                                    : <PasswordSettings />} */}
                        </Card>
                    </Provider>
                </Tabs>
            </div>
        </>
    );
}

export default Configurations;