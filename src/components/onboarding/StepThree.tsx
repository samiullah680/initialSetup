import {
  Button,
  Card,
  FlexLayout,
  FormElement,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useNavigate } from "react-router-dom";
import { BoardingLayout } from "../layout";
import Setting from "./Setting";

const StepThree = () => {
  const navigate = useNavigate();
  return (
    <BoardingLayout>
      <div
        className="mt-30"
        style={{
          width: "initial",
          margin: "auto",
          maxWidth: "700px",
        }}
      >
        <Card cardType="Shadowed">
          <FlexLayout direction="vertical" spacing="mediumTight">
            <TextStyles
              alignment="left"
              fontweight="extraBold"
              lineHeight="LH-2.4"
              paragraphTypes="MD-1.4"
              subheadingTypes="XS-1.6"
              textcolor="dark"
              type="SubHeading"
              utility="none"
            >
              Configurations Settings
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
              Manage your data syncing settings (Can be modified later from
              setting section).
            </TextStyles>
          </FlexLayout>
          <div className="mt-20"></div>
          <FormElement key="">
            <Setting />
            <hr className="custom-hr mb-15 mt-15" />
            <FlexLayout halign="end">
              <Button
                halign="Center"
                length="none"
                thickness="thin"
                type="Primary"
                iconRound={false}
                onClick={() => navigate("/onboarding/123456789/complete")}
              >
                Finish
              </Button>
            </FlexLayout>
          </FormElement>
        </Card>
      </div>
    </BoardingLayout>
  );
};
export default StepThree;
