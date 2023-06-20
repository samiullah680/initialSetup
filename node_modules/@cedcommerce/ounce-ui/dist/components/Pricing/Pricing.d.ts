import React from "react";
import "./Pricing.css";
declare const Pricing: React.FC<PricingI>;
export interface PricingI {
    tabsData?: any;
    faqData?: any;
    title?: string;
    description?: string;
    buttonText?: string;
    faqTitle?: string;
    faqAction?: string;
    faqAccordionTitle?: string;
}
export default Pricing;
