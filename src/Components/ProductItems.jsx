import { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({id, image, name , price,sizes}) => {
  const{currency} = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
    <div className="overflow-hidden">
      <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
    </div>
    <p className="pt-3 pb-1 text-sm">{name}</p>
    <p className="pt-3 pb-1 text-sm">{sizes}</p>
    <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  )
}

export default ProductItems