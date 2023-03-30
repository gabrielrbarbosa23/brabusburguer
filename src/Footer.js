import React from "react";
import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

import './Footer.css'

function Footer() {
    return (
        <div className="footer" id="contato">
            <ul className="social_list">
                <li>
                    <a className="social_link" href="https://wa.me/5524974043372" target="_blank"> <ImWhatsapp /> </a>
                </li>
                <li>
                    <a className="social_link" href="https://www.instagram.com/brabusburguer8523/" target="_blank"> <GrInstagram /> </a>
                </li>
                <li>
                    <a className="social_link" href="#" target="_blank"> <FaFacebookF /> </a>
                </li>
            </ul>
            <p className="copy_right">
                <span>Brabus Burguer</span> &copy; 2021
            </p>
        </div>
    )
}

export default Footer