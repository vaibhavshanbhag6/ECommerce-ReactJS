const filterReducer = (state, action) =>{

    switch(action.type){

        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem)=>curElem.price);
            let maxPrice = Math.max(...priceArr);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filter:{
                    ...state.filter,
                    maxPrice,
                    price: maxPrice,
                }
            }

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view:true
            }
        
        
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view:false
            }
        
        case "GET_SORT_VALUE":
        return {
            ...state,
            sorting_value: action.payload,
        }

        case "SORT_PRODUCTS":

            let sorted_products = [...state.filter_products];

            let tempProducts = [...state.filter_products];

            const sortProducts = (a,b) =>{
                switch(state.sorting_value){
                    case "lowest":
                        return a.price - b.price;
                    case "highest":
                        return b.price-a.price;
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name)
                    default:
                        break;
                }
            }

            sorted_products = tempProducts.sort(sortProducts);

            return {
                ...state,
                filter_products:sorted_products,
            }
        
        case "UPDATE_FILTERS_VALUE":
            return{
                ...state,
                filter:{
                    ...state.filter,
                    [action.payload.name]: action.payload.value,
                }
            }

        case "FILTER_PRODUCTS":
            let tempFilterProducts = [...state.all_products];

            const {text, category, company, color, price} = state.filter;

            if(text)
                tempFilterProducts = tempFilterProducts.filter((val)=>val.name.toLowerCase().includes(text));
            
            if(category !== "all")
                tempFilterProducts = tempFilterProducts.filter((val)=>val.category === category);

            if(company !== "all")
                tempFilterProducts = tempFilterProducts.filter((val)=>val.company === company);

            if(color !== "all")
                tempFilterProducts = tempFilterProducts.filter((val)=>val.colors.includes(color));


            if(price){
                tempFilterProducts = tempFilterProducts.filter((val)=>val.price<=price);
            }

            return {
                ...state,
                filter_products: tempFilterProducts,
            }

        case "CLEAR_FILTER_PRODUCTS":
            return {
                ...state,
                filter:{
                    text:"",
                    category:"all",
                    company: "all",
                    color: "all",
                    price:state.filter.maxPrice,
                    maxPrice: state.filter.maxPrice,
                    minPrice: 0,
                }
            }
            
        default:
            return state;
    }

}

export default filterReducer;