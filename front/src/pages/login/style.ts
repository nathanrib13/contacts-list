import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;


  div{
  width: 35%;
  height: 100%; 
  background-color:  #004AAD;
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  gap: 8PX;
  > h1 {
    margin-top: -36px;
   font-size: 58px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  > h2{
  color: rgba(190, 180, 190, 0.8);

  }
  }

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
    right: 20%;
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
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    label {
      color: black;
      margin-bottom: 8px;
    }

    input {
      padding: 12px;
      margin-bottom: 19px;
      border-radius: 4px;
      border: 1px solid blue
    }
    input::placeholder{
      font-family: Arial, Helvetica, sans-serif;
    }

    button {
      background-color: #004AAD;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      margin-top: 16px;
      cursor: pointer;
      font-family: Arial, Helvetica, sans-serif;
    }

    span{ 
      align-self: flex-start;
      margin: 30px 0px 14px 3px 
    }

  }
`;

export default Container;
