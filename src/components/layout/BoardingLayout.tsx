import { Button, Card, FlexLayout, StepWizard, TextStyles, Topbar } from "@cedcommerce/ounce-ui";
import Logo from "../../assets/icons/Logo.svg";
import { InfoCard } from "../onboarding";
import "../onboarding/boarding.css";
import { Footer } from "../shared";

const BoardingLayout = ({ children }: any) => {
  return (
    <div className="ced-onboarding__wrap">
      {/* <Topbar
        connectLeft={
          <FlexLayout spacing="tight" wrap="noWrap" valign="center">
            <img src={Logo} />
            <TextStyles content="CedCommerce"
              fontweight="bold"
              subheadingTypes="SM-1.8"
              textcolor="light"
              type="SubHeading" />
          </FlexLayout>
        }
        connectRight={
          <Button type="Outlined" thickness="thin" length="fullBtn">
            Logout
          </Button>
        }
      /> */}
      <div
        className="pt-120 pb-100"
        style={{
          width: "initial",
          margin: "auto",
          maxWidth: "auto",
        }}
      >
        <InfoCard />
        <div className="mt-60">
          <div className='onboarding-content-container'>
            <Card
              cardType='Shadowed'
              title='How to get an API key'
            >
              <ul className='feature-list'>
                <li style={{ marginBottom: '24px' }}>
                  <FlexLayout spacing='mediumTight' valign='center'>
                    <div className='feature-serial'>1</div>
                    <p>
                      If you don't have Catch Seller Account,<a href="#"> Click Here</a> to have one
                    </p>
                  </FlexLayout>
                </li>
                <li style={{ marginBottom: '24px' }}>
                  <FlexLayout spacing='mediumTight' valign='center'>
                    <div className='feature-serial'>2</div>
                    <p>
                      Dive in straight into your Catch Seller Panel! <a href="#"> Click Here</a>
                    </p>
                  </FlexLayout>
                </li>
                <li style={{ marginBottom: '24px' }}>
                  <FlexLayout spacing='mediumTight' valign='center'>
                    <div className='feature-serial'>3</div>
                    <p>
                      Go to "My User Settings"
                    </p>
                  </FlexLayout>
                </li>
                <li style={{ marginBottom: '24px' }}>
                  <FlexLayout spacing='mediumTight' valign='center'>
                    <div className='feature-serial'>4</div>
                    <p>
                      Click on "API Key" Section.
                    </p>
                  </FlexLayout>
                </li>
                <li style={{ marginBottom: '24px' }}>
                  <FlexLayout spacing='mediumTight' valign='center'>
                    <div className='feature-serial'>5</div>
                    <p>
                      Copy the API Key and paste it in the dedicated space below
                    </p>
                  </FlexLayout>
                </li>
              </ul>
              {children}
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BoardingLayout;
