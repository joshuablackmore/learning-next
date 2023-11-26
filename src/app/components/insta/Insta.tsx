import { Title } from "../Reusables/title";
import ClientInsta from "./client-insta";

export type instaMedia = {
  id: number;
  media_type: string;
  media_url: string;
  caption: string;
};

type instaResponse = {
  data: instaMedia[];
};

async function getPics(): Promise<instaResponse> {
  const token = process.env.Instagram_API_KEY;
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${token}`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json();
}

const Gallery = async (): Promise<JSX.Element> => {
  const insta = await getPics();
  const lessPics = insta.data.slice(0, 8);

  console.log(lessPics);

  return (
    <div id="insta" className="pt-[60px] xl:pt-[75px]">
      <div>
        <Title title="Instagram feed" />
      </div>
      <div className=" bg-light1  sm:grid sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-3 lg:grid-rows-3 ">
        {lessPics.map((media) => (
          <div key={media.id} className="flex flex-col gap-2 ">
            <ClientInsta
              media_url={media.media_url}
              media_type={media.media_type}
              id={media.id}
              caption={media.caption}
            />
          </div>
        ))}
      </div>
    </div>
  );

  // <ClientInsta lessPics={lessPics} />
};

export default Gallery;
