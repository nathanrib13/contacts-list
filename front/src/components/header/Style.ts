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
  h1 {
    font-size: 58px;
    color: #004AAD;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }



  >div {
    z-index: 28;
    >svg {
    width: 2em;
    height: 2em;
    cursor: pointer;
  }
  }
  > section {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 4%;
    right: 10px;
    background-color: #fff;
    border: 2px solid black;
    padding: 15px;
    width: 18%;
    height: 35%;
    border-radius: 8px;
    z-index: 27;
    

    > ul {
      margin-top: 20%;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      gap: 25px;

      > li {
        padding: 4px;
        width: 100%;
        border-bottom: 0.5px solid #004AAD;
        cursor: pointer;
      }
      > li:hover{
        font-weight: 700;
      }
    }
    
  }

`;

export default HeaderStyled