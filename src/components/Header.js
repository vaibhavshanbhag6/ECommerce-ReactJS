import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';


const Header = () => {

  return (
    <div>

    <MainHeader>
    <NavLink to="/">
        <img className="logo-img" src="./images/logo1.png" alt='logo'/>
    </NavLink>
    <Nav/>
    </MainHeader>
    </div>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo-img {
    height: 6rem;
  }

  
`;

export default Header