import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;


  div{
    width: 50%;
  height: 100%; /* Defina a altura desejada para a div */
  background-image: url('https://img.freepik.com/fotos-premium/dois-macho-amigos-clenching-seu-punho-olhar-telefone-movel-contra-experiencia-azul_23-2148160240.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
  }

  /* span {  
    width: 100%;
    background-color: yellow;
 
  } */
  section {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }

  form {
   position: absolute;
   right: 12%;
   width: 25%;
   height: 65%;
  
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    > h1 {
      margin-bottom: 26px;
      
    }

    label {
      color: black;
      margin-bottom: 8px;
    }

    input {
      padding: 12px;
      margin-bottom: 19px;
      border-radius: 4px;
    }

    button {
      background-color: black;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      margin-top: 16px;
      cursor: pointer;
      font-family: Arial, Helvetica, sans-serif;
    }

    span{
    
      align-self: center;
      margin: 36px 0px 14px 0px 
    }

  }
`;

export default Container;
