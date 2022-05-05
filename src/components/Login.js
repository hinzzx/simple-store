import { motion } from "framer-motion";
import React from "react";
import {
  Submit,
  Container,
  LoginForm,
  FormTitle,
  FormInput,
  LoginPictureContainer,
  TextInALine,
  ForgottenPassword,
  Label,
  FormInputWrapper,
  Buttons
} from "../styles/Login.styles";
import {useState} from "react";
import LOGINPIC from "../assets/LOGINPIC.jpg";
import {Link} from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'


const Login = () => {
  // Event listener to the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  // show and hide onFocus and onBlur with useState for every input element 

  // for the Email LABEL
  const [show, setShow] = useState(false);
  // for the Username LABEL
  const [showOne, setShowOne] = useState(false);
  // for the Password LABEL
  const [showTwo, setShowTwo] = useState(false);


  return (
    <Container>
      <LoginPictureContainer
        as={motion.img}
        initial={{ x: -100, opacity: 0.6 }}
        animate={{ x: 0, opacity: 1 }}
        src={LOGINPIC}
      />
      <LoginForm
        as={motion.form}
        initial={{ y: -200 }}
        animate={{ y: 40, x: 0 }}
        tranition={{ duration: 0.235 }}
      >
        <FormTitle>Login</FormTitle>
        {/* Email input field */}
        <FormInputWrapper>
          {show ? <Label as={motion.label} initial={{x: -100}} animate={{x: 0}}> Email address</Label> : null}
          <FormInput
            type="email"
            placeholder="Email address"
            onFocus={() => {
              setShow((current) => !current);
            }}

            onBlur={() => {
              setShow((current) => !current);
            }}
            required
          />
        </FormInputWrapper>
        {/* Username input field */}
        <FormInputWrapper>
          {showOne ? <Label as={motion.label} initial={{x: -100}} animate={{x: 0}}> Username</Label> : null}
          <FormInput 
            onFocus={() => {
              setShowOne((current) => !current);
            }}

            onBlur = {() => {
              setShowOne((current) => !current);
            }}
            placeholder="Username"
           type="text" required />
        </FormInputWrapper>

        {/* Password input field */}
        <FormInputWrapper>
          {showTwo ? <Label as={motion.label} initial={{x: -100}} animate={{x: 0}}> Password</Label> : null}
          <FormInput 
            onFocus={() => {
              setShowTwo((current) => !current);
            }}

            onBlur={() => {
              setShowTwo((current) => !current);
            }}
            placeholder="Password"
          type="password" required />
        </FormInputWrapper>

        {/* Submit button */}
        <Submit onClick={handleSubmit}>Login</Submit>
        {"  "}

        {/* Forgotten password link */}
        <ForgottenPassword to="/password-reset">
          Did you forgot your password ?
        </ForgottenPassword>

        {/* The text - "Or try to sign-in with - ggle, fb, etc.." */}
        <TextInALine>
          <span> Or try to Sign-in with </span>
        </TextInALine>

        <Buttons>
          <Link to="/ggLogin"><FcGoogle style={{fontSize: "1.4rem", marginTop: "1rem"}}/></Link>
          <Link to="/FbLogin"><BsFacebook style={{fontSize: "1.3rem", marginTop: "1rem", marginLeft: "0.7rem"}}/></Link>
          <Link to="/LinLogin"><BsLinkedin style={{fontSize: "1.3rem", marginTop: "1rem", marginLeft: "0.7rem"}}/></Link>

        </Buttons>
        
      </LoginForm>
    </Container>
  );
};

export default Login;
