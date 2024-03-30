import React from "react";
import { FooterWrapper, FooterLinks } from "./styled";

const Footer = () => {
    return(
        <FooterWrapper>
            <FooterLinks>
                <a href='https://t.me/Tirnyrka'> Telegram </a>
                <a href='https://github.com/Timchik-IT'> GitHub </a>
            </FooterLinks>
        </FooterWrapper>
    );
};

export default Footer;
