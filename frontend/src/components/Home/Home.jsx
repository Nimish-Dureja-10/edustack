import React from 'react'
import  {Link} from 'react-router-dom';
import {Box, Button, Heading, HStack, Image, Stack, Text, VStack} from '@chakra-ui/react';
import './home.css';
import vg from '../../assets/images/bg.jpeg';
import {CgGoogle,CgYoutube} from "react-icons/cg";
import {SiCoursera,SiUdemy} from 'react-icons/si';
import {DiAws} from "react-icons/di";
import introVideo from "../../assets/videos/introVideo.mp4";

const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        {/* flex container with direction col in mobile and row in laptop with 100% height */}
        <Stack
          direction={['column','row']}
          height="100%"
          justifyContent={['center','space-between']}
          alignItems='center'
          spacing={['16','56']}
          >
          <VStack width={'full'} alignItems={['center','flex-end']}>
            <Heading children='LEARN FROM THE EXPERTS' size={'2xl'} textAlign={['center']} />
            <Text children='Find Valuable Content Here' />
            <Link to="/courses">
              <Button size={'lg'} colorScheme='purple'>
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image className='vector-graphics' boxSize={'sm'} src={vg} objectFit='contain' />
        </Stack>
      </div>
      <Box padding={'8'} bgColor='blackAlpha.800'>
        <Heading children='Our Partners' textAlign={'center'} fontFamily='body'
         color={'purple.400'}
         />
         <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop='2'>
           <CgGoogle />
           <CgYoutube />
           <SiCoursera />
           <SiUdemy />
           <DiAws />
         </HStack>
      </Box>
      <div className='container2'>
        <video autoplay controls src={introVideo}
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        >

        </video>
      </div>
    </section>
  )
}

export default Home