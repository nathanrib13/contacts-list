import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContent = styled.div`
  width: 23%;
  height: 72%;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  gap: 15px;

  > form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  > h2 {
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    color: black;
    margin-bottom: 8px;
    gap: 9px;
  }

  input {
      padding: 12px;
      border-radius: 4px;
      border: 1px solid blue
    }
    input::placeholder{
      font-family: Arial, Helvetica, sans-serif;
    }
  
    select {
      padding: 12px;
      border-radius: 4px;
      border: 1px solid blue
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
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 8px;

    &:hover {
      background-color:rgba(0,0,290, 0.4);
      color: black;
    }
  }
  button.deleteUser{
    background-color: red;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      margin-top: 16px;
      cursor: pointer;
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 8px;

    &:hover {
      background-color:rgba(190,0,0, 0.6);
    }

  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }


`;
export { ModalContent, ModalWrapper };
