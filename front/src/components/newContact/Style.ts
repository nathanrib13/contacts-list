import styled from "styled-components";

const CreateNeWContactStyle = styled.div`
  width: 70%;
  padding: 25px;
  display: flex;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: #fff;

  > p {
    padding: 4px 13px;
  }

  > button {
    background-color: #ffcc00;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    padding: 4px 13px;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #fff;
      color: black;
    }
  }
`;

export default CreateNeWContactStyle;
