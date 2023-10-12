import { getArtwork } from "../../../sanity/schemas/sanity-utils";
import ClientPortfolio from "./client-portfolio";

export default async function Portfolio() {
  const data = await getArtwork();

  return (
    <div id="portfolio" className="pt-[60px] xl:pt-[75px]">
      <div className="pb-4">
        <h1 className="flex items-center justify-center text-xl font-bold ">
          Portfolio
        </h1>
      </div>
      <div className="flex min-h-screen flex-col gap-2 bg-light1 sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-2 ">
        {data.map((imgs) => (
          <div key={imgs._id} className="flex items-center justify-center">
            <ClientPortfolio
              _id={imgs._id}
              name={imgs.name}
              image={imgs.image}
              alt={imgs.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
