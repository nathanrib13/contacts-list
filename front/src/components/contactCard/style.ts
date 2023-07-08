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
    > p {
      color: black;
    }
   
    li.green {
        border-radius: 4px;
        padding: 8px 8px;
        background-color: rgba(0, 128, 0, 0.5);
        
      }

    li.red {
        border-radius: 4px;
        padding: 8px 8px;
        background-color: rgba(255, 0, 0, 0.5);
      
      }

    li.blue {
        border-radius: 4px;
        padding: 8px 8px;
        background-color: rgba(0, 0, 255, 0.5);
      
      }

      li.purple {
        border-radius: 4px;
        padding: 8px 8px;
        
        background-color: rgba(128, 0, 128, 0.5);
      }
  }
`;

export { ContactCardStyle };
