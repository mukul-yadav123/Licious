import './Containers.css'
const Containers = ({icon,text}) => {
  return (
    <div>
      <div className="small_container">
      <img src={icon} style={{height: '21px',width: '22px'}}alt='icon' />
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Containers