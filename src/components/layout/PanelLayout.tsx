import { AppWrapper, BodyLayout } from "@cedcommerce/ounce-ui";
import { Footer, PanelHeader, PanelSidebar } from "../shared";

const PanelLayout = ({ children }: any) => {
  return (
    <AppWrapper>
      <PanelHeader />
      <PanelSidebar />
      <BodyLayout>{children}</BodyLayout>
      <Footer />
    </AppWrapper>
  );
};

export default PanelLayout;
