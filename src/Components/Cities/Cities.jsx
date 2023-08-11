import './Cities.css'

const cities = ({cities}) => {
  return (
    <div className="cities-container">
        <div className="city-mainContainer">
        <p>CITIES WE SERVE</p>
        <div className="city-container">
        {
        cities.map((city) => {
            return <div className="city-box"><p>{city}</p></div>
        })
        
        }
        </div>
        </div>
    </div>
  )
}

export default cities