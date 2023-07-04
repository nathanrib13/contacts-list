import styled from "styled-components";

const HeaderStyled = styled.header`
margin: 0;
width: 100%;
height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 35px;

  >ul {
   display: flex;
   gap: 76px;
  }

  > button {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #004AAD;
    color: white;
    border-radius: 18px;
    border:  none;
    padding: 8px;

}

`

  export default HeaderStyled