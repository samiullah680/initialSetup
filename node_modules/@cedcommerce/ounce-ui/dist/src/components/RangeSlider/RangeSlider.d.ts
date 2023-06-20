import { FC } from "react";
import "antd/dist/antd.css";
import "./RangeSlider.css";
declare const RangeSlider: FC<RangeSliderI>;
export interface RangeSliderI {
    defaultValue?: any;
    range?: boolean | any;
    dots?: boolean;
    disabled?: boolean;
    tooltipVisible?: boolean;
    vertical?: boolean;
    reverse?: boolean;
    step?: number | null;
    autoFocus?: boolean;
    included?: boolean;
    max?: number;
    min?: number;
    marks?: object | number | any;
    tipFormatter?: string | any;
    onChange?: (() => void) | undefined | any;
    onAfterChange?: (() => void) | undefined | any;
    className?: string;
    tooltipPlacement?: "top" | "bottom" | "left" | "right";
}
export default RangeSlider;
