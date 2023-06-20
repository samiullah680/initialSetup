import { FlexLayout, List, TextStyles } from '@cedcommerce/ounce-ui';
import { HelpCircle } from 'react-feather';

const HelpPoints = () => {
  return (
    <FlexLayout direction="vertical">
      <FlexLayout spacing="mediumTight" wrap="noWrap">
        <HelpCircle size={16} color="#3B424F" className="helpcircle"></HelpCircle>
        <TextStyles textcolor="light">
          To create a strong password make sure the password contains:
        </TextStyles>
      </FlexLayout>
      <div className="custom-help-points">
        <List type="disc">
          <TextStyles textcolor="light">a minimum of 8 characters</TextStyles>
          <TextStyles textcolor="light">atleast a lowercase and uppercase letter</TextStyles>
          <TextStyles textcolor="light">atleast a number and special character</TextStyles>
        </List>
      </div>
    </FlexLayout>
  );
};

export default HelpPoints;
