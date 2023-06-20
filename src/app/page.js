import Footer from "./footer/page";
import Hero from "./hero/hero";
import Gallery from "./insta/page";



export default function Home() {

 
  return (
    <main className="">
      <div className="">
         <Hero />
      </div>
      
        <div>
          <Gallery />
        </div>
        <footer>
          <Footer />
        </footer>
    </main>
    
  )
}
