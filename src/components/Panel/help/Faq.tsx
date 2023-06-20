import {
  Accordion,
  Card,
  FlexLayout,
  PageHeader,
  Skeleton,
  TextField,
  TextStyles
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";

function Faq() {
  const [loader, setLoader] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [clicked, setClicked] = useState(-1);

  const handleToggle = (index: any) => {
    clicked === index ? setClicked(-1) : setClicked(index);
  };

  // Please remove this code, this is used to show skeleton
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Quick answers to all your queries. You can browse through or search for relevant keywords."
      />
      <div className="mt-20">
        <FlexLayout direction="vertical" spacing="mediumLoose">
          <TextField
            clearButton
            clearFunction={() => {
              setKeyword("");
            }}
            name=""
            onChange={(e: string) => setKeyword(e)}
            placeHolder="Search"
            showHelp=""
            thickness="thick"
            value={keyword}
          />

          <Card cardType="Default">
            <FlexLayout direction="vertical" spacing="extraLoose">
              <FlexLayout halign="fill" valign="center">
                <TextStyles
                  type="SubHeading"
                  subheadingTypes="XS-1.6"
                  fontweight="bold"
                >
                  Common Queries
                </TextStyles>
              </FlexLayout>

              <FlexLayout direction="vertical" spacing="mediumLoose">
                <React.Fragment key=".0">
                  {loader ? (
                    <Skeleton line={5} />
                  ) : (
                    <>
                      {Array(5)
                        .fill(0)
                        .map((item, index) => (
                          <Accordion
                            key={index}
                            active={clicked == index}
                            boxed
                            iconAlign="right"
                            onClick={() => handleToggle(index)}
                            title={`Accordian ${index}`}
                          >
                            <FlexLayout
                              direction="vertical"
                              spacing="extraTight"
                            >
                              <TextStyles textcolor="bold">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: `This is accordian ${index}`,
                                  }}
                                ></div>
                              </TextStyles>
                            </FlexLayout>
                          </Accordion>
                        ))}
                    </>
                  )}
                </React.Fragment>
              </FlexLayout>
            </FlexLayout>
          </Card>
        </FlexLayout>
      </div>
    </>
  );
}

export default Faq;
