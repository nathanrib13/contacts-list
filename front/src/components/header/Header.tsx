import { useNavigate } from "react-router-dom";
import HeaderStyled from "./Style";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <HeaderStyled>
      <h1>CONTACT LIST</h1>
      <ul>
        <li>Work</li>
        <li>Family</li>
        <li>Friends</li>
        <li>Services</li>
      </ul>
      <button>+ New category</button>
      <button onClick={logout}>Logout</button>
    </HeaderStyled>
  );
};
export default Header;
