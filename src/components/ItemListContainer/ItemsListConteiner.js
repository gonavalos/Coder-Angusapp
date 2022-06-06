
import { getProducts, getProductsByCategory } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import '../ItemListContainer/ItemListConteiner.css'


const ItemListConteiner = () => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            })
        }
    }, [categoryId])

    return(
       
        <div className=''>
            <div className='ItemListConteiner '>
                <ItemList products={products} />
            </div>
        </div>

    )
}

export default ItemListConteiner
