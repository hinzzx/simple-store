import styled from "styled-components";


// Main Container // Content wrapper
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px); // because of the navbar
  background-color: #f5f5f5;
  margin-top: 60px; // because of the navbar
  overflow: auto;
  overflow-x: hidden;

  /* Little parallax effect */

  & div {
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
    position: sticky;
    top: 0;
  }
`;

export const Section = styled.section`
  display: flex;
  width: fit-content;
  position: absolute;
  margin: auto;
  top: 10%;
  left: 10%;
  height: fit-content;
  white-space: pre-line;

  @media (max-width: 1015px) {
    flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: white;
  margin: 0;
  text-align: left;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #00d49b;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 10px 10px;
  margin-bottom: 20px;
  overflow: auto;
`;

// Header

export const Header1 = styled.h1`
  color: white;
  font-size: 2.5rem;
  letter-spacing: 0.115rem;
  font-weight: 100;
  margin-bottom: 0.675rem;
  text-align: left;
  width: fit-content;
  height: fit-content;
  white-space: pre-line;

    @media (max-width: 650px) {
        width: 90%;
    }
`;

export const HomeImage = styled.img`
  width: 80%;
  max-width: 1010px;
  max-height: 591px;
  margin-left: 4%;
  margin-right: 5%;

  /* Added this cause it has some issues on Chrome browser */

  @media (max-width: 1400px) {
    
    margin-right: 12%;
  }

  @media (max-width: 1015px) {
      
    margin-left: 0%;
    margin-top: 4%;
  }


`;

export const HomeImage2 = styled.img`
  width: 80%;
  max-width: 1010px;
  max-height: 591px;

  @media (max-width: 1015px) {
    margin-left: 0%;
    margin-top: 4%;
  }
`;

export const Button = styled.button`

  display: inline-block;
  text-decoration: none;
  padding: 14px 24px;
  color: #00d49b;
  background-color: white;
  border: 2px solid white;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  transition: 0.25s;

  &:hover{
      background-color: #00d49b;
      color: white;
      cursor: pointer;
  }

  
`;


