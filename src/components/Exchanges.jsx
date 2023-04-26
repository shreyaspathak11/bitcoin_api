import { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Heading, VStack, Image, Text } from '@chakra-ui/react'
import Loader from './Loader'

const Exchanges = () => {
    
    const [exchanges, setExchanges] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchExchanges = async () => {
            const { data } = await axios.get(`${server}/exchanges`);
            setExchanges(data);
            console.log(data);
            setLoading(false);

    }
    fetchExchanges();
    }
    , [])

    return (
        <Container maxW={"container.xl"} centerContent>
            { loading ? ( 
                <Loader /> 
                ) : (
                <>
                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {exchanges.map((i) => (
                            <ExchangeCard
                                key={i.id}       //without key, react will throw error
                                name={i.name}
                                img={i.image}
                                rank={i.trust_score_rank}
                                url={i.url}
                             />
                        ))}
                    </HStack>
                </>
            )}
        </Container>
    );  
}

const ExchangeCard = ({name, img, rank, url}) => (
    <a href={url} target={"blank"}>
    <VStack>
        <Image
            src={img}
            alt={"Exchanges"}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
        />
        <Heading size={"md"} noOfLines={1}>
        {rank}
        </Heading>
        <Text noOfLines={1}>
        {name}
        </Text>
    </VStack>

    </a>
)



export default Exchanges