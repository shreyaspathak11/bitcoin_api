import React,{ useState } from 'react'
import Loader from './Loader'
import { Box, Container } from '@chakra-ui/react'



const coinDetails = () => {
  const [coin, setCoin] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [currency, setCurrency] = useState("inr")
  return (
    <Container maxW="container.xl" >
        {loading ? (<Loader />) : (
          <>
            <Box width={"full"} borderWidth={1}>
              asdsad
            </Box>
          </>
        )}
      </Container>

  )
}

export default coinDetails