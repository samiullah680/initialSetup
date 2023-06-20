import { FlexLayout, TextStyles } from "@cedcommerce/ounce-ui";
// import CedIcon from "../../assets/icons/ced-icon.svg";
import CedImage from "../../assets/images/ced-circle.png";

const InfoCard = () => {
  return (
    <FlexLayout spacing="loose" valign="center" wrap="noWrap" halign="center">
      <img src={CedImage} alt="" srcSet="" />
      <FlexLayout direction="vertical" wrap="noWrap">
        <TextStyles
          alignment="left"
          fontweight="extraBold"
          textcolor="dark"
          type="Heading"
          utility="none"
        >
          Welcome to Shopline Catch Integration
        </TextStyles>
        <TextStyles
          alignment="left"
          fontweight="normal"
          textcolor="light"
          type="Heading"
          utility="none"
        >
          By CedCommerce
        </TextStyles>
      </FlexLayout>
    </FlexLayout>
  );
};
export default InfoCard;
