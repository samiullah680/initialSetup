import { SelectI } from "../Select";
import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Basic: {
    (args: SelectI): JSX.Element;
    args: {
        options: {
            value: string;
            label: string;
            group: {
                value: string;
                label: string;
            }[];
        }[];
    };
};
export declare const SelectRequired: any;
export declare const DisableSelect: any;
export declare const SelectLoading: any;
export declare const SelectPopoverPosition: any;
export declare const SearchEnableSelect: any;
export declare const LabelInLineSelect: any;
export declare const SelectWithHelpTextAndIcon: any;
export declare const SelectWithHelpTextAndWithoutIcon: any;
