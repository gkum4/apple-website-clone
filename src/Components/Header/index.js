import React from 'react';
import { Container } from './styles';
import AppleLogo from '../../assets/applelogo.png';
import MagnifyingGlass from '../../assets/magnifyingglass.png';
import ShoppingBag from '../../assets/shoppingbag.png';

const Header = () => {
  return (
    <Container>
      <div>
        <img src={AppleLogo} alt="Apple Logo"/>
      </div>
      <div>
        <a href="#">Mac</a>
      </div>
      <div>
        <a href="#">iPad</a>
      </div>
      <div>
        <a href="#">iPhone</a>
      </div>
      <div>
        <a href="#">Watch</a>
      </div>
      <div>
        <a href="#">TV</a>
      </div>
      <div>
        <a href="#">Music</a>
      </div>
      <div>
        <a href="#">Support</a>
      </div>
      <div>
        <img src={MagnifyingGlass} alt="Search Img"/>
      </div>
      <div>
        <img src={ShoppingBag} alt="Shopping Bag Img"/>
      </div>
    </Container>
  )
}

export default Header;