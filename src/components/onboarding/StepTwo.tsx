import {
  Button,
  Card,
  FlexChild,
  FlexLayout,
  FormElement,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useNavigate } from "react-router-dom";
import magentoImg from "../../assets/images/magento.svg";
import { BoardingLayout } from "../layout";

const StepTwo = () => {
  const navigate = useNavigate();
  return (
    <BoardingLayout>
      <div
        className="mt-30"
        style={{ width: "initial", margin: "auto", maxWidth: "700px" }}
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
              Connect your Channel(s)
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
              Connect channel(s) to sync and integrate with the inventory
              account. Connect atleast 1 channel to get started.
            </TextStyles>
          </FlexLayout>
          <div className="mt-20"></div>
          <FormElement key="">
            <FlexLayout
              desktopWidth="25"
              tabWidth="25"
              mobileWidth="50"
              spacing="loose"
            >
              {[0, 1, 2, 3].map((el: any) => {
                return (
                  <FlexChild key={el}>
                    <Card
                      cardType="Bordered"
                      extraClass="framework-card completed"
                    >
                      <div className="framework-media">
                        <img src={magentoImg} alt="" width="77" height="62" />
                      </div>
                      <Button
                        halign="Center"
                        iconAlign="left"
                        length="fullBtn"
                        type="Outlined"
                        thickness="large"
                        disable={false}
                      >
                        Connect
                      </Button>
                    </Card>
                  </FlexChild>
                );
              })}
            </FlexLayout>
            <hr className="custom-hr mt-12 mb-12" />
            <FlexLayout halign="end">
              <Button
                halign="Center"
                length="none"
                thickness="thin"
                type="Primary"
                iconRound={false}
                onClick={() => navigate("/onboarding/123456789/step-three")}
              >
                Next
              </Button>
            </FlexLayout>
          </FormElement>
        </Card>
      </div>
    </BoardingLayout>
  );
};

export default StepTwo;
