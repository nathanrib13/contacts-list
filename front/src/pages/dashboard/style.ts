import styled from "styled-components";

const Container = styled.section`
  background-color: #004AAD;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
 


> div {
  width: 75%;
  margin: 22px 55px;
  display: flex;
  justify-content: space-between;  
  align-items: center;

  > img {
    max-width: 270px;
    border-radius: 760px;
  }
  > div { 
    background-color: #fff;
    color: black;   
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 72%;
    align-items: center;
    border-radius: 12px;
    position: relative;
    
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    > h2 {
      font-weight: 600;
    }
  }
  > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
      > li {
        padding: 6px;
        border-radius: 4px;
        width: 100%;
        background-color: rgba(60,60,60,0.1)
      }
    }
   
  }
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
