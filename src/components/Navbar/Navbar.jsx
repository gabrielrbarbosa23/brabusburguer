import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#inicio">Início</a></li>
        <li className="p__opensans"><a href="#sobrenos">Sobre nós</a></li>
        <li className="p__opensans"><a href="#cardapio">Cardápio</a></li>
        <li className="p__opensans"><a href="#carrinho">Carrinho</a></li>
        <li className="p__opensans"><a href="#contato">Contato</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <div className="icon-navbar">
          <AiOutlineShopping fontSize={70} onClick={() => setToggleCart(true)}/>
          <GiHamburgerMenu fontSize={70} onClick={() => setToggleMenu(true)}/>
        </div>

          {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#inicio">Início</a></li>
              <li className="p__opensans"><a href="#sobrenos">Sobre nós</a></li>
              <li className="p__opensans"><a href="#cardapio">Cardápio</a></li>
              <li className="p__opensans"><a href="#carrinho">Carrinho</a></li>
              <li className="p__opensans"><a href="#contato">Contato</a></li>
            </ul>
          </div>
          )}

          {toggleCart && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleCart(false)} />
            <ul className="app__navbar-smallscreen_links">
              
              <li className="p__opensans"><a href="#carrinho">Carrinho</a></li>
              
            </ul>
          </div>
          )}

      </div>
    </nav>
  )
}
export default Navbar;
