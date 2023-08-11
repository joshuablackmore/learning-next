import HeroServer from "./hero/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <main className="">
      <HeroServer />
      <Portfolio />
    </main>
  );
}
