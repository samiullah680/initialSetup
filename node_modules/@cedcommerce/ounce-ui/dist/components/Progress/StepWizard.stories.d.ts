import React from "react";
import { Story } from "@storybook/react";
import { StepWizardI } from "./StepWizard";
declare const _default: {
    title: string;
    component: React.FC<StepWizardI>;
    argTypes: {
        alignment: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        StepHeading: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string[];
        };
        icon: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: JSX.Element[];
        };
        steppercolor: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        StepSubHeading: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string[];
        };
        halign: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        textOrder: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        utility: {
            table: {
                disable: boolean;
            };
        };
        enableNumbers: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
export declare const Primary: Story<StepWizardI>;
