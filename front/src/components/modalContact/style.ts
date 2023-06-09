import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  gap: 20px;

  > form {
    display: flex;
    flex-direction: column;
  }

  > h2 {
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    padding: 4px;
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #ffcc00;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    color: black;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 8px;

    &:hover {
      background-color: #e6b800;
    }
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }
`;
export { ModalContent, ModalWrapper };
