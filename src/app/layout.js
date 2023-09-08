import Footer from "./components/Footer/Footer";
import Nav2 from "./components/NavBar/Nav2";



import "./globals.css";
import { Jost } from 'next/font/google';

const inter = Jost({
  subsets: ["latin"],
});

export const metadata = {
  title: "Peter Blackmore",
  description: "Website by Joshua",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Nav2 />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
