import React from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import graphics1 from "../assets/graphics1.png";
import graphics2 from "../assets/graphics2.png";


function CreativeSection() {
  return (
    <Box py={10} bgGradient="linear(to-r, #2D3748, #1A202C)" fontFamily={"Alkatra"}>
      <Flex
        maxW="100%"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={4}
      >
        <Image
          src={graphics1}
          alt="Graphic 1"
          maxW={{ base: "250px", md: "300px" }}
          mr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
          borderRadius="md"
          css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}
        />
        <Box maxW="500px" mb={{ base: 8, md: 0 }} textAlign="center">
          <Heading size="2xl" color="white" mb={4} fontFamily={"Alkatra"} css={{"&:hover": {color:"teal", transform: "scale(1.05)",boxShadow: "xl",},}}>
            Trade with Confidence
          </Heading>
          <Text size="xl" color="gray.300" mb={8} css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}>
          At BitBazaar, we take pride in providing a secure and user-friendly trading environment that empowers traders of all levels
          </Text>
          <Button
            colorScheme="teal" 
            alignItems={"center"}
            _hover={{ bg: "white", color: "teal.500", transform: "scale(1.05)",boxShadow: "xl"}}
          >
            Get Started
          </Button>
        </Box>
        <Image
          src={graphics2}
          alt="Graphic 2"
          maxW={{ base: "250px", md: "300px" }}
          mr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
          borderRadius="md"
          css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}
        />
      </Flex>
    </Box>
  );
}

export default CreativeSection;
