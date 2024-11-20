import ContactForm from "./components/contact/Contact";
import HeroServer from "./components/hero/Hero";
import Gallery from "./components/insta/Insta";
import Portfolio from "./components/portfolio/Portfolio";

export default function Home() {
  return (
    <main>
      <HeroServer />
      <Portfolio />
      {/* <Gallery /> */}
      <ContactForm />
    </main>
  );
}
