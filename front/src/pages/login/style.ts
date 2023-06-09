import styled from "styled-components";

const Container = styled.main`
  background-color: #ffcc00;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  h1 {
    color: black;
    margin-bottom: 15px;
  }

  form {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;

    label {
      color: black;
      margin-bottom: 8px;
    }

    input {
      padding: 8px;
      margin-bottom: 16px;
    }

    button {
      background-color: black;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export default Container;
