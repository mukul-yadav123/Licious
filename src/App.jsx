import './App.css'
import Categories from './Components/Categories/Categories'
import Contact from './Components/Contact/Contact'
import Middle from './Components/Middle/Middle'
import Navbar from './Components/Navbar/Navbar'
import Cities from './Components/Cities/Cities'
import Testimony from './Components/Testimony/Testimony'
import {categories,bestsellers,combos,topRated,lower,breakfast,boneless,cities} from './objects/categories'
import {spreads,Chickens,Muttons,Fishes,masalas} from './objects/searches'
import Popular from './Components/Popular/Popular'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <div className="full_container">
      <div className="top_container">
    <img src="/images/banner.jpeg" alt="banner" className="banner" />
      <Categories categories={categories}/>
     <Middle bestsellers={bestsellers} combos={combos} topRated={topRated} lower={lower} breakfast={breakfast} boneless={boneless}/>
      </div>
      <Testimony/>
      <Contact/>
      <Cities cities={cities}/>
      <Popular spreads={spreads} Chickens={Chickens} Muttons={Muttons} Fishes={Fishes} masalas={masalas}/>
      <Footer/>
    </div>

    </>
  )
}

export default App
