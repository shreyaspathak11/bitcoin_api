
import React from 'react'
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Hero from '../assets/increase.png'

const Home = () => {


  return (
    <Flex p={4} align="center" justify="center">
    <Box w="50%" >
 
          <Heading size="4xl" textAlign={"center"} mb={4} fontFamily={"Sigmar"} p={"30"}>Welcome to<br />
          
          <Text size="4xl" fontFamily={"Alkatra"} textAlign={"center"} fontSize={"72px"} color={"#27E1C1"}>BitBazaar</Text> </Heading>
        
      <Text fontSize="2xl" mb={8} textAlign={"center"} fontFamily={"Montserrat"}>Your one-stop destination for cryptocurrency.</Text>
      <Button variant="solid" alignContent={"center"} colorScheme="#FED049" size="lg" p={"8"}>Get started</Button>
      <Button variant="ghost" alignContent={"center"} colorScheme="#FED049" size="lg" p={"8"}>Contact Us</Button>
    </Box>
    <Box w="50%" position="relative">
    <motion.div
      style={{
        height: "20vh",
      }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
      <Image
        src={Hero}
        alt="Animated Picture"
        right="-10%"
      />
      </motion.div>
    </Box>
  </Flex>
  )
}

export default Home