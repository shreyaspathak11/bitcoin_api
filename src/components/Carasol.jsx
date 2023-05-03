import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);

function Carousel() {
  return (
    <Box maxW="6xl" marginX="auto" mt={8}>
      <Swiper pagination={true}>
        <SwiperSlide>
          <Flex
            bg="gray.100"
            h="lg"
            justify="center"
            align="center"
            backgroundImage="url('https://via.placeholder.com/1200x600')"
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Box textAlign="center">
              <Heading as="h2" size="2xl" mb={4}>
                Welcome to BitBazaar
              </Heading>
              <Text fontSize="xl" fontWeight="semibold">
                Your one-stop shop for all things Bitcoin.
              </Text>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="gray.100"
            h="lg"
            justify="center"
            align="center"
            backgroundImage="url('https://via.placeholder.com/1200x600')"
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Box textAlign="center">
              <Heading as="h2" size="2xl" mb={4}>
                Invest in Bitcoin
              </Heading>
              <Text fontSize="xl" fontWeight="semibold">
                Discover the benefits of investing in Bitcoin with BitBazaar.
              </Text>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="gray.100"
            h="lg"
            justify="center"
            align="center"
            backgroundImage="url('https://via.placeholder.com/1200x600')"
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Box textAlign="center">
              <Heading as="h2" size="2xl" mb={4}>
                Trade with Confidence
              </Heading>
              <Text fontSize="xl" fontWeight="semibold">
                Buy, sell, and trade Bitcoin like a pro with BitBazaar.
              </Text>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Carousel;