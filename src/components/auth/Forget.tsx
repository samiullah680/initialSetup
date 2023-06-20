import {
  Button,
  Card,
  FlexChild,
  FlexLayout,
  FormElement,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout";
import { emailValidation } from "../utils/FormValidation";

const Forget = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const isValid = (val: string) => {
    const temp: any = emailValidation(val);
    !temp.success && setEmailError(temp.msg);
    return temp;
  };

  const handleFormSubmit = () => {
    const res: any = isValid(email);
    if (!res.success) {
      return;
    }
    else {
      navigate("/auth/reset-helper");
      // Your logic here....
    }
  };
  return (
    <AuthLayout>
      <Card cardType="Shadowed">
        <FlexLayout direction="vertical" spacing="extraLoose">
          <FlexLayout spacing="tight" valign="center">
            <FlexChild>
              <Button
                halign="Center"
                icon={<ArrowLeft size={16} color="#000" />}
                iconAlign="left"
                length="Default"
                onClick={() => {
                  navigate("/auth/login");
                }}
                thickness="thin"
                type="Outlined"
                iconRound={false}
              ></Button>
            </FlexChild>
            <FlexChild>
              <TextStyles
                fontweight="extraBold"
                subheadingTypes="XS-1.6"
                type="SubHeading"
              >
                Enter your Email ID to receive a password reset link
              </TextStyles>
            </FlexChild>
          </FlexLayout>
          <FlexLayout childWidth="fullWidth">
            <FormElement key={null}>
              <TextField
                error={emailError !== ""}
                name=""
                onblur={() => isValid(email)}
                onChange={(e) => {
                  setEmail(e);
                  setEmailError("");
                }}
                placeHolder="Enter Email"
                showHelp={emailError}
                type="text"
                value={email}
              />
              <hr className="custom-hr" />
              <Button
                onClick={handleFormSubmit}
                loading={false}
                length="fullBtn"
                thickness="thin"
                type="Primary"
              >
                Get Reset Link
              </Button>
            </FormElement>
          </FlexLayout>
        </FlexLayout>
      </Card>
    </AuthLayout>
  );
};

export default Forget;
