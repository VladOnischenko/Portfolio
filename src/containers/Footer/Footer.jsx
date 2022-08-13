import React from 'react';
import './footer.scss'
import {AiFillLinkedin} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";
import {BsGithub, BsWhatsapp} from "react-icons/bs";
import {Button} from "@mui/material";
import {IoIosMail} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer__title title">Get in Touch</h3>
        <nav className="footer__content">
          <p className="footer__copyright"><span>&copy;</span> 2022 All Right Reserved</p>
            <ul className="contacts">
              <li className="contacts__linkedIn"><Button href="https://www.linkedin.com/in/vladonischenko/" target="_blank"><AiFillLinkedin /></Button></li>
              <li className="contacts__Whatsapp"><Button href="https://wa.me/+380677177001" target="_blank"><BsWhatsapp /></Button></li>
              <li className="contacts__Telegram"><Button href="https://t.me/VladyslavOnischenko" target="_blank"><FaTelegram /></Button></li>
              <li className="contacts__Github"><Button href="https://github.com/VladOnischenko" target="_blank"><BsGithub /></Button></li>
              <li className="contacts__Mail"><Button href="mailto:vlad.onishchenko63@gmail.com"><IoIosMail /></Button></li>
            </ul>
        </nav>
      </div>
    </footer>
  );
};



export default Footer;