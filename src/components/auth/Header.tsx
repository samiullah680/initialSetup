import { FlexLayout, TextStyles } from "@cedcommerce/ounce-ui";
const Header = () => {
  return (
    <FlexLayout desktopWidth="100" direction="vertical" valignTab="center">
      <TextStyles
        fontweight="extraBold"
        headingTypes="LG-2.8"
        lineHeight="LH-3.6"
        textcolor="primary"
        type="Heading"
        utility="pt-15 pb-10 m-heading"
      >
        Inventory Integration by CedCommerce
      </TextStyles>
      <TextStyles
        type="SubHeading"
        subheadingTypes="SM-1.8"
        textcolor="light"
        utility="m-subheading"
      >
        Automate Inventory & Order syncing across multiple selling platforms.
      </TextStyles>
    </FlexLayout>
  );
};

export default Header;
