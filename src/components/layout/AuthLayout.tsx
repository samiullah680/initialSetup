import { FlexChild, FlexLayout } from "@cedcommerce/ounce-ui";
import { Header } from "../auth";
import { Footer } from "../shared";
import "../auth/AuthStyle.css";

const AuthLayout = ({ children }: any) => {
  return (
    <>
      <div className="bg-set">
        <div
          className="pt-120 pb-100"
          style={{
            width: "initial",
            margin: "auto",
            maxWidth: "1130px",
          }}
        >
          <FlexLayout halign="center" spacing="extraLoose">
            <FlexChild desktopWidth="33" tabWidth="100" mobileWidth="100">
              <Header />
            </FlexChild>
            <FlexChild desktopWidth="66" tabWidth="100" mobileWidth="100">
              <div
                style={{
                  margin: "auto",
                  maxWidth: "586px",
                }}
              >
                {children}
              </div>
            </FlexChild>
          </FlexLayout>
        </div>
        {/* app footer */}
        <Footer />
      </div>
    </>
  );
};

export default AuthLayout;
