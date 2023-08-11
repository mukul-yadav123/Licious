import './Popular.css'

const Popular = ({spreads,Chickens,Muttons,Fishes,masalas}) => {
  return (
    <div className="full-container">
        <div className="popular-container">
        <p className='popular-maintitle'>POPULAR SEARCHES <br/></p>
        <p className='popular-title ' >Spreads</p>
        <div className="items-container">
            {spreads?.map((spread) => {
                return <div className="item-container" key={spread}>
                <p className='spread-item'>{spread}</p>
                <p className='slash'>{spreads[spreads.length-1]===spread? '' : ' | '}</p>
                </div>
            })}
        </div>
        <p className='popular-title ' >Chicken</p>
        <div className="items-container">
            {Chickens?.map((item) => {
                return <div className="item-container" key={item}>
                <p className='spread-item'>{item}</p>
                <p className='slash'>{Chickens[Chickens.length-1]===item? '' : ' | '}</p>
                </div>
            })}
        </div>
        <p className='popular-title '>Mutton</p>
        <div className="items-container">
            {Muttons?.map((item) => {
                return <div className="item-container" key={item}>
                <p className='spread-item'>{item}</p>
                <p className='slash'>{Muttons[Muttons.length-1]===item? '' : ' | '}</p>
                </div>
            })}
        </div>
        <p className='popular-title '>Fish & Seafood</p>
        <div className="items-container">
            {Fishes?.map((item) => {
                return <div className="item-container" key={item}>
                <p className='spread-item'>{item}</p>
                <p className='slash'>{Fishes[Fishes.length-1]===item? '' : ' | '}</p>
                </div>
            })}
        </div>
        <p className='popular-title '>Meat Masala</p>
        <div className="items-container">
            {masalas?.map((item) => {
                return <div className="item-container" key={item}>
                <p className='spread-item'>{item}</p>
                <p className='slash'>{masalas[masalas.length-1]===item? '' : ' | '}</p>
                </div>
            })}
        </div>
        </div>
    </div>
  )
}

export default Popular