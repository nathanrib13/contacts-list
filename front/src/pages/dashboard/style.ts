import styled from "styled-components";

const Container = styled.section`
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  > button {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #000;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    color: #ffcc00;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 8px;

    &:hover {
      background-color: white;
    }
  }

  > div:first-child {
    background-color: #fff;
    padding: 50px;
    color: black;
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    border-radius: 12px;
    margin-bottom: 25px;
    position: relative;
    > ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    > p {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: #fff;
    padding-top: 20px;
  }
`;

export default Container;
