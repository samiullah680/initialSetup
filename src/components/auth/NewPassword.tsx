import {
  Alert,
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
import HelpPoints from "./HelpPoints";
import { Eye, EyeOff } from "react-feather";
import { passwordValidation, singlePasswordValidation } from "../utils/FormValidation";

const NewPassword = () => {
  const [fieldValues, setFieldValues] = useState<any>({
    password: "",
    confirmpassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState<any>({
    password: "",
    confirmpassword: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  // Function to handle field changes.
  const handleFieldChange = (val: string, field: string) => {
    setFieldValues({ ...fieldValues, [field]: val });
    setFieldErrors({...fieldErrors, [field]: ""});
  };

  // Function to validate each field.
  const isValid = (val: string, field: string) => {
    let temp:any = {};
    switch(field) {
      case "password":
        temp = singlePasswordValidation(val);
        !temp.success && setFieldErrors({...fieldErrors, [field]:temp.msg});
        break;
      case "confirmpassword":
        temp = passwordValidation({pass:fieldValues.password, cPass: val});
        !temp.success && setFieldErrors({...fieldErrors, [field]:temp.msg});
        break;
      default: return;
    }
    return {field: field, msg: temp.msg==="success" ? "" : temp.msg};
  };

  // Function to handle form submit.
  const handleFormSubmit = () => {
    const tempErrors:any = {...fieldErrors};
    const result:any = [];
    Object.keys(fieldValues).forEach((item:any) => {
      result.push(isValid(fieldValues[item],item));
    });
    result.forEach((item:any) => tempErrors[item.field]=item.msg);
    setFieldErrors(tempErrors);
    if(Object.values(tempErrors).some((item) => item !== ""))
    {
      return;
    }
    else
    {
      // Your Logic here....
      navigate("/auth/login");
    }
  };

  return (
    <AuthLayout>
      <Card cardType="Shadowed">
        <FlexLayout direction="vertical" spacing="mediumTight">
          <TextStyles
            fontweight="extraBold"
            subheadingTypes="XS-1.6"
            type="SubHeading"
          >
            Reset Password
          </TextStyles>
          <Alert
            desciption={
              <>
                <TextStyles
                  alignment="left"
                  fontweight="normal"
                  textcolor="light"
                  type="simpleText"
                  utility="none"
                >
                  {`You are resetting password for "your email"`}
                </TextStyles>
              </>
            }
            destroy
            type="info"
          >
            <TextStyles
              alignment="left"
              fontweight="bold"
              textcolor="dark"
              type="simpleText"
              utility="none"
            >
              You are all set!
            </TextStyles>
          </Alert>
          <FormElement key={null}>
            <div className="custom-progress-section">
              <TextField
                error={fieldErrors.password}
                innerSufIcon={
                  <span
                    className="eye-icon"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <Eye size={20} color="#3B424F" />
                    ) : (
                      <EyeOff size={20} color="#3B424F" />
                    )}
                  </span>
                }
                name="New Password"
                onblur={()=> isValid(fieldValues.password, "password")}
                onChange={(e) => {
                  handleFieldChange(e, "password");
                }}
                placeHolder="Enter new Password"
                required
                show={showPassword}
                showHelp={fieldErrors.password}
                strength={true}
                type="password"
                value={fieldValues.password}
              />
            </div>
            <HelpPoints />
            <TextField
              error={fieldErrors.confirmpassword}
              name="Confirm Password"
              onblur={()=> isValid(fieldValues.confirmpassword, "confirmpassword")}
              onChange={(e) => {
                handleFieldChange(e, "confirmpassword");
              }}
              placeHolder="Confirm New Password"
              required
              showHelp={fieldErrors.confirmpassword}
              type="password"
              value={fieldValues.confirmpassword}
            ></TextField>
            <hr className="custom-hr" />
            <Button
              disable={Object.values(fieldErrors).some((item) => item !== "")}
              onClick={handleFormSubmit}
              length="fullBtn"
              loading={false}
              thickness="thin"
              type="Primary"
            >
              Save
            </Button>
          </FormElement>
        </FlexLayout>
      </Card>
    </AuthLayout>
  );
};

export default NewPassword;
