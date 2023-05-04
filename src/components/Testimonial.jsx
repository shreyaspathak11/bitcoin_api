import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const TestimonialCard = ({ testimonial }) => (
    <Box
      maxW="xl"
      mx="auto"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      rounded="lg"
      p={{ base: 4, md: 8 }}
      borderWidth="1px"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
    >
      <Flex>
        <Avatar
          size="xl"
          name={testimonial.name}
  