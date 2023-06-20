import {
  Button,
  Card,
  FlexLayout,
  FormElement,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout";
import { emailValidation, singlePasswordValidation } from "../utils/FormValidation";

type LoginI = {
  email: string;
  password: string;
};

const Login = () => {
  const [fieldValues, setFieldValues] = useState<LoginI>({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<LoginI>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const isValid = (field: string, value: string) => {
    let temp: any = {};
    switch (field) {
      case "email":
        temp = emailValidation(value);
        !temp.success && setFieldErrors({ ...fieldErrors, [field]: temp.msg });
        break;
      case "password":
        temp = singlePasswordValidation(value);
        !temp.success && setFieldErrors({ ...fieldErrors, [field]: temp.msg });
        break;
      default:
        setFieldErrors({ email: "", password: "" });
    }
    return { field: field, msg: temp.msg === "success" ? "" : temp.msg };
  };

  const handleLoginFormSubmit = () => {
    const tempErrors: any = { ...fieldErrors };
    const result: any = [];
    let item: keyof typeof fieldValues;
    for (item in fieldValues) {
      result.push(isValid(item, fieldValues[item]));
    }
    result.forEach((item: any) => (tempErrors[item.field] = item.msg));
    setFieldErrors(tempErrors);
    if (Object.values(tempErrors).every((el: unknown) => el === "")) {
      navigate(`/onboarding/123456789/welcome`);
    }
  };

  return (
    <AuthLayout>
      <Card cardType="Shadowed">
        <FlexLayout direction="vertical" spacing="loose">
          <TextStyles fontweight="extraBold" subheadingTypes="XS-1.6" type="SubHeading">
            Login to your account
          </TextStyles>
          <FormElement key={null}>
            <TextField
              error={fieldErrors.email.length > 0}
              name={"Email"}
              onblur={() => isValid("email", fieldValues.email)}
              onChange={(e) => {
                setFieldValues({ ...fieldValues, email: e });
                setFieldErrors({
                  email: "",
                  password: "",
                });
              }}
              placeHolder="Enter email address or username"
              required={true}
              showHelp={fieldErrors.email}
              type="text"
              value={fieldValues.email}
            />
            <TextField
              error={fieldErrors.password.length > 0}
              name={"Password"}
              onblur={() => isValid("password", fieldValues.password)}
              onChange={(e) => {
                setFieldValues({ ...fieldValues, password: e });
                setFieldErrors({
                  email: "",
                  password: "",
                });
              }}
              placeHolder="Enter Password"
              required={true}
              showHelp={fieldErrors.password}
              type="password"
              value={fieldValues.password}
            />

            <FlexLayout halign="end">
              <Button
                halign="Start"
                length="none"
                onClick={() => navigate("/auth/forgot-password")}
                type="TextButton"
                thickness="large"
              >
                Forgot Password ?
              </Button>
            </FlexLayout>
            <hr className="custom-hr" />
            <Button
              disable={Object.values(fieldErrors).some((item) => item !== "")}
              length="fullBtn"
              onClick={handleLoginFormSubmit}
              thickness="thin"
              type="Primary"
            >
              Login
            </Button>
            <FlexLayout spacing="extraTight" valign="center" wrap="wrap">
              <TextStyles textcolor="light">New to CedCommerce?</TextStyles>
              <Button
                halign="Start"
                length="none"
                type="TextButton"
                thickness="large"
                onClick={() => navigate("/auth/signup")}
              >
                Create Account
              </Button>
            </FlexLayout>
          </FormElement>
        </FlexLayout>
      </Card>
    </AuthLayout>
  );
};

export default Login;
