
import Footer from './components/Footer/Footer'
import Nav2 from './components/NavBar/Nav2'


import './globals.css'
import { Source_Code_Pro } from 'next/font/google'
 

const inter = Source_Code_Pro({ 
  weight: '400',
  subsets: ['latin'] })

export const metadata = {
  title: 'learning by breaking',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Nav2 />
          {children}
          <Footer />
        </div>
      </body>
   
    </html>
  )
}
