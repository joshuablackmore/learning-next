import ContactForm from "./components/contact/Contact";
import HeroServer from "./components/hero/Hero";
import Gallery from "./components/insta/Insta";
import Portfolio from "./components/portfolio/Portfolio";

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
