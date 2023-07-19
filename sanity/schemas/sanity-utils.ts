import { createClient, groq } from "next-sanity";
import { Artwork } from "../../types/Artwork";
import { ProfilePic } from "../../types/ProfilePic";
import { Home } from "../../types/Home";


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



