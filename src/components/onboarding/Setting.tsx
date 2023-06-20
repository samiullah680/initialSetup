import {
  Button,
  Card,
  CheckBox,
  FlexChild,
  FlexLayout,
  FormElement,
  Switcher,
  TextStyles,
  ToolTip,
} from "@cedcommerce/ounce-ui";
import magentoIcon from "../../assets/icons/magento-logo.svg";

const Setting = () => {
  return (
    <>
      <div className="mt-20"></div>
      <FormElement key="">
        <Card cardType="Bordered">
          <FlexLayout spacing="tight">
            <img src={magentoIcon} alt="" srcSet="" width="24" height="24" />

            <TextStyles
              alignment="left"
              fontweight="extraBold"
              subheadingTypes="XS-1.6"
              textcolor="dark"
              type="SubHeading"
              utility="none"
            >
              Magento Settings
            </TextStyles>
          </FlexLayout>
          <div className="mt-12"></div>
          <FlexLayout halign="fill" spacing="extraTight">
            <FlexChild>
              <>
                <TextStyles
                  alignment="left"
                  fontweight="normal"
                  subheadingTypes="XS-1.6"
                  textcolor="dark"
                  type="SubHeading"
                  utility=""
                >
                  Match with Target
                  <em
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </em>
                </TextStyles>
                <TextStyles
                  alignment="left"
                  fontweight="normal"
                  lineHeight="LH-2.0"
                  paragraphTypes="MD-1.4"
                  subheadingTypes="XS-1.6"
                  textcolor="light"
                  type="Paragraph"
                  utility="none"
                >
                  Atleast one should be selected
                </TextStyles>
              </>
            </FlexChild>
            <FlexChild>
              <FlexLayout spacing="loose">
                <CheckBox id="" labelVal="SKU" name="Name" checked={false} />
                <CheckBox id="" labelVal="Item Name" name="Name" />
              </FlexLayout>
            </FlexChild>
          </FlexLayout>
          <hr className="custom-hr mb-15 mt-15" />
          <FlexLayout spacing="loose" valign="center">
            <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
              <FlexLayout halign="fill" valign="center">
                <FlexChild mobileWidth={window.innerWidth < 767 ? "100" : ""}>
                  <FlexLayout spacing="tight" valign="center" halign="fill">
                    <FlexLayout wrap="noWrap" spacing="tight" valign="center">
                      <Switcher checked={true} />
                      <div className="custtom_tooltip">
                        <ToolTip
                          helpText="Select Warehouses to sync inventories between Zoho inventory & Magento store for selected warehouse (available in Zoho Inventory account). By default, the app syncs inventory for all Zoho warehouses."
                          position="top"
                          open={false}
                        >
                          <Button thickness="thin" type="TextButton">
                            Inventory Syncing
                          </Button>
                        </ToolTip>
                      </div>
                    </FlexLayout>

                    <Button
                      halign="Center"
                      iconAlign="left"
                      length="none"
                      thickness="thin"
                      type="TextButton"
                      disable={true}
                    >
                      Add Warehouses
                    </Button>
                  </FlexLayout>
                </FlexChild>
                <FlexChild>
                  <TextStyles
                    alignment="left"
                    fontweight="normal"
                    lineHeight="LH-2.0"
                    paragraphTypes="MD-1.4"
                    subheadingTypes="XS-1.6"
                    textcolor="light"
                    type="Paragraph"
                    utility="custom-warehouse"
                  >
                    Magento Warehouse Synced
                  </TextStyles>
                </FlexChild>
              </FlexLayout>
            </FlexChild>
            <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
              <FlexLayout halign="fill">
                <FlexChild>
                  <FlexLayout spacing="tight" valign="center">
                    <Switcher checked={true} />
                    <div className="custtom_tooltip">
                      <ToolTip
                        helpText="Enable to sync new Magento orders to the Zoho Inventory accoun"
                        position="top"
                        open={false}
                      >
                        <Button thickness="thin" type="TextButton">
                          Order Syncing
                        </Button>
                      </ToolTip>
                    </div>
                  </FlexLayout>
                </FlexChild>
              </FlexLayout>
            </FlexChild>
            <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
              <FlexLayout halign="fill">
                <FlexChild>
                  <FlexLayout spacing="tight" valign="center">
                    <Switcher checked={false} />
                    <div className="custtom_tooltip">
                      <ToolTip
                        helpText="Enable to sync shipments between Zoho Inventory & Magento store. (For Magento orders, which are created in the Zoho Inventory account)."
                        position="top"
                        open={false}
                      >
                        <Button thickness="thin" type="TextButton">
                          Shipment Syncing
                        </Button>
                      </ToolTip>
                    </div>
                  </FlexLayout>
                </FlexChild>
              </FlexLayout>
            </FlexChild>
          </FlexLayout>
        </Card>
      </FormElement>
    </>
  );
};

export default Setting;
