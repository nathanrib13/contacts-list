import styled from "styled-components";

const FooterStyled = styled.footer`
margin-top: 60px;
width: 100%;
height: 120px;
color: rgba(70,70,70);
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgba(10,10,20);
padding: 15px 75px;

  >ul {
   display: flex;
   flex-direction: column;
   gap: 12px;
  }

  > button {
    font-family: Arial, Helvetica, sans-serif;
    background-color: blue;
    color: white;
    border-radius: 12px;
    border:  none;
    padding: 6px;

}

`

  export default FooterStyled