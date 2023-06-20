declare const _default: {
    title: string;
    component: {
        ({ onChange, name, error, innerPreIcon, innerSufIcon, autocomplete, clearButton, strength, show, helpIcon, disabled, ...props }: import("../TextField").TextfieldI): JSX.Element;
        defaultProps: {
            type: string;
            placeHolder: string;
            value: string;
            thickness: string;
            onFocus: boolean;
            loading: boolean;
            required: boolean;
        };
    };
    argTypes: {
        value: {
            control: {
                type: string;
            };
        };
        placeHolder: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        name: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        type: {
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        showHelp: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        thickness: {
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        innerPreIcon: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        innerSufIcon: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        clearButton: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        onEnter: {
            control: {
                disable: boolean;
            };
        };
        onChange: {
            control: {
                disable: boolean;
            };
        };
        error: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        required: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        autocomplete: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        loading: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        min: {
            control: {
                type: string;
            };
            defaultValue: number;
        };
        max: {
            control: {
                type: string;
            };
            defaultValue: number;
        };
        readOnly: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        id: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        tabIndex: {
            control: {
                type: string;
            };
            defaultValue: number;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
