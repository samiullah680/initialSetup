/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  Button,
  Card,
  ChoiceList,
  FlexChild,
  FlexLayout,
  LRLayout,
  Radio,
  Select,
  Skeleton,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useEffect, useState } from "react";
import { Delete } from "react-feather";
import {
  makeRuleGroupField,
  queryFieldConditions,
} from "../../../utils/globalFunctions";
import { getRuleGroup } from "../dummyData";

const QueryBuilder = (props: any): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [condition, setCondition] = useState("||");
  const [fields, setFields] = useState<any[]>([]);
  const [selectOptions, setSelectOptions] = useState<any>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [productsMatched, setProductsMatched] =
    useState<undefined | number>(undefined);
  const source = props?.source || "bigcommerce";
  const addRow = () => {
    setRows([
      ...rows,
      {
        selectedField: "collection",
        selectedCondition: queryFieldConditions[0].value,
        searchCriteriaChoiceList: [],
        searchCriteriaInput: "",
      },
    ]);
  };

  const deleteRow = (index: number) => {
    const tempRows = [...rows];
    tempRows.splice(index, 1);
    setRows(tempRows);
  };

  //  Method for handling change in any of the following properties of a row selectedFields,selectConditions,or Search Criteria Value
  const changeHandler = (key: string, index: number, val: string | number) => {
    setErrorMsg(false);
    setProductsMatched(undefined);
    const tempRows = [...rows];
    if (key === "fields") {
      tempRows[index].selectedField = val;
      tempRows[index].selectedCondition = "==";
      tempRows[index].searchCriteriaChoiceList = [];
      tempRows[index].searchCriteriaInput = "";
    }
    if (key === "conditions") {
      tempRows[index].selectedCondition = val;
    }
    if (key === "searchCriteriaChoiceList") {
      if (tempRows[index].searchCriteriaChoiceList.includes(val))
        tempRows[index].searchCriteriaChoiceList.splice(
          tempRows[index].searchCriteriaChoiceList.indexOf(val),
          1
        );
      else tempRows[index].searchCriteriaChoiceList.push(val);
    }
    if (key === "searchCriteriaInput") {
      tempRows[index].searchCriteriaInput = val;
    }
    setRows(tempRows);
  };

  // UseEffect for fetching Fields & Corresponding Options and intializing rows
  useEffect(() => {
    setLoading(true);
    const tempFields: any[] = [];
    const tempSelectOptions: any[] = [];
    const tempRows: any[] = [];
    // props.di
    //     .GET('connector/get/getRuleGroup', {
    //         marketplace: source,
    //     })
    //     .then((res:any) => {
    const res = getRuleGroup;
    if (res.success && res.data) {
      res.data.forEach((it: any) => {
        tempFields.push({
          label: it.title,
          value: it.code,
        });
        tempSelectOptions[it.code] =
          source === "magento"
            ? it.options
              ? makeRuleGroupField(it.options)
              : ""
            : it.options || "";
      });
      tempRows.push({
        selectedField: "collection",
        selectedCondition: queryFieldConditions[0].value,
        searchCriteriaChoiceList: [],
        searchCriteriaInput: "",
      });
      setRows(tempRows);
      setSelectOptions(tempSelectOptions);
      setFields(tempFields);
      setLoading(false);
    }
    // });
  }, []);

  // UseEffect for Query Formation every time Rows data change or condition changes
  useEffect(() => {
    setProductsMatched(undefined);
    setErrorMsg(false);
    let flag = false;
    let tempQuery = " ( ";
    if (rows.length) {
      rows.forEach((it, i) => {
        if (i !== 0) tempQuery += ` ${condition} ( `;
        tempQuery +=
          it.selectedField +
          " " +
          it.selectedCondition +
          " " +
          (it.searchCriteriaChoiceList.length
            ? it.searchCriteriaChoiceList
            : it.searchCriteriaInput) +
          " ) ";
        if (
          !it.searchCriteriaChoiceList.length &&
          it.searchCriteriaInput === ""
        )
          flag = true;
      });
    }
  }, [rows, condition]);
  return (
    <>
      <LRLayout
        title="Assign Products to the Template"
        required={true}
        lrHelpText={
          <Alert
            icon={false}
            desciption={
              <div className="mt-15">
                <FlexLayout spacing="loose">
                  <TextStyles>
                    Select <b>Any Condition </b> to fetch the product(s)
                    fulfilling any of the conditions created.
                  </TextStyles>
                  <TextStyles>
                    Select <b>All Condition </b> to fetch the product(s)
                    fulfilling all the conditions created..
                  </TextStyles>
                  <TextStyles>
                    Click on <b>Add More</b> to add multiple conditions in the
                    Rule Group.
                  </TextStyles>
                  <TextStyles>
                    Click on <b>Run Query</b> to fetch the number of the
                    product(s) on the basis of the Rule Group(s) created.
                  </TextStyles>
                </FlexLayout>
              </div>
            }
            type="info"
            destroy={false}
          >
            <TextStyles>
              {`Create Rule Group(s) (query) to fetch a particular set of the product(s) in the current profile.`}
            </TextStyles>
          </Alert>
        }
      >
        {loading ? (
          <Card>
            <Skeleton line={5} type="line" height="30px" />
          </Card>
        ) : (
          <Card title={"Rule Group"}>
            <FlexLayout direction="vertical" spacing="loose">
              <FlexLayout spacing="loose">
                <TextStyles>Product Must Match</TextStyles>
                <FlexLayout spacing="loose">
                  <Radio
                    labelVal="Any Condition"
                    checked={condition === "||"}
                    onClick={() => setCondition("||")}
                  />
                  <Radio
                    labelVal="All Conditions"
                    checked={condition === "&&"}
                    onClick={() => setCondition("&&")}
                  />
                </FlexLayout>
              </FlexLayout>
              {rows.length &&
                rows.map((it, i) => (
                  <FlexLayout childWidth="fullWidth" spacing="loose" key={i}>
                    <FlexChild desktopWidth="33" tabWidth="50" mobileWidth="50">
                      <Select
                        thickness="thin"
                        options={fields}
                        value={it.selectedField}
                        onChange={(val) => changeHandler("fields", i, val)}
                      />
                    </FlexChild>
                    <FlexChild desktopWidth="33" tabWidth="50" mobileWidth="50">
                      <Select
                        thickness="thin"
                        options={
                          it.selectedField === "title"
                            ? queryFieldConditions
                            : queryFieldConditions.slice(0, 2)
                        }
                        value={it.selectedCondition}
                        onChange={(val) => changeHandler("conditions", i, val)}
                      />
                    </FlexChild>
                    <FlexChild
                      desktopWidth="33"
                      tabWidth="100"
                      mobileWidth="100"
                    >
                      <FlexLayout
                        childWidth="fullWidth"
                        spacing="loose"
                        wrap="noWrap"
                        halign="evenly"
                      >
                        <FlexChild
                          desktopWidth={"100"}
                          tabWidth="100"
                          mobileWidth="100"
                        >
                          {selectOptions[it.selectedField]?.length > 0 ? (
                            source === "magento" ||
                              it.selectedField === "type" ? (
                              <Select
                                searchEable
                                thickness="thin"
                                options={selectOptions[it.selectedField]}
                                value={it.searchCriteriaInput}
                                onChange={(val) =>
                                  changeHandler("searchCriteriaInput", i, val)
                                }
                                placeholder={"Select"}
                              />
                            ) : (
                              <ChoiceList
                                searchEable
                                showBadges
                                thickness="thin"
                                options={selectOptions[it.selectedField]}
                                value={it.searchCriteriaChoiceList}
                                onChange={(val) =>
                                  changeHandler(
                                    "searchCriteriaChoiceList",
                                    i,
                                    val
                                  )
                                }
                                placeholder={
                                  it.searchCriteriaChoiceList.length
                                    ? ""
                                    : "Select"
                                }
                              />
                            )
                          ) : (
                            <TextField
                              placeHolder="Enter Value"
                              thickness="thin"
                              value={it.searchCriteriaInput}
                              onChange={(val) =>
                                changeHandler("searchCriteriaInput", i, val)
                              }
                            />
                          )}
                        </FlexChild>
                        {i !== 0 && (
                          <FlexChild>
                            <Button
                              thickness="thin"
                              iconAlign="left"
                              iconRound={false}
                              type="DangerOutlined"
                              icon={<Delete />}
                              onClick={() => deleteRow(i)}
                            />
                          </FlexChild>
                        )}
                      </FlexLayout>
                    </FlexChild>
                  </FlexLayout>
                ))}

              <FlexLayout spacing="loose" halign="end">
                <Button type="Primary" thickness="thin">
                  Run Query
                </Button>
                <Button type="Outlined" onClick={addRow} thickness="thin">
                  Add More
                </Button>
              </FlexLayout>
              {productsMatched !== undefined && (
                <>
                  {productsMatched === 0 ? (
                    <TextStyles>
                      No Product(s) found under applied condition.
                    </TextStyles>
                  ) : (
                    <TextStyles>
                      Total {productsMatched} product(s) found under applied
                      condition.
                    </TextStyles>
                  )}
                </>
              )}
              {errorMsg && (
                <TextStyles textcolor="negative">
                  Please Fill all the Fields of Created Rows **
                </TextStyles>
              )}
            </FlexLayout>
          </Card>
        )}
      </LRLayout>
    </>
  );
};

export default QueryBuilder;
