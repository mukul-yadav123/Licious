import './Categories.css'

const Categories = ({categories}) => {
  return (
    <div className='shopByCategories'>
      <div className="header_titles">
      <h1 >Shop by categories</h1>
      <h2>Freshest meats and much more!</h2>
     </div>
     <div className="category">
    {
      categories?.map(({name,img}) => <div key={name} className='food_category'>
           <div className="img_category">
            <img src={img}/>
            </div> 
            <p>{name}</p>
             </div>)
    }
    </div>
    </div>
  )
}

export default Categories