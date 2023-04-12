import { getStored } from "../utils/FakeDb";

export const productAndCardData = async () =>{
    const productsData = await fetch('jobData.json')
    const products = await productsData.json()
    const saveCard = getStored()
    const storedCart  = localStorage.getItem('shopping-cart')
    console.log(storedCart)
    let cartArr = []
    for(const id in saveCard){
        const foundProduct = products.find(product=>product.id===id)
        if(foundProduct){
            foundProduct.quantity = saveCard[id]
           cartArr.push(foundProduct)
        }
    }
    return {cartArr};
}
 