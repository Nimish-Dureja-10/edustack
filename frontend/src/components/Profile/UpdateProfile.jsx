import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
  return (
    <Container py='16' minH={'90vh'}>
        <form>
            <Heading children='Update Profile' my='16' textAlign={'center'} textTransform='uppercase' />
            <VStack spacing={'8'}>
                <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' type={'text'} focusBorderColor='purple.500' />
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type={'email'} focusBorderColor='purple.500' />
                <Button width={'full'} colorScheme="purple" type='submit'>
                    Update
                </Button>
            </VStack>
        </form>
    </Container>
  )
}

export default UpdateProfile