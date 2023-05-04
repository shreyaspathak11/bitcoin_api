import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <Flex align="center" justify="space-between" px={{ base: 2, md: 4 }} py={{ base: 2, md: 4 }} bgColor="#27E1C1" boxShadow="xl">
      <Box>
        <Image src={logo} alt="logo" maxW={{ base: "80px", md: "100%" }} css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl", } }} />
      </Box>
      <Box px={{ base: 2, md: 4 }}>
        <Heading size="lg" fontFamily="Alkatra" color="black" css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl", } }}>BitBazaar</Heading>
      </Box>
      <Spacer />
      <Box>
        <HStack spacing={{ base: 2, md: 4 }} fontFamily="Alkatra">
          <Button variant="ghost"><Link to="/">Home</Link></Button>
          <Button variant="ghost"><Link to="/coins">Coins</Link></Button>
          <Button variant="ghost"><Link to="/exchanges">Exchange</Link></Button>
          <Button variant="ghost"><Link to="/signin">Sign in</Link></Button>
          <Button variant="solid" color="#27E1C1"><Link to="/register">Register</Link></Button>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Navbar;
