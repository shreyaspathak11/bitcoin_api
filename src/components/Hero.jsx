import React from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';

import heroImage from '../assets/increase.png';

function Hero() {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      h={{ base: 'auto', md: '80vh' }}
      py={{ base: '6', md: '16' }}
      px={{ base: '4', md: '16', lg: '32' }}
      bgGradient="linear(to-b, #1A202C, #2D3748)"
      color="white"
    >
      <Box w={{ base: 'full', md: '50%' }} pr={{ md: '8' }}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="extrabold"
          lineHeight="shorter"
          mb="6"
        >
          Welcome to BitBazaar
        </Heading>
        <Text fontSize="lg" mb="8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          diam vel convallis lacinia, ante metus rutrum nisi, nec blandit
          lorem neque non arcu.
        </Text>
        <Flex direction={{ base: 'column', md: 'row' }} spacing="4">
          <Button colorScheme="teal" size="lg" >
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </Flex>
      </Box>
      <Box
        w={{ base: 'full', md: '50%' }}
        display={{ base: 'none', md: 'block' }}
      >
        <Image
          src={heroImage}
          alt="hero image"
          w="full"
          h="full"
          objectFit="cover"
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </Box>
    </Flex>
  );
}

export default Hero;
