export interface Image {
    url: string;
    prompt: string;
}

export interface NavLinkProps {
    label: string;
    href: string;
    isActive?: boolean;
}