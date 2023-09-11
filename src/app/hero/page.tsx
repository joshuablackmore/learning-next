import { getHome } from "../../../sanity/schemas/sanity-utils";
import HeroClient from "./client-comp";

export default async function HeroServer() {
  const data = await getHome();

  return (
    <div className="overflow-auto pt-[45px]  xl:pt-[60px] 2xl:h-[calc(100%-60px)]">
      {data.map((info) => (
        <div key={info._id}>
          <HeroClient heading={info.heading} intro={info.intro} />
        </div>
      ))}
    </div>
  );
}
