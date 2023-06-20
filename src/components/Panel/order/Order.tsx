import {
  AdvanceFilter,
  Badge,
  Button,
  Card,
  Datepicker,
  FlexLayout,
  FormElement,
  Grid,
  Modal,
  PageHeader,
  Pagination,
  Select,
  Tabs,
  TextField,
  TextStyles,
  ToolTip
} from "@cedcommerce/ounce-ui";
import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Filter, Search } from "react-feather";
import { useNavigate } from "react-router-dom";
import { DI } from "../../../Core";
import { PropsI } from "../../../Core/@types";

let copyTime: ReturnType<typeof setTimeout>;

const Orders = (props: PropsI) => {

  const [flag, setFlag] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("All");
  const [dateFilter, setDateFilters] = useState<any>({
    from: "",
    to: ""
  });

  const [dateValue, setDateValue] = useState("");
  const [calendarModal, setCalendarmodal] = useState<boolean>(false);
  const [fetchModal, setFetchmodal] = useState<boolean>(false);
  const navigate = useNavigate();

  const [pagination, setPagination] = useState<any>({
    activePage: 1,
    count: "10"
  });

  const [copied, setCopied] = useState<any>({});
  const [fetchOrderId, setFetchOrderId] = useState<string>('');

  const tabs = [
    {
      badge: true,
      customBgColors: '#6EB7FF',
      badgeContent: '20',
      badgeTextColor: 'light',
      content: 'All',
      id: 'all'
    },
    {
      badge: true,
      customBgColors: '#b3faaf',
      badgeContent: '20',
      badgeTextColor: 'dark',
      content: 'Completed',
      id: 'completed'
    },
    {
      badge: true,
      customBgColors: '#8ee392',
      badgeContent: '20',
      badgeTextColor: 'dark',
      content: 'Fulfilled',
      id: 'fulfilled'
    },
    {
      badge: true,
      customBgColors: '#afdffa',
      badgeContent: '20',
      badgeTextColor: 'dark',
      content: 'Refunded',
      id: 'refunded'
    },
    {
      badge: true,
      customBgColors: '#fee6ae',
      badgeContent: '20',
      badgeTextColor: 'dark',
      content: 'Pending',
      id: 'pending'
    },
    {
      badge: true,
      customBgColors: '#ffe558',
      badgeContent: '20',
      badgeTextColor: 'dark',
      content: 'Ready To Ship',
      id: 'ready-to-ship'
    },
    {
      badge: true,
      customBgColors: '#ff8a65',
      badgeContent: '20',
      badgeTextColor: 'dark',
      content: 'Cancelled',
      error: true,
      id: 'cancelled'
    },
  ];



  const columns = [
    {
      title: 'Target Order ID	',
      dataIndex: 'target_order_id',
      width: 250,
      visible: true,
      align: "center"
    },
    {
      title: 'Source Order Id',
      dataIndex: 'source_order_id',
      width: 300,
      align: "center",
      visible: true,
    },
    {
      title: 'Full Name',
      dataIndex: 'full_name',
      width: 250,
      visible: true,
      align: "center"
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: 250,
      visible: true,
      align: "center",
    },
    {
      title: 'Order Status',
      dataIndex: 'order_status',
      width: 250,
      visible: true,
      align: "center",
    },
    {
      title: 'Order Total',
      dataIndex: 'order_total',
      width: 250,
      visible: true,
      align: "center",
    },
    {
      title: 'Inventory',
      dataIndex: 'inventory',
      width: 200,
      visible: true,
      align: "center",
    }
  ];


  // handle copy order id activity

  const handleCopiedValues = (value: any, index: any) => {
    navigator.clipboard.writeText(value);
    setCopied({ [index]: true });
    clearTimeout(copyTime);
    copyTime = setTimeout(() => {
      setCopied({});
    }, 2000);
  };

  useEffect(() => {
    return clearTimeout(copyTime);
  }, []);


  const rows = [
    {
      source_order_id: <Button type="TextButton" onClick={OrderView}>1230987</Button>,
      inventory: 32,
      full_name: "Mike",
      target_order_id: <FlexLayout valign="center" halign="center" spacing="extraTight">
        <Button type="TextButton" onClick={OrderView}>1987650</Button>
        {copied[0] ? <ToolTip open={true} helpText={"copied!"} position="right">
          <Button type="Plain" icon={<Check size={18} color="green" />} iconAlign="right" />
        </ToolTip> :
          <Button type="Plain" onClick={() => { handleCopiedValues("1987650", 0); }} icon={<Copy size={18} color="black" />} iconAlign="right" />
        }
      </FlexLayout>,
      order_total: '$1',
      key: "1",
      date: "07/02/2023",
      order_status: <Badge type="Warning-100">Pending</Badge>
    },
    {
      source_order_id: <Button type="TextButton" onClick={OrderView}> 12453</Button>,
      inventory: 42,
      target_order_id: <FlexLayout valign="center" halign="center" spacing="extraTight">
        <Button type="TextButton">1987651</Button>
        {copied[1] ? <ToolTip open={true} helpText={"copied!"} position="right">
          <Button type="Plain" icon={<Check size={18} color="green" />} iconAlign="right" />
        </ToolTip> :
          <Button type="Plain" onClick={() => { handleCopiedValues("1987651", 1); }} icon={<Copy size={18} color="black" />} iconAlign="right" />
        }
      </FlexLayout>,
      full_name: "John",
      order_total: '$2',
      key: "2",
      date: "07/02/2023",
      order_status: <Badge type="Warning-200">Ready To Ship</Badge>
    },
    {
      source_order_id: <Button type="TextButton"> 98745</Button>,
      inventory: 32,
      target_order_id: <FlexLayout valign="center" halign="center" spacing="extraTight">
        <Button type="TextButton">1987652</Button>
        {copied[2] ? <ToolTip open={true} helpText={"copied!"} position="right">
          <Button type="Plain" icon={<Check size={18} color="green" />} iconAlign="right" />
        </ToolTip> :
          <Button type="Plain" onClick={() => { handleCopiedValues("1987652", 2); }} icon={<Copy size={18} color="black" />} iconAlign="right" />
        }
      </FlexLayout>,
      full_name: "Mike",
      order_total: '$3',
      key: "3",
      date: "07/02/2023",
      order_status: <Badge type="Warning-200">Ready To Ship</Badge>
    },
    {
      source_order_id: <Button type="TextButton"> 564537</Button>,
      inventory: 42,
      target_order_id: <FlexLayout valign="center" halign="center" spacing="extraTight">
        <Button type="TextButton">1987653</Button>
        {copied[3] ? <ToolTip open={true} helpText={"copied!"} position="right">
          <Button type="Plain" icon={<Check size={18} color="green" />} iconAlign="right" />
        </ToolTip> :
          <Button type="Plain" onClick={() => { handleCopiedValues("1987653", 3); }} icon={<Copy size={18} color="black" />} iconAlign="right" />
        }
      </FlexLayout>,
      full_name: "John",
      order_total: '$4',
      key: "4",
      date: "07/02/2023",
      order_status: <Badge type="Warning-200">Ready To Ship</Badge>
    },
    {
      source_order_id: <Button type="TextButton"> 4243556</Button>,
      inventory: 32,
      target_order_id: <FlexLayout valign="center" halign="center" spacing="extraTight">
        <Button type="TextButton">1987654</Button>
        {copied[4] ? <ToolTip open={true} helpText={"copied!"} position="right">
          <Button type="Plain" icon={<Check size={18} color="green" />} iconAlign="right" />
        </ToolTip> :
          <Button type="Plain" onClick={() => { handleCopiedValues("1987654", 4); }} icon={<Copy size={18} color="black" />} iconAlign="right" />
        }
      </FlexLayout>,
      full_name: "Mike",
      order_total: '$5',
      key: "5",
      date: "07/02/2023",
      order_status: <Badge type="Warning-200">Ready To Ship</Badge>
    },
    {
      source_order_id: <Button type="TextButton"> 9872143</Button>,
      inventory: 42,
      target_order_id: <FlexLayout valign="center" halign="center" spacing="extraTight">
        <Button type="TextButton">1987655</Button>
        {copied[5] ? <ToolTip open={true} helpText={"copied!"} position="right">
          <Button type="Plain" icon={<Check size={18} color="green" />} iconAlign="right" />
        </ToolTip> :
          <Button type="Plain" onClick={() => { handleCopiedValues("1987655", 5); }} icon={<Copy size={18} color="black" />} iconAlign="right" />
        }      </FlexLayout>,
      full_name: "John",
      order_total: '$6',
      key: "6",
      date: "07/02/2023",
      order_status: <Badge type="Warning-200">Ready To Ship</Badge>
    },
  ];

  const paginationOptions = [
    {
      label: "10",
      value: "10",
    },
    {
      label: "15",
      value: "15",
    },
    {
      label: "20",
      value: "20",
    },
    {
      label: "25",
      value: "25",
    },
    {
      label: "50",
      value: "50",
    },
  ];

  const dateOptions = [
    { label: "Today", value: "today" },
    { label: "Past 7 days", value: "thisWeek" },
    { label: "Past 1 month", value: "thisMonth" },
    { label: "Past 1 year", value: "thisYear" },
    { label: "Custom", value: "custom" },
  ];

  useEffect(() => {
    setTimeout(() => setFlag(!flag), 2000);
  }, []);

  useMemo(() => {
    const selectedTab = window.location.pathname?.split('/')?.[4];
    const allTabs = tabs.map(tb => { return tb.id; });
    if (selectedTab && selectedTab != "" && allTabs.includes(selectedTab)) {
      setTab(selectedTab);
    }
    else {
      setTab("all");
    }
  }, [window.location.href]);

  function OrderView(id = "1") {
    props.history("../orders-view/" + id);
  }

  const renderCalendarModal = () => {
    return <Modal
      open={calendarModal}
      close={() => { setCalendarmodal(false); setDateValue(""); }}
      heading={`Select date`} modalSize="medium"
      primaryAction={{
        content: 'Submit',
        onClick: () => { console.log(dateFilter, 'dfdf'); }
      }}
      secondaryAction={{
        content: 'Cancel',
        onClick: () => { setCalendarmodal(false); setDateValue(""); }
      }}>
      <Card>
        <FormElement horizontal>
          <Datepicker
            value={dateFilter['from']}
            onChange={(e: any) => {
              dateFilter['from'] = e;
              setDateFilters({ ...dateFilter });
            }}
          />
          <Datepicker
            value={dateFilter['to']}
            onChange={(e: any) => {
              dateFilter['to'] = e;
              setDateFilters({ ...dateFilter });
            }}
          />
        </FormElement>
      </Card>
    </Modal>;
  };

  const renderFetchOrderModal = () => {
    return <Modal
      open={fetchModal}
      close={() => { setFetchmodal(false); setFetchOrderId(""); }}
      heading={`Fetch Order using order ID`} modalSize="medium"
      primaryAction={{
        content: 'Fetch',
        onClick: () => { console.log(fetchOrderId, '-order id'); }
      }}
      secondaryAction={{
        content: 'Cancel',
        onClick: () => { setFetchmodal(false); setFetchOrderId(""); }
      }}>
      <Card>
        <FormElement horizontal={false}>
          <TextStyles>
            Enter Order Id:
          </TextStyles>
          <TextField autoFocus value={fetchOrderId} onChange={(e) => setFetchOrderId(e)} placeHolder="Order Id" innerPreIcon={<Search />} />
        </FormElement>
      </Card>
    </Modal>;
  };

  const handlePagination = (field: string, value: any) => {
    setPagination((prevState: any) => ({ ...prevState, [field]: value }));
  };

  return (
    <>
      <PageHeader
        title="Orders"
        action={
          <Button halign="Center" thickness="thin" type="Primary" onClick={() => setFetchmodal(true)}> Fetch Order </Button>
        }
      />
      <Tabs
        alignment="horizontal"
        onChange={(e) => {
          //  setTab(e);
          navigate(e);
        }}
        selected={tab}
        value={tabs}
      >
        <Card extraClass="pl-30" cardType="Shadowed">
          <FlexLayout spacing="loose">
            <TextField placeHolder="Order Id" suffix={<Search />} />
            <AdvanceFilter
              filters={[
                {
                  children:
                    <Select
                      key={"1"}
                      value={dateValue}
                      options={dateOptions}
                      thickness="thin"
                      onChange={(e) => { setDateValue(e); if (e === "custom") setCalendarmodal(true); }}
                    />,
                  name: 'Date'
                },
                {
                  children:
                    <FlexLayout direction="vertical" spacing="loose">
                      <TextField placeHolder="from" name="Minimum quantity" />
                      <TextField placeHolder="to" name="Maximum quantity" />
                    </FlexLayout>
                  ,
                  name: 'Quantity'
                },
                {
                  children:
                    <FlexLayout direction="vertical" spacing="loose">
                      <TextField placeHolder="from" name="Minimum price" />
                      <TextField placeHolder="to" name="Maximum price" />
                    </FlexLayout>
                  ,
                  name: 'Price'
                },
              ]}
              icon={<Filter />}
            />
          </FlexLayout>
          <div className="mt-15"></div>
          <Grid
            scrollY={true}
            columns={[...columns].filter(col => col?.visible)}
            dataSource={rows}
            // tableLayout="fixed"
            scrollX={800}
          />
          <div className="mt-15"></div>
          <Pagination
            totalitem={500}
            countPerPage={pagination.count}
            currentPage={pagination.activePage}
            onCountChange={(e) => { setPagination((prevState: any) => ({ ...prevState, activePage: 1 })); handlePagination("count", e); }}
            onEnter={(e) => { handlePagination("activePage", e); }}
            onNext={() => { handlePagination("activePage", pagination.activePage + 1); }}
            onPrevious={() => { handlePagination("activePage", pagination.activePage - 1); }}
            optionPerPage={paginationOptions}
            totalPages={50}
          />
        </Card>
      </Tabs>
      {renderCalendarModal()}
      {renderFetchOrderModal()}
    </>
  );
};
export default DI(Orders);
