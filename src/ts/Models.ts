export interface NameURLModel {
    name: string;
    url: string;
}

export interface PersonModel {
    name: string;
    photo: string;
    creds?: string[];
    pronouns?: string;
    leadership: boolean;
    roles?: string[];
    email: string;
    bio: string;
    skills?: string[];
    socials?: NameURLModel[];
}

export interface OrgModel {
    name: string;
    logo?: string;
    parent?: NameURLModel;
    subtitle?: string;
    corp_form?: string;
    email?: string;
    phone?: string;
    url?: string;
    bookingurl?: string;
    description?: string;
    office?: {
        address?: string;
        address2?: string;
        city?: string;
        state?: string;
        postal?: string;
    };
    socials?: NameURLModel[];
}

export interface NavModel {
    path: string;
    title: string;
}

export interface GlobeModel {
    lng: number;
    lat: number;
    zoom: number;
    style: string;
    bearing: number;
    pitch?: number;
    color?: string;
    light: boolean;
    linewidth?: number;
    interactive?: boolean;
    sec?: number;
}

export interface ImageModel {
    src: string;
    alt: string;      
}

export interface ConfigModel extends OrgModel {
    people: PersonModel[],
    clients: OrgModel[],
    map: GlobeModel
}


export interface StylesModel {
    success: string;
    danger: string;
    link: string;
    info: string;
    dark: string;
    "shadow-offset": string;
}