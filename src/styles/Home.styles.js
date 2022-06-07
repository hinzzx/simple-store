import styled from "styled-components";
// import { Link } from "react-router-dom";


// Main Container // Content wrapper
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh; // because of the navbar
  background-color: #f5f5f5;
   // because of the navbar
  overflow: hidden;
  overflow-y: hidden;
  
  

  /* Little parallax effect */

  

  &:-webkit-scrollbar {
    overflow: hidden;
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
& {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

`;

export const Section = styled.section`
  display: flex;
  width: 90%;
  position: absolute;
  margin: auto;
  top: 20%;
  left: 10%;
  height: fit-content;
  white-space: pre-line;

  @media (max-width: 1015px) {
    flex-direction: column;
    top: 11%;
  }

  

  &:-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
& {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`;

export const Paragraph = styled.p`
  width: fit-content;
  font-size: 1rem;
  color: white;
  margin: 0;
  text-align: left;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  background-color: #00d49b;
  box-shadow: 0px 0px rgba(0, 0, 0, 0.1);

  
  
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
        width: 80%;
    }

    @media (max-width: 300px) {
      font-size: 2rem;
    }
`;

export const HomeImage = styled.img`
  width: 46%;
  max-width: 1010px;
  max-height: 617px;
  margin-left: 4%;
  margin-right: 5%;

  /* Added this cause it has some issues on Chrome browser */

  @media (max-width: 1400px) {
    
    margin-right: 12%;
  }

  @media (max-width: 1015px) {
      
    width: 70%;
    margin-left: 0%;
    margin-top: -5%;
  }

  @media (max-width: 768px) {
   
    margin-right: 25%;
    margin-top: 6%;
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

  & a {
    text-decoration: none;
    color: #00d49b;
  }

  &:hover a {
    color: white;
  }
  
`;




