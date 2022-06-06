import { getProducts } from '../../asyncmock'
import ItemCount from '../ItemCount/ItemCount'
import '../Item/Item.css'
import { Link } from 'react-router-dom'

function Item ({id, name, price, img, stock, description}) {
    return (
        <div className="product col-6 col-sm-4">
            <img className="product__image" src={img}></img>
            <h1 className="product__title">
                <Link to={`/detail/${id}`}>{name}</Link>
            </h1>
            <hr />
            <p> Precio $ {price} </p>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default Item