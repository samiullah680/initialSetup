import "./Toast.css";
import PropTypes from "prop-types";
declare function Toast({ message, type, onDismiss, timeout }: any): JSX.Element;
declare namespace Toast {
    var propTypes: {
        message: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        timeout: PropTypes.Requireable<number>;
        onDismiss: PropTypes.Validator<(...args: any[]) => any>;
    };
    var defaultProps: {
        type: string;
        message: string;
        timeout: number;
        onDismiss: () => null;
    };
}
export default Toast;
