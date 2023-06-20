import {
  Button,
  FlexLayout,
  Grid,
  PageHeader,
  spread,
  TextStyles
} from "@cedcommerce/ounce-ui";
import { useNavigate } from "react-router-dom";
import GuideIcon from "../../../assets/icons/guide-icon.svg";
import NoTemplate from "../../../assets/images/no-template.svg";
// import { PanelLayout } from "../../layout";
const ProfileGrid = (): JSX.Element => {
  const navigate = useNavigate();
  const columns = [
    {
      align: "center",
      dataIndex: "name",
      key: "name",
      title: "Name",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "category",
      key: "category",
      title: "Category",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "rules",
      key: "rules",
      title: "Rule(s)",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "totalProducts",
      key: "totalProducts",
      title: "Total Product(s)",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "actions",
      key: "actions",
      title: "Actions",
      width: 50,
    },
  ];
  const data = [
    {
      name: "Deafult",
      category: "Home Organizers>Bathroom Supplies>Bathroom Sets",
      rules: "All Products",
      totalProducts: 320,
      actions:
        <FlexLayout halign="center" valign="center">
          <Button type="Plain" icon={spread} />
        </FlexLayout>,
    },
  ];
  return (
    <>
      <PageHeader
        sticky
        title="Template"
        description="This is a boilerplate panel setup for"
        action={
          <FlexLayout spacing="loose">
            <Button
              thickness="thin"
              type="Primary"
              onClick={() => navigate("/panel/:UUID/create-profile")}
            >
              Create Template
            </Button>
            <Button
              thickness="thin"
              disable
              type="Outlined"
              icon={<img src={GuideIcon} alt="Guide" />}
              iconAlign="left"
              iconRound={false}
              content="Guide"
            />
          </FlexLayout>
        }
      />
      {data.length === 0 ? (
        <FlexLayout halign="center" direction="vertical" valign="center" spacing="extraLoose">
          <img src={NoTemplate} alt="no-template" />
          <TextStyles>No Templates Created Yet!</TextStyles>
        </FlexLayout>
      ) : (
        <Grid columns={columns} dataSource={data} />
      )}
    </>
  );
};

export default ProfileGrid;
