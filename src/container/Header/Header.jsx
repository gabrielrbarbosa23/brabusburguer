import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="inicio">
    <div className="app__wrapper_info">
      <SubHeading title="Conheça nosso sabor" />
      <div className="app__header-h1-container">
      <h1 className="app__header-h1">Brabus</h1>
      <h1 className="app__header-h1">Burguer</h1>
      </div>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Nossa missão é transformar o simples ato de comer um hambúrguer em uma experiência extraordinária</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={ images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
