import {
  Button,
  Card,
  CheckBox,
  FlexChild,
  FlexLayout,
  FormElement,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout";
import HelpPoints from "./HelpPoints";
import {
  firstAndLastNameValidation,
  usernameValidation,
  emailValidation,
  singlePasswordValidation,
  passwordValidation,
} from "../utils/FormValidation";

interface SignupI {
  fname: string;
  lname: string;
  username: string;
  email: string;
  password: string;
  cnfpassword: string;
}

const Signup = () => {
  const [fieldValues, setFieldValues] = useState<SignupI>({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    cnfpassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState<SignupI>({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    cnfpassword: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showHelpPoints, setShowHelpPoints] = useState(false);
  const [checked, setChecked] = useState(true);

  const navigate = useNavigate();

  //   Function to change the values of each field.
  const handleFieldsChange = (val: string, field: string) => {
    if (field == "fname" || field == "lname") {
      if (val == "" || /^[a-zA-Z. ]+$/.test(val)) {
        setFieldValues({ ...fieldValues, [field]: val });
      }
      setFieldErrors({ ...fieldErrors, [field]: "" });
    } else {
      setFieldValues({ ...fieldValues, [field]: val });
      setFieldErrors({ ...fieldErrors, [field]: "" });
      if (field === "password") {
        setShowHelpPoints(true);
      }
    }
  };

  //Function for inline validations
  const handleFieldErrors = (val: string, field: string) => {
    let temp: any = {};
    switch (field) {
      case "fname":
        temp = firstAndLastNameValidation(val, "First");
        !temp.success && setFieldErrors({ ...fieldErrors, [field]: temp.msg });
        break;
      case "lname":
        temp = firstAndLastNameValidation(val, "Last");
        !temp.success && setFieldErrors({ ...fieldErrors, [field]: temp.msg });
        break;
      case "username":
        temp = usernameValidation(val);
        !temp.success && setFieldErrors({ ...fieldErrors, [field]: temp.msg });
        break;
      case "email":
        temp = emailValidation(val);
        !temp.success && setFieldErrors({ ...fieldErrors, [field]: temp.msg });
        break;
      case "password":
        temp = singlePasswordValidation(val);
        !temp.success && setFieldErrors({ ...fieldErrors, [field]: temp.msg });
        break;
      case "cnfpassword":
        temp = passwordValidation({ pass: fieldValues.password, cPass: val });
        !temp.success && setFieldErrors({ ...fieldErrors, [field]: temp.msg });
        break;
    }
    return { field: field, msg: temp.msg === "success" ? "" : temp.msg };
  };

  const handleSignupFormSubmit = () => {
    // Code to check all entries are valid
    const tempValues: any = { ...fieldValues };
    const tempErrors: any = { ...fieldErrors };
    delete tempValues?.lname;
    const result: any = [];
    Object.keys(tempValues).forEach((item: any) => {
      result.push(handleFieldErrors(tempValues[item], item));
    });
    result.forEach((item: any) => (tempErrors[item.field] = item.msg));
    setFieldErrors(tempErrors);
    //---Write your logic below---
  };
  return (
    <AuthLayout>
      <Card cardType="Shadowed">
        <FlexLayout direction="vertical" spacing="loose">
          <TextStyles fontweight="extraBold" subheadingTypes="XS-1.6" type="SubHeading">
            Login to your account
          </TextStyles>
          <FormElement key={null}>
            <FlexLayout halign="around" childWidth="fullWidth" spacing="loose">
              <TextField
                error={fieldErrors.fname.length > 0}
                name="First name"
                onblur={() => handleFieldErrors(fieldValues.fname, "fname")}
                onChange={(e: string) => {
                  handleFieldsChange(e, "fname");
                }}
                placeHolder="First name"
                required
                showHelp={fieldErrors.fname}
                type="text"
                value={fieldValues.fname}
              />
              <TextField
                error={fieldErrors.lname.length > 0}
                name="Last name"
                onblur={() => handleFieldErrors(fieldValues.lname, "lname")}
                onChange={(e: string) => {
                  handleFieldsChange(e, "lname");
                }}
                placeHolder="Last name"
                showHelp={fieldErrors.lname}
                type="text"
                value={fieldValues.lname}
              />
            </FlexLayout>
            <TextField
              error={fieldErrors.username.length > 0}
              name="Username"
              onblur={() => handleFieldErrors(fieldValues.username, "username")}
              onChange={(e: string) => {
                handleFieldsChange(e, "username");
              }}
              placeHolder="Username"
              required
              showHelp={fieldErrors.username}
              type="text"
              value={fieldValues.username}
            />

            <TextField
              autocomplete="off"
              error={fieldErrors.email.length > 0}
              name="Email"
              onblur={() => handleFieldErrors(fieldValues.email, "email")}
              onChange={(e: string) => {
                handleFieldsChange(e, "email");
              }}
              placeHolder="Enter Email"
              required
              showHelp={fieldErrors.email}
              type="text"
              value={fieldValues.email}
            />

            <div className="password-fields">
              <FlexLayout childWidth="fullWidth" spacing="loose">
                <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
                  <TextField
                    autocomplete="new-password"
                    error={fieldErrors.password.length > 0}
                    innerSufIcon={
                      <span className="eye-icon">
                        {showPassword ? (
                          <Eye
                            size={20}
                            color="#3B424F"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          />
                        ) : (
                          <EyeOff
                            size={20}
                            color="#3B424F"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          />
                        )}
                      </span>
                    }
                    name="Password"
                    onblur={() => handleFieldErrors(fieldValues.password, "password")}
                    onChange={(e: string) => {
                      handleFieldsChange(e, "password");
                    }}
                    onEnter={() => setShowHelpPoints(!showHelpPoints)}
                    required
                    show={showPassword}
                    showHelp={fieldErrors.password}
                    strength={true}
                    placeHolder="Password"
                    type="password"
                    value={fieldValues.password}
                  />
                </FlexChild>
                <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
                  <TextField
                    autocomplete="new-password"
                    error={fieldErrors.cnfpassword.length > 0}
                    name="Confirm Password"
                    onblur={() => handleFieldErrors(fieldValues.cnfpassword, "cnfpassword")}
                    onChange={(e: string) => {
                      handleFieldsChange(e, "cnfpassword");
                    }}
                    placeHolder="Confirm Password"
                    required
                    showHelp={fieldErrors.cnfpassword}
                    type="password"
                    value={fieldValues.cnfpassword}
                  />
                </FlexChild>
                {showHelpPoints && fieldValues.password.length > 0 && (
                  <FlexChild desktopWidth="100">
                    <HelpPoints />
                  </FlexChild>
                )}
              </FlexLayout>
            </div>
            <FlexLayout spacing="extraTight">
              <CheckBox
                checked={checked}
                id=""
                labelVal="Accept Terms &amp; Conditions. "
                name="Name"
                onClick={() => setChecked(!checked)}
              />

              <Button
                content="Read Policy"
                type="TextButton"
                onClick={() => window.open("https://cedcommerce.com/privacy-policy", "_blank")}
              />
            </FlexLayout>
            <hr className="custom-hr" />
            <Button
              disable={!checked || Object.values(fieldErrors).some((item) => item !== "")}
              length="fullBtn"
              loading={false}
              onClick={handleSignupFormSubmit}
              thickness="thin"
              type="Primary"
            >
              Create Account
            </Button>
            <FlexLayout spacing="extraTight" valign="center" wrap="wrap">
              <Button
                halign="Start"
                length="none"
                onClick={() => {
                  navigate("/auth/login");
                }}
                type="TextButton"
                thickness="large"
              >
                Login
              </Button>
              <TextStyles textcolor="light">if you already have an account</TextStyles>
            </FlexLayout>
          </FormElement>
        </FlexLayout>
      </Card>
    </AuthLayout>
  );
};

export default Signup;
