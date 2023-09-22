import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container h='90vh' p='16'>
        <Heading my='8' children='You have Pro Pack' textAlign={'center'} /> 
        <VStack alignItems={'center'} boxShadow={'lg'} pb='16' borderRadius={'lg'} >
            <Box bg={'purple.400'} p='4' w='full' css={{borderRadius:"8px 8px 0 0"}} >
                <Text children="Payment Successfull"  />
            </Box>
            <Box p='4'>
                <VStack textAlign={'center'} px='8' mt='4' spacing={'8'} >
                    <Text children="Congratulations you're a pro member. You have access to premium content. "/>
                    <Heading size={'4xl'}>
                        <RiCheckboxCircleFill />
                    </Heading>
                </VStack>
            </Box>
            <Link to='/profile'>
                <Button variant={'ghost'}>Go to Profile</Button>
            </Link>
            <Heading size={'xs'}>
                Reference : dfjifhif3387njf24yrhkf_.,434
            </Heading>
        </VStack>
    </Container>
  )
}

export default PaymentSuccess