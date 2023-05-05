import React from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import graphic1 from "../assets/graphics1.avif";


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
        <Box maxW="500px" mb={{ base: 8, md: 0 }}>
          <Heading size="2xl" color="white" mb={4} fontFamily={"Alkatra"}>
            Trade with Confidence
          </Heading>
          <Text size="xl" color="gray.300" mb={8}>
          At BitBazaar, we take pride in providing a secure and user-friendly trading environment that empowers traders of all levels
          </Text>
          <Button
            colorScheme="teal" 
            alignItems={"center"}
            _hover={{ bg: "white", color: "teal.500" }}
          >
            Get Started
          </Button>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          maxW="800px"
          w="100%"
        >
          <Image
            src={graphic1}
            alt="Graphic 1"
            maxW={{ base: "250px", md: "300px" }}
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
            borderRadius="md"
          />
          <Image
            src={graphic1}
            alt="Graphic 2"
            maxW={{ base: "250px", md: "300px" }}
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
            borderRadius="md"
          />

        </Flex>
      </Flex>
    </Box>
  );
}

export default CreativeSection;