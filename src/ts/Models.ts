export interface PersonModel {
    name: string;
    photo: string;
    creds?: string[];
    pronouns?: string;
    roles?: string[];
    email: string;
    bio: string;
    skills?: string[];
    socials?: {
        url?: string;
        name?: string;
    }[];
}

export interface OrgModel {
    name: string;
    subtitle?: string;
    email?: string;
    phone?: string;
    bookingurl?: string;
    description?: string;
    office?: {
        address?: string;
        address2?: string;
        city?: string;
        state?: string;
        postal?: string;
    };
    socials?: {
        url?: string;
        name?: string;
    }[];
}

export interface NavModel {
    path: string;
    title: string;
}

export interface GlobeModel {
    lng: number;
    lat: number;
    zoom: number;
    mapstyle: string;
    bearing: number;
    pitch?: number;
    color?: string;
    accesstoken: string;
    linework?: boolean;
    linewidth?: number;
    interactive?: boolean;
    sec?: number;
}

export interface ImageModel {
    src: string;
    alt: string;      
}

export type MapBoxLayerModel = [
    string,
    { 
        id: string,
        layout: object,
        source: string,
        "source-layer": string,
        type: string
    }
]