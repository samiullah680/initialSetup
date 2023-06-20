import {
  ChoiceList,
  FlexChild,
  FlexLayout,
  Select,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React from "react";
import Checked from "../../../../../../assets/icons/checked-circle.svg";
import unchecked from "../../../../../../assets/icons/unchecked-circle.svg";

const AttributeComponent = (props: any): JSX.Element => {
  if (props.name === "productAttributes")
    return (
      <FlexLayout childWidth="fullWidth" direction="vertical" spacing="loose">
        {props.productOptions.map((it: any, index: number) => (
          <FlexLayout key={index} childWidth="fullWidth" spacing="loose">
            <FlexChild desktopWidth="50" tabWidth="25" mobileWidth="25">
              <FlexLayout spacing="tight" wrap="noWrap">
                {props.productAttributesData[it.name] === "" ||
                  (props.productAttributesData[it.name] === "fixed" &&
                    props.customProductsAttributesData[it.name]?.value === "") ? (
                  <img src={unchecked} alt="unchecked" />
                ) : (
                  <>
                    {props.fieldError[it.name] == "" ? (
                      <img src={Checked} alt="checked" />
                    ) : (
                      <img src={unchecked} alt="unchecked" />
                    )}
                  </>
                )}

                <TextStyles>
                  {it.name} {it.required && <>*</>}
                </TextStyles>
              </FlexLayout>
            </FlexChild>
            <FlexChild desktopWidth="50" tabWidth="75" mobileWidth="75">
              <FlexLayout
                direction="vertical"
                childWidth="fullWidth"
                spacing="tight"
              >
                <Select
                  thickness="thin"
                  options={props.attributeOptions.productAttributes}
                  value={props.productAttributesData[it.name]}
                  onChange={(val) => {
                    props.handleAttributeChange("product", val, it.name);
                  }}
                />
                {props.productAttributesData[it.name] === "fixed" && (
                  <>
                    {it.input_type === "select" && (
                      <Select
                        thickness="thin"
                        options={it.customSelectValues}
                        value={
                          props.customProductsAttributesData[it.name].value
                        }
                        onChange={(val) => {
                          props.handleCustomAttributeChange(
                            "product",
                            val,
                            it.name
                          );
                        }}
                      />
                    )}
                    {it.customOptions.length > 0 && (
                      <Select
                        thickness="thin"
                        options={it.customOptions}
                        value={
                          props.customProductsAttributesData[it.name].value
                        }
                        onChange={(val) => {
                          props.handleCustomAttributeChange(
                            "product",
                            val,
                            it.name
                          );
                        }}
                      />
                    )}
                    {it.input_type === "number_unit" && (
                      <FlexLayout spacing="extraTight">
                        <FlexChild desktopWidth="66">
                          <>
                            <TextField
                              thickness="thin"
                              type="number"
                              placeHolder="Enter Units"
                              value={
                                props.customProductsAttributesData[it.name]
                                  .value
                              }
                              onChange={(val) => {
                                props.handleCustomAttributeChange(
                                  "product",
                                  val,
                                  it.name
                                );
                              }}
                            />
                            {props.fieldError[it.name] && (
                              <TextStyles textcolor="negative">
                                {props.fieldError[it.name]}
                              </TextStyles>
                            )}
                          </>
                        </FlexChild>
                        <FlexChild desktopWidth="33">
                          <Select
                            thickness="thin"
                            options={it.default_unit}
                            value={it.default_unit[0].value}
                            disabled={it.default_unit.length === 1}
                          />
                        </FlexChild>
                      </FlexLayout>
                    )}
                  </>
                )}
              </FlexLayout>
            </FlexChild>
          </FlexLayout>
        ))}
      </FlexLayout>
    );
  if (props.name === "variationAttributes")
    return (
      <FlexLayout childWidth="fullWidth" direction="vertical" spacing="loose">
        {props.variationOptions.map((it: any, index: number) => (
          <FlexLayout key={index} childWidth="fullWidth" spacing="loose" valign="center">
            <FlexChild desktopWidth="50" tabWidth="25" mobileWidth="25">
              <FlexLayout spacing="tight">
                {props.variationAttributesData?.[it.name]?.value.length ===
                  0 ? (
                  <img src={unchecked} alt="unchecked" />
                ) : (
                  <img src={Checked} alt="unchecked" />
                )}
                <TextStyles>
                  {it.name} {it.required && <>*</>}
                </TextStyles>
              </FlexLayout>
            </FlexChild>
            <FlexChild desktopWidth="50" tabWidth="75" mobileWidth="75">
              <FlexLayout
                direction="vertical"
                childWidth="fullWidth"
                spacing="tight"
              >
                <ChoiceList
                  showBadges
                  thickness="thin"
                  options={props.attributeOptions.variationAttributes}
                  value={props.variationAttributesData?.[it.name]?.value}
                  onChange={(val) => {
                    props.handleAttributeChange("variation", val, it.name);
                  }}
                />
              </FlexLayout>
            </FlexChild>
          </FlexLayout>
        ))}
      </FlexLayout>
    );
  return <></>;
};

export default AttributeComponent;
