import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

export const CartProvider = ({children}) =>{


    const initialState = {
        // cart: [],
        cart: localStorage.getItem("CartData") === null ? [] : JSON.parse(localStorage.getItem("CartData")),
        total_price: 0,
        shipping_fee: 50000,
      };

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, qty, product) =>{
        dispatch({type: "ADD_TO_CART", payload:{id, color, qty, product}});

    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_FROM_CART", payload: id});
    }

    const clearCart = () =>{
        dispatch({type: "CLEAR_CART"});
    }

    const updateQty = (cartId, prop) =>{
        dispatch({type: "UPDATE_QTY", payload: {cartId, prop}})

    }

    useEffect(()=>{
        localStorage.setItem("CartData",JSON.stringify(state.cart));
        dispatch({type:"GET_TOTAL_PRICE"})
    },[state.cart]);


    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, updateQty}}>{children}</CartContext.Provider>;

}

export const useCartContext = () => {
    return useContext(CartContext);
}