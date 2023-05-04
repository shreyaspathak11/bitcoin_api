
import React from 'react';
import { Box, Flex, Heading, Text, Button, Image,} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Hero from '../assets/increase.png'
import Carousel from './Carasol';
import AboutSection from './About';

const Home = () => {
  return (
    <>
    <Flex
      height="100vh"
      justify="center"
      alignItems="center"
      bgGradient="linear(to-b, #1A202C, #2D3748)"
    >
      <Box
        w="60%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <Heading
          size="4xl"
          textAlign="center"
          fontFamily="Alkatra"
          mb={4}
          letterSpacing="wide"
        >
          Welcome to<br />
          <Text
            size="4xl"
            fontFamily="Alkatra"
            color="#FCE22A"
            fontWeight="bold"
          >
            BitBazaar
          </Text>
        </Heading>
        <Text
          fontSize="2xl"
          mb={8}
          textAlign="center"
          fontFamily="Alkatra"
          letterSpacing="wide"
        >
          Your one-stop destination for cryptocurrency.
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Button
            variant="solid"
            colorScheme="yellow"
            size="lg"
            p={{ base: 6, md: 8 }}
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="wide"
            fontWeight="bold"
            _hover={{ bg: "#FCE22A", color: "#1A202C" }}
          >
            Get started
          </Button>
          <Button
            variant="outline"
            colorScheme="yellow"
            size="lg"
            p={{ base: 6, md: 8 }}
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="wide"
            fontWeight="bold"
            _hover={{ bg: "#FCE22A", color: "#1A202C" }}
          >
            Contact us
          </Button>
        </Flex>
      </Box>
      <Box w="50%">
        <motion.div
          animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        >   
        <Image src={Hero} alt="Animated Picture" justifyContent={"center"} />
        </motion.div>
      

          
        
      </Box>
    </Flex>
    <Carousel />
    <AboutSection />
    </>
  )
}

export default Home