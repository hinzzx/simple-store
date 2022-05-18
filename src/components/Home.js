import React from "react";
import {
  MainContainer,
  Container,
  Section,
  Paragraph,
  HomeImage,
  HomeImage2,
  Header1,
  Button,
} from "../styles/Home.styles";
import HOMEIMAGE from "../assets/HOMEIMAGE.png";
import HOMEIMAGETest from "../assets/HOMEIMAGETest.png";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

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
              Start shopping <AiOutlineArrowRight />{" "}
            </Button>
          </Paragraph>

          <HomeImage src={HOMEIMAGETest} alt="" as={motion.img} />
          
        </Section>
      </Container>
      {/* Second Parallax Container here */}
      <Container>
        <Section>
          <Paragraph>
            <Header1
              as={motion.h1}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              TEST HEADER 123
            </Header1>
          </Paragraph>
        </Section>
      </Container>
    </MainContainer>
  );
};

export default Home;
