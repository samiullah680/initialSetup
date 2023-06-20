import {
  Card,
  FlexChild,
  FlexLayout,
  LRLayout,
  Select,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { priceOptions } from "../dummyData";

const Pricing = (): JSX.Element => {
  const [selectedField, setSelectedField] = useState("0");
  return (
    <LRLayout
      title={"Profile Custom Pricing (Fixed or Percentage)"}
      lrHelpText={
        <TextStyles type="neutralText" textcolor="light" utility="mb-10">
          The filtered product(s) will be uploaded on setup Shop with the updated price rule.
        </TextStyles>
      }
    >
      <Card cardType="Plain">
        <FlexLayout direction="vertical">
          <Card cardType="Plain">
            <FlexLayout spacing="tight" desktopWidth="50" tabWidth="50" mobileWidth="100">
              <FlexChild desktopWidth={"100"} tabWidth={"50"} mobileWidth={"100"}>
                <Select
                  thickness="thin"
                  placeholder={"Select"}
                  options={priceOptions}
                  value={selectedField}
                  onChange={(e) => setSelectedField(e)}
                />
              </FlexChild>

              {selectedField !== "0" && (
                <TextField thickness="thin" placeHolder={"Enter values"} />
              )}
            </FlexLayout>
          </Card>
        </FlexLayout>
      </Card>
    </LRLayout>
  );
};

export default Pricing;
