import React from 'react'
import { useFilterContext } from '../context/filtercontext';
import GridView from './GridView';
import ListView from './ListView';
import styled from 'styled-components';


const ProductList = () => {

  const {filter_products, grid_view} = useFilterContext();

  if(filter_products.length === 0)
    return <EmptyDiv>
              <h3>No Items!!!</h3>
            </EmptyDiv>;

  if (grid_view) {
    return <GridView products={filter_products} />;
  }

  if (!grid_view) {
    return <ListView products={filter_products} />;
  }
}

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;
  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

export default ProductList