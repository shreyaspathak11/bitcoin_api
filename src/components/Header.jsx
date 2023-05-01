import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Stack,
  Button,
  Image,

} from "@chakra-ui/react";
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <Flex align="center" justify="space-between" p={4} bgColor ={"#27E1C1"} boxShadow={"xl"}>
      <Box>
      <Image src={logo} alt="logo" boxSize="50px"  css={{"&:hover": {transform: "scale(1.05)", boxShadow: "xl",},}} />
      </Box>
      <Box p={"4"}>
        <Heading size="lg" fontFamily={"Alkatra"} color={"black"} css={{"&:hover": {transform: "scale(1.05)", boxShadow: "xl",},}}>BitBazaar</Heading>
      </Box>
      <Spacer />
      <Box>
        <Stack direction="row" spacing={4}>
          <Button variant="ghost"><Link to="/">Home</Link></Button>
          <Button variant="ghost"><Link to="/coins">Coins</Link></Button>
          <Button variant="ghost"><Link to="/exchanges">Exchange</Link></Button>
          <Button variant="ghost"><Link to="/signin">Sign in</Link></Button>
          <Button variant="solid" colorScheme="FED049" ><Link to="/register">Register</Link></Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Navbar;