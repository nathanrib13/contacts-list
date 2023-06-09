import styled from "styled-components";

const ContactCardStyle = styled.section`
  width: 70%;
  height: 150px;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;

  > ul {
    display: flex;
    flex-direction: column;
    > li {
      color: black;
    }
  }

  > div {
    display: flex;
    gap: 10px;
    > button {
      padding: 10px 20px;
      background-color: #ffcc00;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export { ContactCardStyle };
