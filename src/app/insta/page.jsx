import ClientInsta from "./client-insta";

async function getPics() {
  const token = process.env.Instagram_API_KEY;
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${token}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Gallery = async () => {
  const insta = await getPics();
  const lessPics = insta.data.slice(0, 8);

  console.log(lessPics);

  return <ClientInsta lessPics={lessPics} />;
};

export default Gallery;
