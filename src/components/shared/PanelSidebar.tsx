import { NewSidebar } from "@cedcommerce/ounce-ui";
import { bag, box, home, note, setting } from "@cedcommerce/ounce-ui/dist/Icon";
// import { Settings } from "react-feather";
import { useNavigate } from "react-router-dom";
// import FAQ from "../../assets/icons/faq-icon.svg";
import Tag from "../../assets/icons/tag.svg";
import logo from '../../assets/images/logo.svg';
import mlogo from '../../assets/images/m-logo.svg';

const PanelSidebar = () => {
    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function onChange(e: any): void {
        if (e.path.includes('https:')) window.open(e.path);
        else navigate(e.path);
    }

    function getCurrentPath(path: string) {
        const newpAth = '/' + path.split('/')[1] + '/' + path.split('/')[3];
        return newpAth;
    }

    const menu = [
        {
            id: "dashboard",
            content: "Dashboard",
            path: "dashboard",
            icon: home,
        },
        {
            id: "profile",
            content: "Category Template",
            path: "profile",
            icon: box,
        },
        {
            id: "products",
            content: "Manage Products",
            path: "products",
            icon: note,
        },
        {
            id: "orders",
            content: "Orders",
            path: "orders",
            icon: bag,
        },
        {
            id: "return-order",
            content: "Return Order",
            path: "return",
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.165 12.8L12 14.965L14.165 17.13" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" />
                <path d="M18.3334 18.3335V16.6668C18.3334 15.7463 17.5872 15.0001 16.6667 15.0001H12.5"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path
                    d="M10.6666 18.3335H3.33319C2.41271 18.3335 1.6665 17.5873 1.6665 16.6668V3.33331C1.6665 2.41283 2.41271 1.66663 3.33319 1.66663H16.6667C17.5872 1.66663 18.3334 2.41283 18.3334 3.33331V11.6667"
                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round" />
                <path
                    d="M13.3333 5C13.3333 5.88407 12.9821 6.73192 12.3569 7.35705C11.7318 7.98218 10.8839 8.33337 9.99988 8.33337C9.11581 8.33337 8.26796 7.98218 7.64283 7.35705C7.0177 6.73192 6.6665 5.88407 6.6665 5"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>,
        },
        {
            id: "setting",
            content: "Configuration",
            path: "settings",
            icon: setting,
        },
        {
            id: "pricing",
            content: "Pricing",
            path: "pricing",
            icon: <img src={Tag} alt="Pricing" />,
        },
        // {
        //   id: "queuedtasks",
        //   content: "Activities",
        //   path: "activities",
        //   icon: activity,
        // },
    ];

    const subMenu = [
        {
            id: "faq",
            content: "FAQ",
            path: "faq",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="none">
                    <path
                        d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                        stroke="#707070"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.3625 11.25C11.6564 10.4146 12.2364 9.71011 12.9999 9.2614C13.7634 8.81268 14.6611 8.64865 15.534 8.79837C16.4068 8.94809 17.1985 9.40188 17.7688 10.0794C18.3392 10.7569 18.6513 11.6144 18.65 12.5C18.65 15 14.9 16.25 14.9 16.25"
                        stroke="#707070"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15 21.25H15.0125"
                        stroke="#707070"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
    ];

    return (
        <NewSidebar
            menu={menu}
            subMenu={subMenu}
            mobileLogo={
                <img src={mlogo} width="33" />
            }
            logo={
                <img src={logo} width="150" />
            }
            path={getCurrentPath(window.location.pathname)}
            onChange={(e: Event) => onChange(e)}
        />
    );
};

export default PanelSidebar;
