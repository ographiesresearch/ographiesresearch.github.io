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
    parent: NameURLModel;
    subtitle?: string;
    corp_form?: string;
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

export interface ConfigModel extends OrgModel {
    people: PersonModel[],
    map: GlobeModel
}