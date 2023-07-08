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
  position: relative; 
  
  > img {
    margin-top: 15px;
    width: 200px; /* Defina a largura desejada */
    height: 200px; /* Defina a altura desejada */
    border-radius: 50%;
    object-fit: cover;
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
}


`;
export { ModalContent, ModalWrapper };
