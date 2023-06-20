declare function Faq({ title, icon, iconAlign, textColor, count, data, onSearch, Searchvalue, description, onClick, onEnter, clearFunction, reverseNavigation, placeholder, }: FaqI): JSX.Element;
export interface FaqI {
    title?: string;
    reverseNavigation?: boolean;
    description?: string;
    options?: any;
    onEnter?: (e: string) => void;
    Searchvalue?: any;
    onSearch?: (e: string) => void;
    onClick?: () => void;
    data?: any;
    textColor?: string;
    icon?: boolean;
    iconAlign?: string | any;
    count?: number;
    clearFunction?: (e: string) => void;
    placeholder?: string;
}
export default Faq;
