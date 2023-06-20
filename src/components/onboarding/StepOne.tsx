import {
  Button,
  Card,
  FlexLayout,
  FormElement,
  Select,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useNavigate } from "react-router-dom";
import { BoardingLayout } from "../layout";
const StepOne = () => {
  const navigate = useNavigate();
  return (
    <BoardingLayout>
      <div
        className="mt-30 pb-100"
        style={{ width: "initial", margin: "auto", maxWidth: "700px" }}
      >
        <Card cardType="Shadowed">
          <FlexLayout direction="vertical" spacing="mediumTight">
            <TextStyles
              alignment="left"
              fontweight="extraBold"
              lineHeight="LH-2.4"
              subheadingTypes="XS-1.6"
              textcolor="dark"
              type="SubHeading"
              utility="none"
            >
              Connect your inventory account
            </TextStyles>
            <TextStyles
              alignment="left"
              fontweight="normal"
              lineHeight="LH-2.0"
              paragraphTypes="MD-1.4"
              textcolor="light"
              type="Paragraph"
              utility="none"
            >
              To enable smart inventory and order management, connect your
              inventory account to the app.
            </TextStyles>
          </FlexLayout>
          <div className="mt-20"></div>
          <FormElement key="">
            <Select
              name="Select your Data Center"
              options={[
                {
                  label: "1",
                  value: "in",
                },
                {
                  label: "2",
                  value: "us",
                },
              ]}
              placeholder="Select your Data Center"
              popoverContainer="body"
              position="top"
              thickness="thin"
            />
            <hr className="custom-hr mb-15 mt-15" />
            <FlexLayout direction="vertical" spacing="extraLoose">
              <Button
                halign="Center"
                iconAlign="right"
                length="fullBtn"
                thickness="large"
                type="Primary"
                iconRound={false}
                onClick={() => navigate("/onboarding/123456789/step-two")}
              >
                Connect Account
              </Button>
              <FlexLayout spacing="extraTight">
                <TextStyles textcolor="light">{`Don't have account?`}</TextStyles>
                <Button
                  halign="Center"
                  iconAlign="left"
                  length="none"
                  thickness="thin"
                  type="TextButton"
                >
                  Register at Target
                </Button>
              </FlexLayout>
            </FlexLayout>
          </FormElement>
        </Card>
      </div>
    </BoardingLayout>
  );
};

export default StepOne;
