import {
  ActionList,
  Button,
  FlexLayout,
  Topbar
} from "@cedcommerce/ounce-ui";
import { useCallback, useState } from "react";
import { Bell, ChevronDown, ChevronUp, LogOut, Mail, User } from "react-feather";
import { useNavigate } from "react-router-dom";
import MagentoLogo from "../../assets/icons/magento-logo.svg";
import WooCommerceLogo from "../../assets/icons/woocommerce-logo.svg";

const PanelHeader = () => {
  const navigate = useNavigate();
  // const [userPopover, setUserPopover] = useState(false);
  const [logoutLoading, setlogoutLoading] = useState(false);

  const generalDetails = [
    { label: "Name", value: "Cedcoss" },
    { label: "Email", value: "cedcoss@mail.com" },
  ];
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  return (
    <Topbar
      connectRight={
        <FlexLayout valign="center" spacing="tight">
          <ActionList
            activator={<Button
              icon={active ? <ChevronUp /> : <ChevronDown />}
              iconAlign="right"
              onClick={toggleActive}
              type="Outlined">More Actions</Button>}
            open={active}
            onClose={toggleActive}
            options={[
              {
                items: [
                  {
                    content: 'WoCommerce',
                    prefixIcon: <img src={WooCommerceLogo} />,
                    // onClick: function noRefCheck() { }
                  },
                  {
                    content: 'Magento',
                    prefixIcon: <img src={MagentoLogo} />,
                    // onClick: function noRefCheck() { }
                  }
                ],
              }
            ]}
          />
          {/* <Popover
            activator={<Button
              icon={active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              iconAlign="right"
              onClick={toggleActive}
              type="Outlined">Select Actions</Button>}
            open={active}
            popoverContainer="element"
            onClose={toggleActive}
            popoverWidth={180}
          >
            <div className="custom-popover-action">
              <FlexLayout direction='vertical' childWidth='fullWidth' wrap='noWrap'>
                <Button content="WoCommerce" icon={<img src={WooCommerceLogo} />} halign='Start' type="Outlined" length="fullBtn" />
                <Button content="Magento" icon={<img src={MagentoLogo} />} halign='Start' type="Outlined" length="fullBtn" />
                <Button content="Magento" icon={<img src={MagentoLogo} />} halign='Start' type="Outlined" length="fullBtn" />
              </FlexLayout>
            </div>
          </Popover> */}
          <Button
            type="Outlined"
            thickness="extraThin"
            icon={<Bell size={20} />}
            onClick={() => navigate("activities")}
          />
          {/* <Popover popoverContainer="body"
            posC="right"
            open={userPopover}
            onClose={() => {
              setUserPopover(false);
            }}
            activator={
              <Button type="Outlined" thickness="thin" icon={
                <User
                  size={20}
                  color="#000"
                />
              }
                iconAlign="left" iconRound={false} onClick={() => {
                  setUserPopover(!userPopover);
                }}
              />
            }>
            <FlexLayout
              direction='vertical'
              spacing='mediumLoose'
              wrap="noWrap">
              {generalDetails.map((gd, index) => (
                <FlexLayout key={index}
                  spacing='tight' wrap="noWrap">
                  {gd.label == "Name" ?
                    <User size={20} color="#3B424F" />
                    :
                    <Mail size={20} color="#3B424F" />
                  }
                  <>
                    <TextStyles fontweight="bold" textcolor="dark" utility="heading-break--word" type="simpleText">
                      {gd.label}
                    </TextStyles>
                    <TextStyles fontweight="normal" textcolor="light" utility="heading-break--word" type="simpleText">
                      {gd.value}
                    </TextStyles>
                  </>
                </FlexLayout>
              ))}
            </FlexLayout>

            <hr className="mt-15 mb-15" />
            <Button type="Outlined"
              loading={logoutLoading}
              thickness="thin"
              length="fullBtn"
              onClick={() => {
                logoutHandler();
              }}>
              Log out
            </Button>
          </Popover> */}
        </FlexLayout>
      }
      account={{
        name: (
          <Button
            icon={<User size={20} />}
            type="Outlined"
            thickness="thin"
            iconAlign="left"
          />
        ),
        userPopoverMenu: (
          <div className="custom-popover-action">
            {generalDetails.map((gd, index) => (
              <div key={index}>
                {gd.label == "Name" ?
                  <Button halign="Start" icon={<User size={20} />} length="fullBtn" type="Outlined">{gd.value}</Button>
                  :
                  <Button halign="Start" icon={<Mail size={20} />} length="fullBtn" type="Outlined">{gd.value}</Button>
                }
              </div>
            ))}
            <Button loading={logoutLoading} halign="Start" icon={<LogOut size={20} />} length="fullBtn" type="DangerOutlined">Logout</Button>
          </div>
        )
      }}
    />
  );
};

export default PanelHeader;
