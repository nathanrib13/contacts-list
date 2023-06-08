import styled from "styled-components";

const Container = styled.main`
  background-color: #ffcc00;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  > div {
    background-color: #fff;
    padding: 50px;
    color: black;
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
    border-radius: 12px;
    margin-bottom: 25px;
    > ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: #fff;
    padding: 26px;
  }
`;

export default Container;
