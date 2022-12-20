import React from 'react'
import { useFilterContext } from '../context/filtercontext';
import GridView from './GridView';
import ListView from './ListView';


const ProductList = () => {

  const {filter_products, grid_view} = useFilterContext();

  if(filter_products.length === 0)
    return <h3>No Items!!!</h3>

  if (grid_view) {
    return <GridView products={filter_products} />;
  }

  if (!grid_view) {
    return <ListView products={filter_products} />;
  }
}

export default ProductList