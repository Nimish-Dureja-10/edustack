import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Container h='90vh' p='16'>
        <VStack justifyContent='center' h='full' spacing='4' boxShadow={'xl'} >
            <RiErrorWarningFill size={'5rem'} />
            <Heading my='8' children='Page Not Found' textAlign={'center'} /> 
            <Link to='/'>
                <Button variant={'ghost'}>Go Back To Home</Button>
            </Link>
        </VStack>
    </Container>
  )
}

export default PageNotFound