import { getHome } from "../../../sanity/schemas/sanity-utils";
import HeroClient from "./client-comp";

export default async function HeroServer() {
  const data = await getHome();

  return (
    <div className="pt-[45px] xl:pt-[60px] border-b">
      {data.map((info) => (
        <div key={info._id}>
          <HeroClient heading={info.heading} intro={info.intro} />
        </div>
      ))}
    </div>
  );
}
