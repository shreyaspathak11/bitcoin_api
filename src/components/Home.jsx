import React from 'react'
import {
  Box,
  Container,
  Wrap,
  WrapItem,
  Text,
  Image,
} from "@chakra-ui/react";


const Home = () => {
  return (
    
      <Box>
      <Box bg="gray.50">
          <Container maxW="container.2xl" centerContent py={[20]}>
          <Text color="gray.600" fontSize="lg">
            Used by teams worldwide
          </Text>

          <Wrap
            spacing={[10, 20]}
            mt={8}
            align="center"
            justify="center"
            w="full"
          >
            <WrapItem>
              <Image src="microsoft-logo.svg" alt="Microsoft logo" />
            </WrapItem>

            <WrapItem>
              <Image src="adobe-logo.svg" alt="Adobe logo" />
            </WrapItem>

            <WrapItem>
              <Image src="microsoft-logo.svg" alt="Microsoft logo" />
            </WrapItem>

            <WrapItem>
              <Image src="adobe-logo.svg" alt="Adobe logo" />
            </WrapItem>
          </Wrap>
        </Container>
      </Box>
    </Box>
    
  )
}

export default Home