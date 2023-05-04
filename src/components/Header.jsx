import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  VStack,
  HStack,
  useColorMode,
  Switch,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.png';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  // handle window resize to toggle isMobile state
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <Flex align="center" justify="space-between" p={4} bgColor={"#27E1C1"} boxShadow={"xl"}>
      <Box>
        <Image src={logo} alt="logo" boxSize="50px" css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl", }, }} />
      </Box>

      {/* Mobile view */}
      {isMobile ?
        <>
        
          <IconButton icon={<FiMenu />} aria-label="Open menu" variant="ghost" onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch">
                  <Button variant="ghost" onClick={onClose}><Link to="/">Home</Link></Button>
                  <Button variant="ghost" onClick={onClose}><Link to="/coins">Coins</Link></Button>
                  <Button variant="ghost" onClick={onClose}><Link to="/exchanges">Exchange</Link></Button>
                  <Button variant="ghost" onClick={onClose}><Link to="/signin">Sign in</Link></Button>
                  <Button variant="solid" color="#27E1C1"><Link to="/register">Register</Link></Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
        :
        // Desktop view
        <HStack spacing={4}>
          <Button variant="ghost"><Link to="/">Home</Link></Button>
          <Button variant="ghost"><Link to="/coins">Coins</Link></Button>
          <Button variant="ghost"><Link to="/exchanges">Exchange</Link></Button>
          <Button variant="ghost"><Link to="/signin">Sign in</Link></Button>
          <Button variant="solid" color="#27E1C1"><Link to="/register">Register</Link></Button>
          <Switch colorScheme="teal" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        </HStack>
      }

    </Flex>
  );
}

export default Navbar;