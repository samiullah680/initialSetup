import {
  Alert,
  FlexLayout,
  FormElement,
  LRLayout,
  Skeleton,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";

import {
  checkMappedAttribute,
  makeSelectOption,
  upperCaseLabel,
} from "../../../../utils/globalFunctions";
import { getAttributesDAta, getAttributesDummy } from "../../dummyData";
import Attribute from "./components/Attribute";
import CatSearch from "./components/CatSearch";

function Profiling(props: any): JSX.Element {
  const source = "magento";
  const [data] = useState<any>(props.default_value ? props.default_value : {});
  const [showAttr, setShowAttr] = useState<boolean>(false);
  const [attLoading, setAttLoading] = useState<boolean>(false);
  const [productOptions, setProductOptions] = useState<any[]>([]);
  const [variationOptions, setVariationOptions] = useState<any[]>([]);
  const [attributeOptions, setAttributeOptions] = useState({
    productAttributes: [],
    variationAttributes: [],
  });

  useEffect(() => {
    marketplaceAttributes();
  }, []);

  // Main call whenever user changes category or data
  const getAttributes = (e: any, label: any) => {
    setShowAttr(false);
    setAttLoading(true);
    const tempProductOptions: any[] = [];
    const tempVariationOptions: any[] = [];
    data["taxonomyPath"] = e;
    data["categoryvalue"] = label;
    if (e == "") {
      setAttLoading(false);
      return true;
    }

    const res = getAttributesDummy;
    if (res.success == true) {
      const data = res.data;
      for (const key in data) {
        if (data[key].required === true && data[key]?.attribute_type !== 2) {
          tempProductOptions.push({
            id: data[key]?.id || data[key].name,
            name: data[key]?.name,
            defaultMappedAttribute: checkMappedAttribute(
              data[key]?.name,
              attributeOptions.productAttributes
            ),
            required: true,
            input_type: data[key]?.input_type,
            customOptions: data[key].option ? makeSelectOption(data[key].option || []) : "",
            customSelectValues: data[key].values
              ? makeSelectOption(data[key].values || [])
              : "",
            default_unit: data[key].default_unit
              ? makeSelectOption(data[key].default_unit || [])
              : "",
            customAttributesData: {
              id: data[key]?.id || data[key].name,
              name: data[key]?.name,
              customized: data[key]?.customized_name,
              required: data[key]?.required,
              value: data[key].value || "",
            },
          });
        }
        if (data[key]?.attribute_type === 2) {
          tempVariationOptions.push({
            name: data[key].name,
            required: data[key].required,
            customAttributesData: {
              type: "attribute",
              value: [],
              id: data[key]?.id || data[key].name,
              required: data[key].required,
              name: data[key].name,
              customized: data[key]?.customized_name,
            },
          });
        }
      }
      setProductOptions(tempProductOptions);
      setVariationOptions(tempVariationOptions);
      setShowAttr(true);
      setAttLoading(false);
    } else {
      props.error("No Attributes Found");
      setAttLoading(false); // for skelton loading false
    }
    //   });
  };

  /**Function for getting Attributes from marketplace
   * @returns array of Objects
   */

  function marketplaceAttributes() {
    const e = getAttributesDAta;
    const tempAttributeOptions: any = {
      productAttributes: [{ label: "Set-Custom", value: "fixed" }, ...e.data.attr],
      variationAttributes: e.data.variant_attr,
    };
    setAttributeOptions(tempAttributeOptions);
  }

  return (
    <>
      <LRLayout
        lrHelpText={
          <FlexLayout spacing="loose">
            <TextStyles>
              {`Choose the Category that best defines your
                            listing(s).`}
            </TextStyles>
            <Alert icon={false} type="info" destroy={false}>
              <TextStyles type="neutralText">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Note:
                </span>
                {`Based on the selected category you will further map ${upperCaseLabel(
                  source
                )} attribute with setup attributes.`}
              </TextStyles>
            </Alert>
          </FlexLayout>
        }
        title="Select Listing Category"
      >
        <FormElement>
          <CatSearch
            form={props.form}
            profilename={props.profilename}
            initial={props.default_value ? props.default_value.taxonomyPath : ""}
            onsave={props.onsave}
            category={props.default_value?.categoryvalue}
            onchange={(e: any, label: any) => {
              getAttributes(e, label);
            }}
            attributeLoading={attLoading}
            onRemove={props.onRemove}
          />
        </FormElement>
      </LRLayout>
      {!attLoading ? (
        showAttr && (
          <LRLayout
            lrHelpText={
              <Alert
                icon={false}
                desciption={
                  <div className="mt-15">
                    <FlexLayout spacing="loose">
                      <TextStyles>
                        <b> Product Attributes:</b>
                        These are the compulsory attributes that must be selected for mapping
                        {upperCaseLabel(source)}
                        attributes with setup attributes.
                      </TextStyles>
                      <TextStyles>
                        <b>Variation Attributes:</b>
                        These are the mandatory attributes that must be selected if you have
                        variants for your listings.
                      </TextStyles>
                    </FlexLayout>
                  </div>
                }
                type="info"
                destroy={false}
              >
                <TextStyles>
                  {`Through Attribute Mapping you can enhance your listing catalog with additional listing information.`}
                </TextStyles>
              </Alert>
            }
            title="Select Attribute Mapping"
          >
            <FormElement>
              <Attribute
                productOptions={productOptions}
                variationOptions={variationOptions}
                attributeOptions={attributeOptions}
                source={source}
                onsave={props.onsave}
              />
            </FormElement>
          </LRLayout>
        )
      ) : (
        <LRLayout title="" lrHelpText={<Skeleton line={3}></Skeleton>}>
          <Skeleton line={3} />
        </LRLayout>
      )}
    </>
  );
}

export default Profiling;
