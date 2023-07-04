import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: space-between;


  div{
    width: 50%;
  height: 100%; /* Defina a altura desejada para a div */
  background-image: url('https://img.freepik.com/fotos-gratis/linda-mulher-asiatica-usa-aplicativo-de-smartphone-e-envia-mensagens-em-pontos-de-bate-papo-de-midia-social-no-espaco-da-copia-usa-jaqueta-casual_273609-48643.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
  }

 
  section {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-image: linear-gradient(to left, blue, transparent);
  }

  form {
   position: absolute;
   right: 12%;
   width: 25%;
   height: 75%;
  
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
      padding: 8px;
      margin-bottom: 14px;
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
