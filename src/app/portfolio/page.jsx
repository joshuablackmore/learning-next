import { getArtwork } from "../../../sanity/schemas/sanity-utils";
import ClientPortfolio from "./client-portfolio";

export default async function Portfolio() {
  const data = await getArtwork();

  return (
    <>
      <div className="min-h-screen bg-light1 flex flex-col pt-[45px] pb-10 gap-2 sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3">
        <h1 className="flex justify-center items-center font-bold text-xl pt-4">
          Portfolio
        </h1>
        {data.map((imgs) => (
          <div key={imgs._id} className="flex justify-center items-center">
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
