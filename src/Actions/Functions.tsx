export function extractCurrentAccount(e: any, shop_url?: string | null) {
    const user_account: any = {
        source: {
            wix: [],
        },
        target: {
            bwp: [],
        },
    };
    if (!process.env.REACT_APP_PROD) {
        user_account['allsource'] = extractSourceShop(e);
    }
    Object.keys(user_account?.source).forEach((element) => {
        const source = extractCurrentSourceShop(e, element);
        // user_account['source'] = source;
        if (Object.keys(source).length > 1) {
            if (element === source['marketplace']) {
                user_account['source'][element] = [source];
            }
            user_account['target'] = exportCurrentTargetShop(
                e,
                user_account['source'][source['marketplace']][0]['_id']
            );
        }
    });
    return user_account;
}

function getFirstSourceMarketPlace(props: any, e: any) {
    let marketplace = '';
    Object.values(e.data)
        .filter(
            (code: any) =>
                typeof code.installed === 'object' &&
                Object.keys(code.installed).length > 0
        )
        .forEach((account: any) => {
            Object.values(account.installed).forEach((acc: any) => {
                if (account?.is_source && account?.installed.length > 0) {
                    if (
                        props.di.globalState.get('shop') !== null &&
                        account?.installed?.[0]?.marketplace ==
                        props.di.globalState.get('shop')
                    ) {
                        marketplace = account?.installed?.[0]?.marketplace;
                    } else {
                        marketplace = account?.installed?.[0]?.marketplace;
                    }
                }
                // check using shopify data
            });
        });
    props.di.globalState.set('shop', marketplace);
    return marketplace;
}

export function extractCurrentSelected(
    props: any,
    e: any,
    shop_url?: string | null
) {
    if (shop_url == '' || shop_url == null) {
        shop_url = getFirstSourceMarketPlace(props, e);
    }
    const current: any = {
        source: extractCurrentSourceShop(e, shop_url), // this need to be dynamic on basis of selected source marketplace
        target: {},
    };
    let target_id: any = null;
    if (props.di.globalState.get('target_id')) {
        target_id = props.di.globalState.get('target_id');
    }
    props.di.globalState.set('source_id', current['source']['_id']);
    const target = exportCurrentTargetShop(e, current['source']['_id']);

    if (Object.keys(target).length > 0) {
        if (Object.values(target[Object.keys(target)[0]]).length > 0) {
            Object.values(target[Object.keys(target)[0]]).map((tAcc: any) => {
                if (tAcc['_id'] == target_id) {
                    current['target'] = tAcc;
                }
            });

            if (!target_id || Object.keys(current['target']).length == 0) {
                current['target'] = Object.values(
                    target[Object.keys(target)[0]]
                )[0];
                props.di.globalState.set('target_id', current['target']['_id']);
            }
        }
    }

    return current;
}

function exportCurrentTargetShop(e: any, shop_id?: any) {
    const user_account_new: any = {
        target: {
            bwp: [],
        },
    };
    Object.values(e.data)
        .filter((code: any) => code.is_target == 1 || code.is_source == 1)
        .filter(
            (code: any) =>
                typeof code.installed === 'object' &&
                Object.keys(code.installed).length > 0
        )
        .forEach((account: any) => {
            Object.values(account.installed).forEach((acc: any) => {
                // check using shopify data
                if (Object.keys(acc.sources ?? {}).length > 0) {
                    Object.values(acc.sources).forEach((acc2: any) => {
                        // check using shopify data
                        if (acc2?.shop_id == shop_id) {
                            user_account_new['target']?.[acc.marketplace]?.push(
                                acc
                            );
                        }
                    });
                }
            });
        });
    return user_account_new['target'];
}
export function extractSourceShop(e: any) {
    const accountShop: any = {};
    Object.values(e.data)
        .filter(
            (code: any) =>
                typeof code.installed === 'object' &&
                Object.keys(code.installed).length > 0
        )
        .forEach((account: any) => {
            Object.values(account.installed).forEach((acc: any) => {
                // check using shopify data
                if (account.is_source == 1) {
                    if (!accountShop[acc['marketplace']]) {
                        accountShop[acc['marketplace']] = [];
                    }
                    accountShop[acc['marketplace']].push(acc);
                }
            });
        });

    return accountShop;
}
export function extractCurrentSourceShop(e: any, marketplace?: string | null) {
    let currentAccountShop: any = {};
    Object.values(e.data)
        .filter(
            (code: any) =>
                typeof code.installed === 'object' &&
                Object.keys(code.installed).length > 0
        )
        .forEach((account: any) => {
            Object.values(account.installed).forEach((acc: any) => {
                // check using shopify data
                if (acc.marketplace === marketplace) {
                    currentAccountShop = acc;
                }
            });
        });

    return currentAccountShop;

}
