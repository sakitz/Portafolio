import HomePage from './components/HomePage';
import Aboutme from './components/Aboutme';
import Experiencias from './components/Experiencias';
import Proyectos from './components/Proyectos';
import Footer from './components/footer';


export default function Home() {
  return (
    <div>
        <HomePage />
        <Experiencias />
        <Proyectos />
        <Aboutme />
        <Footer /> 
    </div>
    )
}
