import './Bestsellers.css'

const Bestsellers = ({bestsellers}) => {
  return (
    <div className="items">
     {
      bestsellers.map(({img,name,weight,Serves,pieces,discount_price,price}) =>{
        return <div className="item" key={name}>
          <div className="images">
          <img src={img} alt="title-image" className='title-image' /> 
          <div className="plus">
          <img src="public\images\Bestsellers\Plus.svg" alt="plus"  />
            </div>     
          </div>
          <div className="detail-title">
          <span className='title'>{name}</span>
          </div>
          <div className="details-rest">
          <span className='weight'>{Serves? (weight+' | ') : weight} </span>
          <span className='serves'>{Serves? ('Serves '+ Serves) : ''}</span>
          <span className='pieces'>{pieces? (pieces+' Pieces') : ''}</span>
          </div>
          <div className="prices">
          <span className='discount_price'>{'₹'+ discount_price+' '}</span>
          <span className='price'>{price? ('₹'+price) : ''}</span>
          </div>

         </div>
      })
     } 
     <div className="viewAll">
      View All
     </div>
    </div>
  )
}

export default Bestsellers