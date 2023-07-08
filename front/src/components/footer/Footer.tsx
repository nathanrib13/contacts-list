import { useNavigate } from "react-router-dom";
import FooterStyled from "./Style";

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li>About</li>
        <li>Work with us</li>
        <li>Blog</li>
        <li>FAQ</li>
        <li>SAC</li>
      </ul>
      <div>
        <p>Contact List by Nathan Ribero </p>
        <p>Copyright © 2023 Todos os direitos reservados</p>
      </div>
    </FooterStyled>
  );
};
export default Footer;
