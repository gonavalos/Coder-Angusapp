import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'
import '../Item/Item.css'


const ItemDetail = ({ name }) => {
    return(
        <div>
            <h1>ItemDetail</h1>
            <h2>{name}</h2>
        </div>
        
    )
}

export default ItemDetail