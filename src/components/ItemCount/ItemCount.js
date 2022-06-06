import { useState, useEffect } from "react";

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
            
            if(count > 1 ){
                setCount((count) => count - 0.5)
    }
    }

    const increment = () => {
        if (count < stock ) {
            setCount(count + 0.5)
    }
    }

    return(
        <div className="product__btn btn">

            <span onClick={count > 0 ? decrement : ""} >-</span>
        

            <a href="#"> {count} Kg. </a>

            
             
            <span onClick={increment}>+</span>
        </div>

    )

}

export default ItemCount