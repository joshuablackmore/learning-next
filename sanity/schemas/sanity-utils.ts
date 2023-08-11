import { createClient, groq } from "next-sanity";
import { Artwork } from "../../types/Artwork";
import { ProfilePic } from "../../types/ProfilePic";
import { Home } from "../../types/Home";
import { Blog } from "../../types/Blog"


export async function getArtwork(): Promise<Artwork[]>{
    const client = createClient({
    projectId: '7gqekvwy',
    dataset: "production",
    apiVersion: "2023-07-14",
    });

    return client.fetch(
        groq`*[_type == "artwork"]{
            _id,
            _createdAt,
            name,
            alt,
            "image": image.asset->url,
        }`
    )
};

export async function getProfilePic(): Promise<ProfilePic[]>{
    const client = createClient({
    projectId: '7gqekvwy',
    dataset: "production",
    apiVersion: "2023-07-14",
    });

    return client.fetch(
        groq`*[_type == "portfolio"]{
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
        }`
    )
};

export async function getHome(): Promise<Home[]>{
    const client = createClient({
    projectId: '7gqekvwy',
    dataset: "production",
    apiVersion: "2023-07-14",
    });

    return client.fetch(
        groq`*[_type == "home"]{
            _id,
            _createdAt,
            heading,
            intro,
        }`
    )
};

export async function getBlog(): Promise<Blog[]>{
    const client = createClient({
        projectId: '7gqekvwy',
        dataset: "production",
        apiVersion: "2023-07-14",
    })

    return client.fetch(
        groq`*[_type == "blog"]{
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
            alt,
            content,
            excerpt,
            slug,
        }`
    )
};

export async function getDynamicBlog(slug: string): Promise<Blog> {
    const client = createClient({
        projectId: '7gqekvwy',
        dataset: "production",
        apiVersion: "2023-07-14",
    })

    return client.fetch(
        groq`*[_type == "blog" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            content,
        }`,
        { slug }
    )
}


