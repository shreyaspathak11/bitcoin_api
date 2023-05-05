import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Register = () => {
  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Flex align="center" justify="center" minH="100vh" bgGradient={bgGradient}>
      <Box
        maxW={{ base: '90%', md: '80%' }}
        borderWidth="1px"
        borderRadius="lg"
        p="6"
        bg="white"
        boxShadow="md"
      >
        <Box mb="6" textAlign="center">
          <Heading size="lg" fontWeight="bold">
            Register
          </Heading>
          <Text fontSize="sm">Please fill in the form to create your account.</Text>
        </Box>
        <form>
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="John" />
          </FormControl>
          <FormControl id="lastName" mt="4" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Doe" />
          </FormControl>
          <FormControl id="email" mt="4" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="johndoe@example.com" />
          </FormControl>
          <FormControl id="password" mt="4" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="********" />
          </FormControl>
          <FormControl mt="4" display="flex" alignItems="center">
            <Checkbox defaultIsChecked>
              I agree to the{' '}
              <Link color="teal.500" href="#" isExternal>
                Terms and Conditions
              </Link>
            </Checkbox>
          </FormControl>
          <Button colorScheme="teal" size="lg" mt="6" w="100%" type="submit">
            Register
          </Button>
        </form>
        <Text mt="8" textAlign="center" fontWeight="bold">
          OR
        </Text>
        <Flex align="center" justify="center" mt="6">
          <Button
            leftIcon={<FaFacebook />}
            colorScheme="facebook"
            size="lg"
            mr="4"
            variant="outline"
            fontWeight="medium"
          >
            Register with Facebook
          </Button>
          <Button
            leftIcon={<FaGoogle />}
            colorScheme="red"
            size="lg"
            fontWeight="medium"
            variant="outline"
          >
            Register with Google
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Register;
