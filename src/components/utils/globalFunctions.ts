export const queryFieldConditions: any = [
  {
    label: "Equals",
    value: "==",
  },
  {
    label: "Not Equals",
    value: "!=",
  },
  {
    label: "Contains",
    value: "%LIKE%",
  },
  {
    label: "Not Contains",
    value: "!%LIKE%",
  },
];

export const makeRuleGroupField = (obj: any) => {
  const tempOptions: any = [];
  for (const key in obj) {
    tempOptions.push({
      label: obj[key],
      value: key,
    });
  }
  return tempOptions;
};

export function upperCaseLabel(value: string) {
  const sub = value.charAt(0).toUpperCase();
  return sub + value.substring(1, value?.length);
}

export function checkMappedAttribute(name: string, attributeObj: any) {
  for (const key in attributeObj) {
    if (name.toLowerCase().includes(attributeObj[key].value.toLowerCase()))
      return attributeObj[key].value;
  }
  return "";
}

export function makeSelectOption(arr: any[]) {
  const tempOptions: any[] = [];
  arr.forEach((it) => {
    if (typeof it !== "object")
      tempOptions.push({
        label: it,
        value: it,
      });
    else {
      tempOptions.push({ label: it.name, value: it.id });
    }
  });
  return tempOptions;
}
