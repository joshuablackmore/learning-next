import { PortableTextBlock } from "sanity";

export type Home = {
    _id: string;
    _createdAt: Date;
    heading: string;
    intro: PortableTextBlock[];
    
}