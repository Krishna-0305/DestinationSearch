import './index.css'

const DestinationItem = ({destinationDetails}) => {
  const {name, imgUrl} = destinationDetails
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
