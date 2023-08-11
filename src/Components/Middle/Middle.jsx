import Bestsellers from "../Bestsellers/Bestsellers"
import Fresh from '../Fresh/Fresh'
import './Middle.css'


const Middle = ({bestsellers,combos,topRated,lower,breakfast,boneless}) => {
  return (
    <div className="container-middle">

        
      <div className="in-container">
      <div>
      <h1 >Bestsellers</h1>
      <h2>Most popular products near you!</h2>
    </div>
      <Bestsellers bestsellers={bestsellers}/>
      </div>


     <div className="in-container">
        <div>
      <h1 >Fresh at Licious!</h1>
      <h2>Handpicked assortment just for you</h2>
        </div>
      <Fresh/>
     </div>

     
     <div className="in-container">
        <div>
     <h1>Combos for you</h1>
      <h2>Savour the savings</h2>
        </div>
     <Bestsellers bestsellers={combos}/>
     </div>


     <div className="in-container">
        <div>
     <h1>Top Rated</h1>
      <h2>by meat-lovers like you!</h2>
        </div>
      <Bestsellers bestsellers={topRated}/>
     </div>


     <div className="in-container">
     <h1>Rs 199 or lower!</h1>
      <Bestsellers bestsellers={lower}/>
     </div>


     <div className="in-container">
     <h1>Your go-to breakfast meat</h1>
      <Bestsellers bestsellers={breakfast}/>
     </div>


     <div className="in-container">
     <h1>Delicious boneless cuts</h1>
      <Bestsellers bestsellers={boneless}/>
     </div>
    </div>
  )
}

export default Middle