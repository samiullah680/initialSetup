import { Accordion, FlexChild, FlexLayout, TextStyles } from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { upperCaseLabel } from "../../../../../utils/globalFunctions";
import AttributeHelper from "./Attributehelper";

const Attribute = (props: any): JSX.Element => {
  const [requiredFields, setRequiredFields] = useState<any[]>([]);
  const [enteredRequiredFields, setEnteredRequiredFields] = useState<any>([]);
  const [showAccordions, setShowAccordions] = useState(-1);

  const [productAttributesData, setProductAttributesData] = useState<any>({});
  const [customProductsAttributesData, setCustomProductAttributesData] = useState<any>({});
  const [variationtAttributesData, setVariationAttributesData] = useState({});
  const [error, setError] = useState<any>({});
  const handleAttributeChange = (field: string, val: string, key: any) => {
    let requiredFlag = 1;
    if (field === "product") {
      const tempProductAttributes = { ...productAttributesData };
      tempProductAttributes[key] = val;
      setProductAttributesData(tempProductAttributes);
      if (
        val === "fixed" &&
        requiredFields.includes(key) &&
        customProductsAttributesData[key].value === ""
      ) {
        requiredFlag = 0;
        enteredRequiredFields.splice(enteredRequiredFields.indexOf(key), 1);
        setEnteredRequiredFields([...enteredRequiredFields]);
      }
    }

    if (field === "variation") {
      const tempVariationAttributesData: any = {
        ...variationtAttributesData,
      };
      const checkIndex = tempVariationAttributesData[key].value.indexOf(val);
      if (checkIndex > -1) {
        tempVariationAttributesData[key].value.splice(checkIndex, 1);
        requiredFlag = 0;
      } else tempVariationAttributesData[key].value.push(val);
      if (
        !requiredFlag &&
        tempVariationAttributesData[key].value.length === 0 &&
        enteredRequiredFields.includes(key)
      ) {
        enteredRequiredFields.splice(enteredRequiredFields.indexOf(key), 1);
        setEnteredRequiredFields([...enteredRequiredFields]);
      }

      setVariationAttributesData(tempVariationAttributesData);
    }
    if (requiredFields.includes(key) && !enteredRequiredFields.includes(key) && requiredFlag) {
      enteredRequiredFields.push(key);
      setEnteredRequiredFields([...enteredRequiredFields]);
    }
  };

  const handleCustomAttributeChange = (field: string, val: string | number, key: any) => {
    if (field === "product") {
      checkValuesValidation(key, val);
      const tempCustomData = { ...customProductsAttributesData };
      tempCustomData[key].value = val;
      setCustomProductAttributesData(tempCustomData);

      if (val !== "" && requiredFields.includes(key) && !enteredRequiredFields.includes(key)) {
        enteredRequiredFields.push(key);
        setEnteredRequiredFields([...enteredRequiredFields]);
      }
      if (val === "" && enteredRequiredFields.includes(key)) {
        enteredRequiredFields.splice(enteredRequiredFields.indexOf(key), 1);
        setEnteredRequiredFields([...enteredRequiredFields]);
      }
    }
  };

  const checkValuesValidation = (key: string, val: string | number) => {
    if (key == "Package Weight") {
      if (val <= 100 && val > 0) {
        setError({ ...error, [key]: "" });
      } else {
        setError({
          ...error,
          [key]: "Weight should be in-between 1 to 100",
        });
      }
    }
    if (key == "Package Length") {
      if (val <= 1000 && val >= 1) {
        setError({ ...error, [key]: "" });
        props?.onsave(false);
      } else {
        setError({
          ...error,
          [key]: "Length should be in-between 1 to 1000",
        });
      }
    }
    if (key == "Package Height") {
      if (val <= 1000 && val >= 1) {
        setError({ ...error, [key]: "" });
      } else {
        setError({
          ...error,
          [key]: "Height should be in-between 1 to 1000",
        });
      }
    }
    if (key == "Package Width") {
      if (val <= 1000 && val >= 1) {
        setError({ ...error, [key]: "" });
      } else {
        setError({
          ...error,
          [key]: "Width should be in-between 1 to 1000",
        });
      }
    }
  };

  // UseEffect for creating keys in Product and Variation Atrribute States
  useEffect(() => {
    const tempRequiredFields: any = [];
    const tempEnteredRequiredFields: any = [];
    // product attribute data
    const tempProductAttributesData: any = {};
    const tempCustomData: any = {};
    props.productOptions.forEach((it: any) => {
      tempProductAttributesData[it.name] = it.defaultMappedAttribute;
      tempCustomData[it.name] = it.customAttributesData;
      if (it.required) tempRequiredFields.push(it.name);
      if (it.required && it.defaultMappedAttribute !== "")
        tempEnteredRequiredFields.push(it.name);
      error[it.name] = "";
    });
    setProductAttributesData(tempProductAttributesData);
    setCustomProductAttributesData(tempCustomData);
    setEnteredRequiredFields(tempEnteredRequiredFields);
    setError({ ...error });

    // variation attribute data
    const tempVariationAttributesData: any = {};
    props.variationOptions.forEach((it: any) => {
      tempVariationAttributesData[it.name] = it.customAttributesData;
      if (it.required) tempRequiredFields.push(it.name);
    });
    setVariationAttributesData(tempVariationAttributesData);
    setRequiredFields(tempRequiredFields);
  }, []);

  useEffect(() => {
    // if (
    //     JSON.stringify(requiredFields.sort()) ===
    //         JSON.stringify(enteredRequiredFields.sort()) &&
    //     requiredFields.length !== 0
    // )
    // props.onsave(false);
    // else props.onsave(true);
  }, [enteredRequiredFields]);
  return (
    <>
      <Accordion
        boxed
        icon
        iconAlign="left"
        onClick={() => (showAccordions === 0 ? setShowAccordions(-1) : setShowAccordions(0))}
        title="Product Attributes"
        active={showAccordions === 0}
      >
        <FlexLayout childWidth="fullWidth" direction="vertical" spacing="tight">
          <FlexLayout childWidth="fullWidth" spacing="loose" valign="center">
            <FlexChild desktopWidth="50" tabWidth="25" mobileWidth="25">
              <TextStyles>setup Shop Attributes</TextStyles>
            </FlexChild>
            <FlexChild desktopWidth="50" tabWidth="75" mobileWidth="75">
              <TextStyles>{upperCaseLabel(props.source)} Attributes</TextStyles>
            </FlexChild>
          </FlexLayout>
          <AttributeHelper
            name="productAttributes"
            productOptions={props.productOptions}
            attributeOptions={props.attributeOptions}
            productAttributesData={productAttributesData}
            customProductsAttributesData={customProductsAttributesData}
            handleAttributeChange={handleAttributeChange}
            handleCustomAttributeChange={handleCustomAttributeChange}
            fieldError={error}
            setError={setError}
          />
        </FlexLayout>
      </Accordion>
      <Accordion
        boxed
        icon
        iconAlign="left"
        onClick={() => (showAccordions === 1 ? setShowAccordions(-1) : setShowAccordions(1))}
        title="Variation Attributes"
        active={showAccordions === 1}
      >
        <FlexLayout childWidth="fullWidth" direction="vertical" spacing="tight">
          <FlexLayout childWidth="fullWidth" spacing="loose" valign="center">
            <FlexChild desktopWidth="50" tabWidth="25" mobileWidth="25">
              <TextStyles>setup Attributes</TextStyles>
            </FlexChild>
            <FlexChild desktopWidth="50" tabWidth="75" mobileWidth="75">
              <TextStyles>{upperCaseLabel(props.source)} Attributes</TextStyles>
            </FlexChild>
          </FlexLayout>
          <AttributeHelper
            name="variationAttributes"
            variationOptions={props.variationOptions}
            attributeOptions={props.attributeOptions}
            variationAttributesData={variationtAttributesData}
            handleAttributeChange={handleAttributeChange}
          />
        </FlexLayout>
      </Accordion>
    </>
  );
};

export default Attribute;
