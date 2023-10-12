import ContactForm from "./contact/page";
import HeroServer from "./hero/page";
import Gallery from "./insta/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <main>
      <HeroServer />
      <Portfolio />
      <Gallery />
      <ContactForm />
    </main>
  );
}
