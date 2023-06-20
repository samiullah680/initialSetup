import { Button, Card, FlexLayout, PageHeader } from "@cedcommerce/ounce-ui";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { PanelLayout } from "../../layout";
import Pricing from "./components/Pricing";
import Profiling from "./components/profiling/Profiling";
import QueryBuilder from "./components/QueryBuilder";
import TemplateName from "./components/TemplateName";

function Create(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader
        sticky
        title="Template"
        description="This is a boilerplate panel setup for"
        action={
          <FlexLayout spacing="loose">
            <Button
              thickness={"thin"}
              type={"Outlined"}
              onClick={() => navigate("/panel/:UUID/profile")}
            >
              Back
            </Button>
            <Button thickness={"thin"} disable>
              Save
            </Button>
          </FlexLayout>
        }
      />

      <Card>
        {/* TemplateName Component */}
        <TemplateName />

        {/* Query Builder Component */}
        <QueryBuilder />

        {/* Category selection component */}
        <Profiling />

        {/* Custom Pricing Component  */}
        <Pricing />
      </Card>
    </>
  );
}

export default Create;
