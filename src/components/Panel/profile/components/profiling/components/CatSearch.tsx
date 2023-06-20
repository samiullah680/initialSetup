import { Card, Select, Skeleton, Tag } from "@cedcommerce/ounce-ui";
import { useEffect, useState } from "react";
import { getCategoryData } from "../../../dummyData";

function CatSearch(props: any) {
  const [options, setOptions] = useState<any>();
  const [value, setValue] = useState<any>("");
  const [showSkeleton, setSkeleton] = useState<boolean>(true);
  const [showBadgeData, setShowBadgeData] = useState<any>("");
  useEffect(() => {
    // props.di.GET('setuphome/request/getCategorydata').then((e: any) => {
    const e = getCategoryData;
    const tmpopt: any = e.data.map((ele: any) => {
      return {
        label: ele.category_path,
        value: ele.category_id,
      };
    });
    setSkeleton(false);
    setOptions(tmpopt);
    // });

    // condition for showing category and category label in edit profile
    if (props.initial != undefined && props.initial !== "") {
      setValue(props?.initial);
      setShowBadgeData(props?.category);
    }
  }, []);

  useEffect(() => {
    props.onchange(value, showBadgeData);
  }, [value]);

  /**Rendering Skeleton initially when options is preparing */
  if (showSkeleton) {
    return (
      <>
        <Skeleton type="line" height="30px" line={2} />
      </>
    );
  }

  return (
    <>
      {/* profiling section */}
      <Select
        searchEable
        ellipsis={true}
        options={options}
        thickness="thin"
        value={value}
        popoverContainer="element"
        onChange={(e: any, data: any) => {
          setValue(e);
          setShowBadgeData(data.label);
          // props?.onsave(false); // for enabling the save button
        }}
      />
      {value != undefined && value != "" && (
        <Card cardType="Plain" extraClass="mt-10">
          <Tag
            destroy={() => {
              if (props.attributeLoading) {
                // props.warn(
                //     'Please Wait, Attributes are loading'
                // );
                return;
              }
              setValue("");
              props.onRemove();
            }}
          >
            {showBadgeData}
          </Tag>
        </Card>
      )}
    </>
  );
}

export default CatSearch;
