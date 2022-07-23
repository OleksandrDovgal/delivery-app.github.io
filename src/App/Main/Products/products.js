const products = [
    {
        id:1,
        name:"Burger",
        type:"Eat",
        price:10,
        image:"images/Burger.jpeg"
    },
    {
        id:2,
        name:"Hamburger", 
        type:"Eat",
        price:20,
        image:"images/Hamburger.jpeg"
    },
    {
        id:3,
        name:"Roll",
        type:"Eat",
        price:5,
        image:"images/Roll.jpeg"
    },
    {
        id:4,
        name:"Coca-Cola",
        type:"Drink",
        price:7,
        image:"images/CocaCola.jpeg"
    },
    {
        id:5,
        name:"Juice",
        type:"Drink",
        price:9,
        image:"images/Juice.jpeg"
    },
    {
        id:6,
        name:"Coffee",
        type:"Drink",
        price:8,
        image:"images/Coffee.jpeg"
    }
]

export const getProductsObject = (array) => array.reduce((obj,product) => ({
    ...obj,
    [product.id]:product
}),{})

export default products