import styled from "styled-components";

const Container = styled.section`
  background-color: #004AAD;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
 





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
    

   
      >div {
        width: 100%;
        color: #000;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        > h2 {
      font-weight: 600;
    }
    > button  {

      font-family: Arial, Helvetica, sans-serif;
    background-color: #004AAD;
    color: white;
    border-radius: 12px;
    border:  none;
    padding: 6px;

    }
      }
  



    > h2 {
      color: black;
      margin-bottom: 12px;
    }
     >p {
      color: #000;
    }
  }

`;

export default Container;
