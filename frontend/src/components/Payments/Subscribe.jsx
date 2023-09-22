import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h={'90vh'} p='16'>
        <Heading children='Welcome' m={'8'} textAlign='center' />
        <VStack boxShadow={'lg'} spacing='0' alignItems={'stretch'} borderRadius='lg' >
            <Box bg='purple.400' p='4' css={{borderRadius:"8px 8px 0 0"}} >
                <Text children="Pro Pack - ₹499" />
            </Box>
            <Box p='4'  >
                <VStack textAlign={'center'} px='8' mt='4' spacing={'8'} >
                    <Text  children='Join Pro Pack and get access to all content' />
                    <Heading size={'md'} children='₹499 Only' />
                </VStack>
                <Button my='8' width={'full'} colorScheme='purple' >
                    Buy Now
                </Button>
            </Box>
            <Box bg="blackAlpha.600" css={{borderRadius:"0 0 8px 8px"}} p='4' >
                <Heading size={'sm'} children='100% Refund at cancellation' color={'white'} textTransform='uppercase' />
                <Text fontSize={'xs'} color='white' children='**Terms and Condition Applied' />
            </Box>
        </VStack>
    </Container>
  )
}

export default Subscribe