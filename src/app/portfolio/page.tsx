import { getArtwork } from "../../../sanity/schemas/sanity-utils";
import ClientPortfolio from "./client-portfolio";

export default async function Portfolio() {
  const data = await getArtwork();

  return (
    <>
      <div className="flex min-h-screen flex-col gap-2 bg-light1 pb-10 pt-[45px] sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3">
        <h1 className="flex items-center justify-center pt-4 text-xl font-bold">
          Portfolio
        </h1>
        {data.map((imgs) => (
          <div key={imgs._id} className="flex items-center justify-center">
            <ClientPortfolio
              id={imgs._id}
              name={imgs.name}
              image={imgs.image}
              alt={imgs.alt}
            />
          </div>
        ))}
      </div>
    </>
  );
}
