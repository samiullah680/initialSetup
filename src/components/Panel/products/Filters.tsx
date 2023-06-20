import { AdvanceFilter, AutoComplete, Button, CheckBox, Filter, FlexChild, FlexLayout, Popover, Select, Tag, TextField } from '@cedcommerce/ounce-ui';
import React, { useEffect, useState } from 'react';
import { Filter as FilterIcon, Search } from 'react-feather';


function Filters(props: any): JSX.Element {

    const [appliedFiltersBadges, setAppliedFiltersBadges] = useState<any>({});
    const [allAPIOptions, setallAPIOptions] = useState<any>({});

    const statusOptions = [
        { label: 'Uploaded', value: 'Uploaded' },
        { label: 'Error', value: 'Error' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Not Listed', value: 'Not Listed' },
    ];
    // const vendorSelectionOptions = [
    //     { label: 'Equals', value: '1' },
    //     { label: 'Not Equals', value: '2' },
    //     { label: 'Contains', value: '3' },
    //     { label: 'Does not Contains', value: '4' },
    //     { label: 'Starts With', value: '5' },
    //     { label: 'Ends With', value: '6' },
    // ];

    const [allFilters, setAllFilters] = useState<any>(
        {
            'searchText': {
                label: "Title or Sku",
                value: ['title', 'items.sku'],
                textValue: '',
                selectValue: '3',
                change: false,
                more_filter: false,
            },
            'product_type': {
                label: "Product Type",
                value: 'product_type',
                textValue: '',
                selectValue: '3',
                change: true,
                more_filter: true,
            },
            'vendor': {
                label: "Brand",
                value: 'brand',
                textValue: '',
                selectValue: '1',
                change: true,
                more_filter: true,
            },
            'status': {
                label: "Status",
                value: 'items.status',
                textValue: '',
                selectValue: '1',
                change: true,
                more_filter: true,
            },
            'sortBy': {
                label: "Sort by",
                value: 'sort[title]',
                textValue: '',
                selectValue: '1',
                change: true,
                more_filter: false,
            },
            'profile_id': {
                label: "Template Name",
                value: 'profile.profile_name',
                // textValue: props.templateName ?? '',
                selectValue: '1',
                change: true,
                more_filter: false,
            }
        }
    );

    const [appliedFilters, setAppliedFilters] = useState<any>({});

    // const handleSearchText = (value: string) => {
    //     setSearchText(value);
    // }

    const handleFilters = (val: any, field: string) => {

        allFilters[field]['textValue'] = val;
        // console.log(Object.keys(allFilters).filter((val: any) => allFilters[val].textValue != "").length, 'length');

        setAllFilters({ ...allFilters });
        // setFilters((prevState: any) => ({ ...prevState, [field]: val }));
    };

    const handleApplyButton = () => {
        const appliedFil: any = {};
        Object.keys(allFilters).map((key: any) => {
            if (allFilters[key]['textValue'] != "") {
                appliedFil[key] = { ...allFilters[key] };
            }
        });
        setAppliedFilters({ ...appliedFil });
        setAppliedFiltersBadges({ ...appliedFil });
        // props.handleAppliedFilters({ ...appliedFil });
    };

    const handleEnterFilters = () => {
        const appliedFil: any = {};
        Object.keys(allFilters).map((key: any) => {
            if (allFilters[key]['textValue'] != "" && (key == "searchText" || Object.keys(appliedFilters).includes(key))) {
                appliedFil[key] = { ...allFilters[key] };
            }
        });
        setAppliedFiltersBadges({ ...appliedFil });
        // props.handleAppliedFilters({ ...appliedFil });
    };

    const handleResetFilters = () => {
        const resetFilters: any = { ...allFilters };
        Object.keys(resetFilters).filter((k1: any) => resetFilters[k1]['more_filter']).map((key: string) => {
            resetFilters[key]['textValue'] = "";
        });
        const appliedFil: any = {};
        Object.keys(resetFilters).map((key: any) => {
            if (resetFilters[key]['textValue'] != "") {
                appliedFil[key] = resetFilters[key];
            }
        });
        setAppliedFiltersBadges({ ...appliedFil });
        // props.handleAppliedFilters({ ...appliedFil });
        setAllFilters({ ...resetFilters });
    };

    // const handleFiltersBadges = (field: any, value: any) => {
    //     setAppliedFiltersBadges((prevState: any) => ({ ...prevState, [field]: value }));
    // }

    const handleDestroyFilters = (field: any) => {
        allFilters[field]['textValue'] = "";
        appliedFilters?.[field] && (delete appliedFilters[field]);
        const appliedFil: any = {};
        Object.keys(allFilters).map((key: any) => {
            if (allFilters[key]['textValue'] != "" && (key == "searchText" || Object.keys(appliedFilters).includes(key))) {
                appliedFil[key] = { ...allFilters[key] };
            }
        });
        setAppliedFilters({ ...appliedFilters });
        setAppliedFiltersBadges({ ...appliedFil });
        // props.handleAppliedFilters({ ...appliedFil });
        setAllFilters({ ...allFilters });
    };

    // useEffect(() => {
    //     let data = {
    //         "source": {
    //             "shopId": props?.redux?.current?.source._id,
    //             "marketplace": props?.redux?.current?.source.marketplace
    //         }
    //     }
    //     props.di.POST("connector/source/getFilterAttributes", data).then((response) => {
    //         if (response.success) {
    //             let options: any = {}
    //             response.data.map((data: any) => {
    //                 if (data.code === "brand") {
    //                     options['vendorOptions'] = data.options;
    //                 }
    //                 if (data.code === "product_type") {
    //                     options['productTypeOptions'] = data.options;
    //                 }
    //             })
    //             setallAPIOptions(options)
    //         }
    //     });
    //     const filterTime = setTimeout(() => {
    //         if (allFilters?.profile_id?.textValue != "") {
    //             handleApplyButton();
    //         }
    //     }, 1500);
    //     return () => {
    //         clearTimeout(filterTime);
    //         setallAPIOptions([]);
    //     }
    // }, [])


    return (
        <>
            <FlexLayout spacing='tight' valign='center' >
                <FlexChild desktopWidth="33" tabWidth='33' mobileWidth="100">

                    <TextField
                        // options={[]}
                        name=""
                        onChange={(e: string) => { handleFilters(e, "searchText"); }}
                        // onChange={handleSearchText}
                        // onEnter={() => { props.handleAppliedFilters("searchText", searchText); handleFiltersBadges("searchText", searchText) }}
                        onEnter={() => { handleEnterFilters(); }}
                        showHelp=""
                        thickness="thin"
                        // value={searchText}
                        value={allFilters['searchText']['textValue']}
                        placeHolder="Search by Title or SKU"
                        innerPreIcon={<Search size={20} />}
                    />
                </FlexChild>
                <FlexLayout spacing="tight" childWidth="fullWidth">
                    <AdvanceFilter
                        disableApply={Object.keys(allFilters).filter((val: any) => allFilters[val].textValue != "").length > 0 ? false : true}
                        disableReset={Object.keys(allFilters).filter((val: any) => allFilters[val].textValue != "").length > 0 ? false : true}
                        type='Outlined'
                        button="Filter"
                        icon={<FilterIcon color="#2a2a2a" size={16} />}
                        filters={[
                            {
                                children:
                                    <Select
                                        key={"1"}
                                        value={allFilters["status"]['textValue']}
                                        options={statusOptions}
                                        thickness="thin"
                                        onChange={(e) => { handleFilters(e, "status"); }}
                                    />,
                                //  < Select
                                //     // value={filters.status}
                                //     value = { allFilters['status']['textValue'] }
                                //     options = { statusOptions }
                                //     thickness = "thin"
                                //     onChange = {(e) => {handleFilters(e, "status")}}
                                // />,
                                name: 'Product Status'
                            },
                            {
                                children:
                                    <Select
                                        key={"2"}
                                        disabled={!allAPIOptions?.['vendorOptions'] || allAPIOptions?.['vendorOptions']?.length == 0}
                                        searchEable
                                        // value={filters.vendor}
                                        value={allFilters['vendor']['textValue']}
                                        options={allAPIOptions?.['vendorOptions']}
                                        thickness="thin"
                                        onChange={(e) => {
                                            handleFilters(e, "vendor");
                                        }}
                                        selectHelp={!allAPIOptions?.['vendorOptions'] || allAPIOptions?.['vendorOptions']?.length == 0 ? "No brand(s) found" : ""}
                                    />
                                ,
                                name: 'Brand'
                            },
                            {
                                children:
                                    <Select
                                        key={"3"}
                                        disabled={!allAPIOptions?.['productTypeOptions'] || allAPIOptions?.['productTypeOptions']?.length == 0}
                                        searchEable
                                        value={allFilters['product_type']['textValue']}
                                        options={allAPIOptions?.['productTypeOptions']}
                                        thickness="thin"
                                        onChange={(e) => {
                                            handleFilters(e, "product_type");
                                        }}
                                        selectHelp={!allAPIOptions?.['productTypeOptions'] || allAPIOptions?.['productTypeOptions']?.length == 0 ? "No product type found" : ""}
                                    />
                                ,
                                name: 'Product Type'
                            },
                            {
                                children:
                                    <Select
                                        key={"4"}
                                        searchEable
                                        value={allFilters['profile_id']['textValue']}
                                        options={[]}
                                        // options={props.allProfiles ?? []}
                                        thickness="thin"
                                        onChange={(e) => {
                                            handleFilters(e, "profile_id");
                                        }}
                                    />
                                ,
                                name: 'Template'
                            },
                        ]}
                        heading="Filters"
                    // onApply={handleApplyButton}
                    // resetFilter={handleResetFilters}
                    />
                    {props?.visibleColumns() ?? <></>}

                    {/* <div className='custom-shortbys'>
                        <Select options={[
                            {
                                label: 'Title A-Z',
                                value: '1'
                            },
                            {
                                label: 'Title Z-A',
                                value: '-1'
                            },
                            // {
                            //     label: 'Status',
                            //     value: 'status'
                            // },
                        ]}
                            placeholder="Select"
                            popoverContainer="element"
                            thickness="thin"
                            labelInLine
                            name="Sort By:"
                            // value={sortBy}
                            value={allFilters['sortBy']['textValue']}
                            // onChange={(val) => handleSortBy(val)}
                            onChange={(e) => {
                                handleFilters(e, "sortBy");
                                // handleApplyButton();
                            }}
                        />
                    </div> */}
                </FlexLayout>
            </FlexLayout>
            <div className='mt-15 mb-15'>
                <FlexLayout spacing="loose">
                    {/* {Object.keys(appliedFiltersBadges).map((filter: any) => {
                        if (appliedFiltersBadges[filter].trim() != "") {
                            return (<Tag destroy={() => {
                                handleDestroyFilters(filter);
                            }}>
                                {formatFilters(filter, appliedFiltersBadges[filter])}
                            </Tag>)
                        }
                    }
                    )} */}
                    {Object.keys(appliedFiltersBadges).length > 0 && Object.keys(appliedFiltersBadges).map((filter: any, index: any) => {
                        if (appliedFiltersBadges[filter]['textValue'] != "" && appliedFiltersBadges[filter]['textValue'].trim() != "") {
                            if (filter == "sortBy") {
                                return (<Tag key={index} destroy={() => {
                                    handleDestroyFilters(filter);
                                }}>
                                    {`${appliedFiltersBadges[filter]['label']}: ${appliedFiltersBadges[filter]['textValue'] == "1" ? "Title A-Z" : "Title Z-A"}`}
                                </Tag>);
                            }
                            return (<Tag key={index} destroy={() => {
                                handleDestroyFilters(filter);
                            }}>
                                {`${appliedFiltersBadges[filter]['label']}: ${appliedFiltersBadges[filter]['textValue']}`}
                            </Tag>);
                        }
                    }
                    )}
                </FlexLayout>
            </div>
        </>
    );
}

export default Filters;