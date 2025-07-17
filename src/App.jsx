import slideData from './store/carouselSlides';
import Carousel from "./components/carousel/Carousel"
import PokeList from "./components/pokelist/PokeList"

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <Carousel
       slides={slideData}/>
      <PokeList />
    </>
  )
}

export default App
