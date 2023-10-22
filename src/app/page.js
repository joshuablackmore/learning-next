import ContactForm from "./contact/page";
import HeroServer from "./hero/page";
import Gallery from "./insta/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <main>
      //Hey Angus, thanks for having a look at this!!!!
      <HeroServer />
      <Portfolio />
      <Gallery />
    </main>
  );
}
