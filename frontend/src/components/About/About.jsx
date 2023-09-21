import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import profile from '../../assets/images/profile1.jpg'
import introVideo from "../../assets/videos/introVideo.mp4";
import data from '../../assets/docs/termsAndCondition';

const Founder = () => (
    <Stack direction={['column','row']} spacing={['4','8']} padding={'8'}>
        <VStack>
            <Avatar src={profile} boxSize={['40','48']} />
            <Text children='Co-Founder' opacity={'0.7'}  />
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading children='Nimish Dureja' size={['md','xl']} />
            <Text textAlign={['center','left']} children='I am a Fullstack Developer. This is a platform where you will find awesome courses to study' />
        </VStack>   
    </Stack>
)

const VideoPlayer = () => (
    <Box>
        <video autoplay muted loop controls src={introVideo}
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        >

        </video>
    </Box>
);

const TandC = ({termsAndCondition}) => (
    <Box>
        <Heading size={'md'} children="Terms & Conditions" textAlign={['center','left']} my='4' />
        <Box h={'sm'} p='4' overflow={'scroll'}>
            <Text letterSpacing={'widest'} fontFamily='heading' textAlign={['center','left']}>
                {termsAndCondition}
            </Text>
            <Heading m={'4'} size='xs' children='Refund only applicable for cancellation within 7 days' />
        </Box>
    </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>
        <Heading children='About Us' textAlign={['center','left']} />
        <Founder /> 
        <Stack margin={'8'} direction={['column','row']} alignItems='center'>
            <Text fontFamily={'cursive'} m='8' textAlign={['center','left']}>
                We are a video streaming platform with some premium courses available 
                only for premium users.
            </Text>
            <Link to='/subscribe'>
                <Button variant={'ghost'} colorScheme='purple'>Checkout Our Plan</Button>
            </Link>
        </Stack>
        <VideoPlayer />
        <TandC termsAndCondition={data} /> 
        <HStack my='4' p={'4'} >
            <RiSecurePaymentFill />
            <Heading children='Payment is secured by Razor Pay' size={'xs'} fontFamily='sans-serif' textTransform={'uppercase'} />
        </HStack>
    </Container>
  )
}

export default About