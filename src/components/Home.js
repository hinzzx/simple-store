import React from "react";
import {
  MainContainer,
  Container,
  Section,
  Paragraph,
  HomeImage,
  Header1,
  Button,
  
} from "../styles/Home.styles";
import { Link } from "react-router-dom";
import HOMEIMAGETest from "../assets/HOMEIMAGETest.png";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "./Footer";

const Home = () => {
  return (
    <MainContainer>
      {/* First Parralax Container */}
      <Container>
        <Section>
          <Paragraph>
            <Header1
              as={motion.h1}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              Choose the Better for you
            </Header1>

            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.785, duration: 1.2 }}
            >
              {" "}
              Explore our newest promotions
            </motion.p>

            <Button
              as={motion.button}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {" "}
              <Link to="/productz">Start shopping <AiOutlineArrowRight /></Link>{" "}
            </Button>
          </Paragraph>

          <HomeImage src={HOMEIMAGETest} alt="" as={motion.img} />
          
        </Section>

        
      </Container>
    <Footer />
    </MainContainer>
  );
};

export default Home;
