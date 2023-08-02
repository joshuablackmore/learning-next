import { PortableTextBlock } from "sanity";

export type Blog = {
    _id: string;
    _createdAt: Date;
    name: string;
    image: string;
    alt: string;
    slug: string;
    excerpt: string;
    content: PortableTextBlock[];
}