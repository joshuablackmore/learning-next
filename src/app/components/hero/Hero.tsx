import { getHome } from "../../../../sanity/schemas/sanity-utils";
import HeroClient from "./client-comp";

export default async function HeroServer() {
  const data = await getHome();
  const { heading, intro, _id } = data;

  return <HeroClient heading={heading} intro={intro} />;
}
