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
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Gallery = async (): Promise<JSX.Element> => {
  const insta = await getPics();
  const lessPics = insta.data.slice(0, 8);

  console.log(lessPics);

  return (
    <div className="bg-light1 pt-[45px] sm:grid sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3 xl:pt-[60px]">
      {lessPics.map((media) => (
        <div key={media.id} className="flex flex-col gap-2 pb-10  ">
          <ClientInsta
            media_url={media.media_url}
            media_type={media.media_type}
            id={media.id}
            caption={media.caption}
          />
        </div>
      ))}
    </div>
  );

  // <ClientInsta lessPics={lessPics} />
};

export default Gallery;
