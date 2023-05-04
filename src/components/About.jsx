import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { motion} from 'framer-motion';
import img from '../assets/mining.png';

function AboutSection() {

  return (
    <Flex
      bgGradient="linear(to-b, #1A202C, #2D3748)"
      color="white"
      mt={7}
      py={20}
      px={10}
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: 'column-reverse', md: 'row' }}
    >
      
      <Box maxW={{ base: '100%', md: '50%' }}>
      <motion.img
          src={img}
          alt="BitBazaar"
  
          transition={{ duration: 0.5 }}
        />
      </Box>

      <Box
        maxW={{ base: '100%', md: '50%' }}
        textAlign={{ base: 'center', md: 'left' }}
        mb={{ base: 10, md: 0 }}
        p={{ base: 0, md: 10 }}
      >
        <Heading as="h2" size="4xl" mb={5} color="#00FFCA" fontFamily="Alkatra" fontWeight={"bold"}>
          What is BitBazaar?
        </Heading>
        <Text fontSize="2xl" fontFamily="Alkatra" letterSpacing="wide" color={"#FCE22A"}>
          BitBazaar is a leading platform for buying, selling, and trading
          cryptocurrencies. Our platform allows you to easily and securely
          invest in Bitcoin and other popular cryptocurrencies like Ethereum,
          Litecoin, and more.
        </Text>
    
        <Text fontSize="2xl" mt={5} fontFamily="Alkatra" letterSpacing="wide" color={"#FCE22A"}>
          Whether you're new to the world of cryptocurrency or a seasoned
          investor, BitBazaar has everything you need to start trading with
          ease. Sign up today and join the millions of users who trust BitBazaar
          for their cryptocurrency needs.
        </Text>
      </Box>
    </Flex>
  );
}

export default AboutSection;
