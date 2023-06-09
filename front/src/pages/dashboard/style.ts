import styled from "styled-components";

const Container = styled.section`
  padding: 50px;
  background-color: #ffcc00;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

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
