import { Button, PageFooter } from "@cedcommerce/ounce-ui";
import React from "react";
const Footer = () => {
  return (
    <PageFooter>
      <div className="ced-footer">
        A CedCommerce Inc Product @{new Date().getFullYear()}. Need Help?{" "}
        <Button
          type="TextButton"
          onClick={() => window.open("https://support.cedcommerce.com/open.php", "_blank")}
        >
          Get Support
        </Button>
      </div>
    </PageFooter>
  );
};

export default Footer;
