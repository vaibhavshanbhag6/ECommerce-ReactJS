import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import productreducer from "../reducers/productreducer";


const AppContext = createContext();
export const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleProduct: {},
    isSingleLoading: false,
  };


export const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(productreducer, initialState);

    const getProducts = async (url) =>{
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type: "SET_API_DATA", payload: products});

        } catch (error) {
            dispatch({ type: "API_ERROR" });

        }
    }

    const getSingleProduct = async (url) =>{
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct});
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    useEffect(()=>{
        getProducts(API);
    },[]);

    return <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>;
}

export const useProductContext = () =>{
    return useContext(AppContext);
}