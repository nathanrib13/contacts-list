import styled from "styled-components";

const ProfileCardStyle = styled.div`

  width: 75%;
  margin: 22px 55px;
  display: flex;
  gap: 25px;
  align-items: center;

  > img {
    width: 200px; 
    height: 200px; 
    border-radius: 50%;
    object-fit: cover;
  }
  > div { 
    background-color: #fff;
    color: black;   
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
    min-width: 250px;
  
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

`;

export { ProfileCardStyle };
