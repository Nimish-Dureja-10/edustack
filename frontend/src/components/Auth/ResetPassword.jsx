import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ResetPassword = () => {

    const [password,setPassword] = useState('');

  return (
    <Container minH={'87vh'} display='flex' justifyContent={'center'} alignItems='center' pb={'8'} >
        <form>
            <Heading children='Reset Password' my='8' textTransform={'uppercase'} textAlign={['center','left']} />
            <VStack spacing={'8'}>
                <Input required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter new password' type={'password'} focusBorderColor='purple.500' />
                <Button type='submit' width={'full'} colorScheme='purple'>
                    Reset Password
                </Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ResetPassword