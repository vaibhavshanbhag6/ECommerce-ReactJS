import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";

import reducer from '../reducers/filterReducer';

const FilterContext = createContext();

export const FilterProvider = ({children}) =>{
    const {products} = useProductContext();

    const initialState = {
        filter_products: [],
        all_products: [],
        grid_view:true,
        sorting_value: "lower",
        filter:{
            text:"",
            category:"all",
            company: "all",
            color: "all",
            price:0,
            maxPrice: 0,
            minPrice: 0,
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const setGridView = () =>{
        return dispatch({ type: "SET_GRID_VIEW" });
    }

    const setListView = () =>{
        return dispatch({ type: "SET_LIST_VIEW" });
    }

    const sorting  = (event) =>{
        return dispatch({type: "GET_SORT_VALUE", payload: event.target.value});
    }

    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type:"UPDATE_FILTERS_VALUE", payload: { name, value }});

    }

    const clearFilters = () =>{
        dispatch({ type: "CLEAR_FILTER_PRODUCTS", payload: products });
    }

    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"});
        dispatch({type: "SORT_PRODUCTS", payload: products });
    },[state.sorting_value, products, state.filter]);

    useEffect(()=>{
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    },[products]);


    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}}>{children}</FilterContext.Provider>
}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}

