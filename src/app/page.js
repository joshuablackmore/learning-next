import InstaHome from "./components/InstaHome/InstaHome";
import Footer from "./footer/page";
import Hero from "./hero/hero";




export default function Home() {

 
  return (
    <main className="">
      <div className="">
         <Hero />
      </div>
      
        <div>
          <InstaHome />
        </div>
        <footer>
          <Footer />
        </footer>
    </main>
    
  )
}
