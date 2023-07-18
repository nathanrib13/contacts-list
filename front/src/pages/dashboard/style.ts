import styled from "styled-components";

const Container = styled.section`
  background-color: #004AAD;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
 
  li {
    cursor: pointer;
  }

  > section {
    width: 75%;
    background-color: #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 20px;
    gap: 14px;
    > div:first-child {
      display: flex;

      >div {
        display: flex;
        width: 50%;
        align-items: center;
        position: relative;
      >input {
        width: 100%;
        border-radius: 25px;
        border: 1px solid #004AAD;
        padding: 12px;
      }
      >svg {
        right: 5px;
        position: absolute;
        width: 30px;
        height: 30px;
        color: #004AAD;
      }
    }
    ul {
      display: flex;
      gap: 25px;
      
      li.green {
        border-radius: 4px;
        padding: 8px 16px;
        color: white;
        background-color: rgba(0, 128, 0, 0.5);
        
      }

      li.red {
        border-radius: 4px;
        padding: 8px 16px;
        color: white;
        background-color: rgba(255, 0, 0, 0.5);
      
      }

      li.blue {
        border-radius: 4px;
        padding: 8px 16px;
        color: white;
        background-color: rgba(0, 0, 255, 0.5);
      
      }

      li.purple {
        border-radius: 4px;
        padding: 8px 16px;
        color: white;
        background-color: rgba(128, 0, 128, 0.5);
      }

      li {
        border-radius: 4px;
        padding: 8px 16px;
        color: white;
        background-color: rgba(8, 8, 8, 0.7);
      }
  
      
  
     
    }
  }

      >div {
        width: 100%;
        color: #000;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        > h2 {
      font-weight: 600;
    }
    > button  {

    font-family: Arial, Helvetica, sans-serif;
    background-color: #004AAD;
    color: white;
    border-radius: 12px;
    border:  none;
    padding: 12px;
    &:hover {
      background-color:rgba(80,190,290, 0.6);
    }
    }
      }
  
    > h2 {
      color: black;
      margin-bottom: 12px;
    }
     >p {
      color: #000;
    }

    div.noContacts{
      background-color: #D9D9D9;
      width: 35%;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
    }
  }

`;

export default Container;
