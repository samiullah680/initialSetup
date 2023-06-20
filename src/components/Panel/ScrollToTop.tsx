import React, { useEffect, } from 'react';
import { useLocation } from "react-router";
import { DI, DIProps } from '../../Core';

export interface Props extends DIProps {
    children?: any;
}
function ScrollToTop(props: Props): JSX.Element {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>;
}
export default DI(ScrollToTop);

// This component will scroll the page to the top when routes will change