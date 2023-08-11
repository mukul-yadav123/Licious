import './Navbar.css'
import Containers from '../Containers/Containers'

const Navbar = () => {
  return (
    <section className="header">
    <div className="container">
    <nav className='navbar'>
    <img style={{cursor: 'pointer'}}src="images\licious-logo.svg" alt="logo" />
    <div className="location">
        <img src="/images/location.svg" alt="location-icon" id="location_icon" />
        <div className="location_inside">
        <div className="current_location">
        <span className="city">NCR</span>
        <img src="/images/drop-down.svg" alt="dropdown" />
        </div>
        <div className="location_name">
            Delhi, India
        </div>
        </div>
    </div>
    <div className="search_bar">
    <input type="text" placeholder='Search for any delicious product' />
    <img src="/images/search_icon.svg" alt="" />
    </div>
    <div className="containers_section">
    <Containers icon='images\stack_logo.svg' text='Categories'/>
    <Containers icon='images\login_logo.svg' text='Login'/>
    <Containers icon='images\cart_logo.svg' text='Cart'/>
    </div>
    </nav>
    </div>
    </section>
  )
}

export default Navbar