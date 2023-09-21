import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {

    const [email,setEmail] = useState('');

  return (
    <Container minH={'87vh'} display='flex' justifyContent={'center'} alignItems='center' pb={'8'} >
        <form>
            <Heading children='Forget Password' my='8' textTransform={'uppercase'} textAlign={['center','left']} />
            <VStack spacing={'8'}>
                <Input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='abc@example.com' type={'email'} focusBorderColor='purple.500' />
                <Button type='submit' width={'full'} colorScheme='purple'>
                    Send Reset Link
                </Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ForgetPassword