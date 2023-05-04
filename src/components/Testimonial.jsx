import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  keyframes
} from "@chakra-ui/react";



function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      review: 'I\'ve been using BitBazaar for a few months now and it\'s been a great experience. The user interface is intuitive and the customer service is top-notch. Highly recommended!'
    },
    {
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150',
      review: 'I was hesitant to try out BitBazaar at first, but I\'m so glad I did. The platform is easy to use and the selection of coins is impressive. I\'ve already recommended it to my friends.'
    },
    {
      name: 'Bob Johnson',
      image: 'https://via.placeholder.com/150',
      review: 'BitBazaar has been a game-changer for me. I\'ve been able to easily buy and sell coins without any issues. The fees are reasonable and the platform is reliable.'
    }
  ];

  const pulseRing = keyframes`
  0% {
  transform: scale(0.33);
}
40%,
50% {
  opacity: 0;
}
100% {
  opacity: 0;
}
  `;

  return (
    <Box  py="10" px="6">
      <Heading size="xl" color="white" mb="6" textAlign="center">What Our Customers Say</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing="10" justifyContent="center">
        {testimonials.map((testimonial) => (
          <Box key={testimonial.name} textAlign="center">
            <Image src={testimonial.image} alt={testimonial.name} borderRadius="full" boxSize="150px" mx="auto" mb="4" w="96px" h="96px" color={"teal"} animation={`2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`} />
            <Heading size="md" color="white" mb="2">{testimonial.name}</Heading>
            <Text color="gray.400">{testimonial.review}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Testimonials;
