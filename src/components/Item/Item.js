import { getProducts } from '../../asyncmock'
import ItemCount from '../ItemCount/ItemCount'
import '../Item/Item.css'

function Item ({id, name, price, img, stock, description}) {
    return (
        <div className="product col-6 col-sm-4">
            <img className="product__image" src={img}></img>
            <h1 className="product__title">{name}</h1>
            <hr />
            <p> Precio $ {price} </p>
            <p>{description}</p>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default Item