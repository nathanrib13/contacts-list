import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 40%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: #fff;
  padding: 20px;
  border-radius: 13%;
  gap: 20px;
  position: fixed; 
  z-index: 99;

  .ProfileCardStyle {
  width: 45%;
  height: 55%;
  min-width: 45%;
  min-height: 55%;
  position: relative;
  border-radius: 70%;
  background-color: #004AAD;
  padding: 10px;
}

.ProfileCardStyle img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.ProfileCardStyle:hover img {
  background-color: #333;
}

.ProfileCardStyle:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
}

.ProfileCardStyle:hover::after {
  content: "Adicionar foto";
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: #333;
  padding: 10px 10px;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
  z-index: 2;
  cursor: pointer;
}
.modalUpdateContact{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7); 
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 13%;
> form {
  background-color: #D9D9D9;
  padding: 25px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;

  > h2 {
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    color: black;
    margin-bottom: 8px;
    gap: 9px;
  }

  input {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid blue
    }
    input::placeholder{
      font-family: Arial, Helvetica, sans-serif;
    }
  
    select {
      padding: 12px;
      border-radius: 4px;
      border: 1px solid blue
    }
    

  button {
    background-color: #004AAD;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      margin-top: 16px;
      cursor: pointer;
      font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 8px;

    &:hover {
      background-color:rgba(80,190,290, 0.6);
    }
  }

}
}
  

  > div {
    width: 100%;
    padding: 25px;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #D9D9D9;
    gap: 20px;
    
    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
        > div{
          display: flex;
          gap: 6px;
          > svg {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
      }
    }
    > ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
      >li {
        font-weight: 600;
        display: flex;
        border-radius: 4px;
        padding: 8px;
        background-color: #fff;
        gap: 6px;
        >p {
          font-weight: 400;
        }
      }
    }
    > button {
     position: absolute;
      top: 6%; /* Ajuste a posição vertical conforme necessário */
      right: 6%; /* Ajuste a posição horizontal conforme necessário */
      padding: 10px 15px;
      background-color: #f0f0f0;
      color: #333;
      border: none;
      border-radius: 100%;
      cursor: pointer;
      transition: transform 0.6s ease, background-color 0.3s ease;
      }
    >button:hover {
      transform: rotate(180deg);
    background-color: #004AAD;
    color: #fff;
        
      }
    > div.modalDeleteContact{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7); 
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 13%;
  
      > span.closeModal{
      position: absolute;
      background-color: rgba(0, 0, 0, 0.9);
      color: #D9D9D9;
      top: 27%; 
      right: 17%; 
      padding: 10px 15px;
      border: none;
      border-radius: 100%;
      cursor: pointer;

      }

  > div {
    background-color: #D9D9D9;
    padding: 20px;
    width: 60%;
    height: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
      
  
    > h2{
      font-weight: 400;
      font-size: 1.4em;
    }
    > p {
      padding: 4px;
      border-radius: 4px;
      font-weight: 400;
      background-color: rgba(0, 0, 0, 0.2);
    }
    > button {
      background-color: red;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      margin-top: 16px;
      cursor: pointer;
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 8px;
      width: 100%;

    &:hover {
      background-color:rgba(190,0,0, 0.6);
    }
    }
  }

}
}


`;
export { ModalContent, ModalWrapper };
