import { Nunito } from 'next/font/google'
import './globals.css'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Aboutme from './components/Aboutme';
import Experiencias from './components/Experiencias';
import Proyectos from './components/Proyectos';
import Footer from './components/footer';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio  Benjamin L.',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
          <Header/> 
          <HomePage />
          <Experiencias />
          <Proyectos />
          <Aboutme />
          <Footer></Footer>
        {children}
      </body>
    </html>
  )
}
