import styled from "styled-components";

const ContactCardStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 25px;


  > ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(60,60,60,0.1);
    padding: 12px 52px;
    cursor: pointer;
   
    > li {
      color: black;
      
    }
  }
`;

export { ContactCardStyle };
