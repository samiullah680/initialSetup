import React from 'react';

/**
 * Returns the string with captilize the first letter
 * example => color -- Color
 * @param string
 * @returns
 */
export const capitalizeFirstLetter = (string: string) =>
    string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
/**
 * Returs the string after converting _ to space
 * example => not_uploaded -- Not Uploaded
 * @param value
 * @returns
 */
export const splitAtUnderscore = (value: string) => {
    const newVal = value.split('_');
    const updatedVal = capitalizeFirstLetter(newVal[0]).concat(
        ' ',
        capitalizeFirstLetter(newVal[1])
    );
    return updatedVal;
};

/**
 * Return the color for status
 * All -> new , Listed -> success
 * @param value
 * @returns
 */
export const getStatusColor = (value: string) => {
    switch (value) {
        case 'All':
            return 'new';
        case 'Listed':
            return 'success';
        case 'Not Listed':
            return 'new';
        case 'Deactivated':
            return 'warning';
        case 'Sold Out':
            return 'critical';
        case 'Draft':
            return 'info';
        case 'Expired':
            return 'critical';
    }
};

export const singleActionsOptions = (status: string) => {
    switch (status) {
        case 'Published':
            return [
                { label: 'Deacivate Product', value: 'Deacivate Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
            ];
        case 'Listed':
            return [
                { label: 'Deacivate Product', value: 'Deacivate Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
            ];
        case 'Deactivated':
            return [
                { label: 'Activate Product', value: 'Activate Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
            ];
        case 'Expired':
            return [
                { label: 'Relist Product', value: 'Relist Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
            ];
        case 'Draft':
            return [
                { label: 'Activate Product', value: 'Activate Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
            ];
        case 'Soldout':
            return [{ label: 'Update on Etsy', value: 'Update on Etsy' }];
        case 'Not-Listed':
            return [{ label: 'List Product', value: 'List Product' }];
    }
};

export const massActionsOptions = (status: string) => {
    switch (status) {
        case 'All':
            return [
                { label: 'Deacivate Product', value: 'Deacivate Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
                { label: 'Sync from Shopify', value: 'Sync from Shopify' },
            ];
        case 'Listed':
            return [
                { label: 'Deacivate Product', value: 'Deacivate Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
                { label: 'Sync from Shopify', value: 'Sync from Shopify' },
            ];
        case 'Not Listed':
            return [
                { label: 'Activate Product', value: 'Activate Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
                { label: 'Sync from Shopify', value: 'Sync from Shopify' },
            ];
        case 'Deactivated':
            return [
                { label: 'Relist Product', value: 'Relist Product' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
                { label: 'Sync from Shopify', value: 'Sync from Shopify' },
            ];
        case 'Sold Out':
            return [
                { label: 'Activate Product', value: 'Activate Product' },
                { label: 'Sync from Shopify', value: 'Sync from Shopify' },
                { label: 'Update on Etsy', value: 'Update on Etsy' },
            ];
        case 'Draft':
            return [
                { label: 'Update on Etsy', value: 'Update on Etsy' },
                { label: 'Sync from Shopify', value: 'Sync from Shopify' },
            ];
        case 'Expired':
            return [
                { label: 'List Product', value: 'List Product' },
                { label: 'Export CSV', value: 'Export CSV' },
            ];
    }
};
