const products =[
    {
        id: '1',
        name: 'Tomahawk Steak',
        category: 'Signature',
        price: 1800,
        img:'/img/img-eccomerce/tomahawk2.jpg',
        stock: 10,
        description: 'Es un filete grueso con costilla y una presentación impresionante, que poco a poco se ha ido ganando su estatus dentro de la carne de vaca. La gran infiltración de grasa intramuscular (marmoleado) e intermuscular junto con el hueso de la costilla le confiere un gran sabor y una jugosidad excepcional.'
    },
    {
        id: '2',
        name: 'Rib Eye Steak',
        category: 'Signature',
        price: 1000,
        img:'/img/img-eccomerce/OjoDeBife.jpg',
        stock: 20,
        description: 'Es un corte de carne argentina especial que en España se conoce como Lomo Alto. La precisa infiltración de grasa denominada marmoleo le otorga una textura, un sabor y una terneza que, sin duda, dan a este corte argentino la categoría de premium.'
        
    },
    {
        id: '3',
        name: 'Entraña',
        category: 'Random',
        price: 1500,
        img:'/img/img-eccomerce/OjoDeBife.jpg',
        stock: 20,
        description: 'Es un corte de carne argentina especial que en España se conoce como Lomo Alto. La precisa infiltración de grasa denominada marmoleo le otorga una textura, un sabor y una terneza que, sin duda, dan a este corte argentino la categoría de premium.'
        
    },
    
    
    

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}