const productreducer = (state, action) =>{
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        
        case "SET_API_DATA":
            // const featureData = action.payload.filter((curElem)=>curElem.featured === true);
            return {
                ...state,
                featureProducts: action.payload.filter((curElem)=>curElem.featured === true),
                products: action.payload,
                isLoading: false,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleProduct: action.payload,
                isSingleLoading: false,
            };

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };
        
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            }
        default:
            return state;
    }
}

export default productreducer;