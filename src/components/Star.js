import React from 'react'
import StarRatings from "react-star-ratings";
import styled from 'styled-components';

const Star = ({stars, reviews}) => {
  return (
    <Wrapper>
    <div className='icon-style'><StarRatings rating={stars} starRatedColor="orange" starDimension="22px" starSpacing="2px"/>
    <p>({reviews} customer reviews)</p>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    justify-content: flex-start;
    
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star