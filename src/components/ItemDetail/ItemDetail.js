
import ItemCount from '../ItemCount/ItemCount'
import '../Item/Item.css'
import '../ItemDetail/ItemDetail.css'



const ItemDetail = ({  name, price, img, stock, description }) => {
    return(
        <div className='itemdetail'>
            <div className="product col-6 col-sm-4">
                <img className="product__image" src={img}></img>
                <h1 className="product__title">
                    {name}
                </h1>
                <hr />
                <p> Precio $ {price} </p>
                <p>{description}</p>
                <ItemCount stock={stock}/>
        </div>
        </div>
        
    )
}

export default ItemDetail