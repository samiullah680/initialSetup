import {
    FlexChild,
    FlexLayout,
    LRLayout,
    TextField,
    TextStyles,
} from '@cedcommerce/ounce-ui';
import { useState } from 'react';

const TemplateName = (props: any): JSX.Element => {
  const [templateName, setTemplateName] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Method for handling change in Template name TextField
  const handleChange = (val: string) => {
    //Regex for checking special characters
    const regex = /^(\w+\s)*\w+\s?$/;

    //checking for input length
    if (val.replace(/\s+/g, " ").trim().length > 80) {
      props.error("Template Name cannot exceed  more than 80 characters");
      return;
    }

    setTemplateName(val);

    if (val === "") {
      setError("Template Name cannot be empty *");
    } else if (!regex.test(val)) {
      setError(
        "Template Name cannot contain multiple spaces or special characters"
      );
    } else {
      setError("");
    }
  };

  return (
    <>
      <LRLayout
        required={true}
        title={"Template Name"}
        lrHelpText={
          <TextStyles type="neutralText" textcolor="light">
            Template name must be unique and should not exceed 80 characters.
          </TextStyles>
        }
      >
        <FlexLayout>
          <FlexChild desktopWidth={"100"} tabWidth={"50"} mobileWidth={"100"}>
            <TextField
              thickness="thin"
              placeHolder="Enter the Template Name"
              value={templateName}
              onChange={(val: string) => handleChange(val)}
              error={error !== ""}
              showHelp={error !== "" ? error : undefined}
            />
          </FlexChild>
        </FlexLayout>
      </LRLayout>
    </>
  );
};

export default TemplateName;
