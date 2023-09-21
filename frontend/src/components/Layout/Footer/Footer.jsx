import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialLinkedinCircular,TiSocialInstagramCircular} from 'react-icons/ti';
import {DiGithub} from "react-icons/di"

const Footer = () => {
  return (
    <Box padding={'4'} bg='blackAlpha.900' minH={'10vh'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width='100%'>
                <Heading children='All Rights Reserved ' color='white' />
                <Heading children='@Nimish Dureja ' color='yellow.400' fontFamily={'body'} size='sm'/>
            </VStack>
            <HStack spacing={['2','10']} justifyContent='center' color={'white'} fontSize='50'>
                <a href='https://www.linkedin.com/in/nimish-dureja-9b7150221/' target={'blank'}>
                    <TiSocialLinkedinCircular />
                </a>
                <a href='https://www.instagram.com/nimishdureja/' target={'blank'}>
                    <TiSocialInstagramCircular />
                </a>
                <a href='https://github.com/Nimish-Dureja-10' target={'blank'}>
                    <DiGithub />
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer