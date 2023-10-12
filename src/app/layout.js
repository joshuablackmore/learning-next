import ActiveSectionContextProvider from "../../context/active-section-context";
import Footer from "./components/Footer/Footer";
import Nav2 from "./components/NavBar/Nav2";

import "./globals.css";
import { Jost } from "next/font/google";

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
        <div className="container flex flex-col">
          <ActiveSectionContextProvider>
            <Nav2 />
            <div className="flex-1">{children}</div>
          </ActiveSectionContextProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
