import { Artwork } from "../../../types/Artwork";
import { createClient, groq } from "next-sanity";

export async function getData(): Promise<Artwork[]>{
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
            "image": image.asset->url,
           
        }`
    )
};
