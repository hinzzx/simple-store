import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 99vh;
  padding-bottom: 9px;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;

  @media (max-width: 1110px) {
    background-image: url('https://images.pexels.com/photos/5039602/pexels-photo-5039602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 99vh;
    filter: brightness(90%);
   
  }

  @media (max-width: 768px) {
    height: 98.9vh;
  }

 
`;

export const LoginPictureContainer = styled.img`
  height: calc(100vh - 60px);
  width: 50%;
  margin-top: 70px;
  border-radius: 0 10px 10px 0;

  @media screen and (max-width: 1110px) {
    display: none;
  }
`;

export const LoginForm = styled.form`
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 40%;
  max-width: 450px;
  min-width: 200px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  
  background: #fff;

  @media screen and (max-width: 1110px) {
    max-width: 600px;
    min-width: 300px;
/* From https://css.glass */
background: rgba(255, 255, 255, 0.27);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
  

  & p span {
    background-color: transparent;
    z-index: 2;
    white-space: nowrap;
  }

  & input::placeholder {
    color: #fff;
  }
  }
`;

export const FormTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 400;
  text-align: left;

  @media screen and (max-width: 1110px) {
    color: #F7F7F5;
  }
  
  
`;

export const FormInput = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.27);
border-radius: 10px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10.6px);
-webkit-backdrop-filter: blur(10.6px);


 &:focus::placeholder {
    color: transparent;
}

@media screen and (max-width: 1110px) {
  background: rgba(255, 255, 255, 0.27);
  border: none;
}

  
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding-left: 45%;

  
`;

export const Label = styled.label`
  width: 55%;
  text-align: left;
  font-size: 0.75em;
  margin-bottom: -6px;
  
  @media screen and (max-width: 1110px) {
    color: white;
  }

`;

export const Submit = styled.button`
  width: 55%;
  height: 40px;
  border-radius: 40px;
  background-color: #00d49b;
  color: white;
  border: none;
  -webkit-box-shadow: -43px -41px 0px -22px rgba(0, 0, 0, 0),
    0px 1px 16px 1px rgba(0, 0, 0, 0.27);
  box-shadow: -43px -41px 0px -22px rgba(0, 0, 0, 0),
    0px 1px 16px 1px rgba(0, 0, 0, 0.27);
  padding: 0 10px;
  margin: 10px 0;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  @media screen and (max-width: 1110px) {
    width: 57%;
  }
`;

export const TextInALine = styled.p`
  width: 60%;
  text-align: center;
  line-height: 0.1em;
  margin-top: 2rem;
  font-size: 0.8em;
  

  & span {
    background: #fff;
    padding: 0 10px;
  }

  @media screen and (max-width: 1110px) {
    color: white;
  }
`;

export const ForgottenPassword = styled(Link)`
  width: 66%;
  text-align: left;
  font-size: 1.4vmin;
  margin-top: 0.3rem;
  white-space: nowrap;
  padding-left: 60px;

  @media screen and (max-width: 1110px) {
    padding-left: 40px;
    font-size: 1.6vmin;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.9vmin;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`
