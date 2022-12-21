const cartReducer = (state, action) =>{

    switch(action.type){
        case "ADD_TO_CART":

        let { id, color, qty, product } = action.payload;

        let existingElem  = state.cart.find((curElem)=>curElem.id === id+color);

        if(existingElem){
            let updatedCart = state.cart.map((curElem)=>{
                if (curElem.id === id+color)
                    return {
                    ...curElem,
                    qty:curElem.qty+qty >= curElem.max ? curElem.max : curElem.qty+qty,
                }
                else
                    return curElem;
            })
            
            return {
                ...state,
                cart : updatedCart,
            }
        }
        else{
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                qty,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
                };
        
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }

        case "REMOVE_FROM_CART":

            let newCart = state.cart.filter((curElem)=>curElem.id !== action.payload);
                
            return {
                ...state,
                cart: newCart
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart : [],
            }
        default:
            return state;
    }

}

export default cartReducer;