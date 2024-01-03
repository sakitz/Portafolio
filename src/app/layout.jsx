import { Roboto_Condensed  } from "next/font/google";
import './globals.css'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Experiencias from './components/Experiencias';
import Proyectos from './components/Proyectos';
import Aboutme from './components/Aboutme';
import Footer from './components/Contacto';

const roboto_condensed = Roboto_Condensed({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'Portafolio | Benjamin L.',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="es" className=" bg-[#06061d]"  >
      <body className={roboto_condensed.className}>
        <Header/>
         <HomePage /> 
        <Experiencias/>
        <Proyectos />
        <Aboutme />
        {/* <Footer /> */}
        {children}      
      </body>
    </html>    
  )
}
