import { ButtonLinkProps } from './button';
import { KeyValuePair } from './utils';
export type ContactSupportProps = {
    subject?: string;
    email?: string;
    /**
     * Maps to a Key: Value table in the email body
     * -----------------------------------
     * | Current URL: window.location.href
     * | Key: Value
     * -----------------------------------
     * Current URL is automatically added to the body if one is not provided
     **/
    body?: KeyValuePair | string;
};
export declare const ContactSupportLink: import("react").ForwardRefExoticComponent<Omit<ContactSupportProps & Omit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "href">, "ref"> & import("react").RefAttributes<HTMLAnchorElement>>;
export declare const ContactSupportButton: import("react").ForwardRefExoticComponent<ContactSupportProps & Omit<ButtonLinkProps, "href" | "to"> & import("react").RefAttributes<HTMLAnchorElement>>;
