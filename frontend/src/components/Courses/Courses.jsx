import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount}) => {
    return (
        <VStack className='course' alignItems={['center','flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit="contain" />
            <Heading 
            textAlign={['center','left']}
            maxW="200px" 
            size='sm'
            fontFamily={'sans-serif'}
            noOfLines={3}
            children={title}
            />
            <Text noOfLines={2} children={description}/>
            <HStack>
                <Text fontWeight={"bold"} textTransform="uppercase" children={'Created By'}/> 
                <Text fontFamily={"body"} textTransform="uppercase" children={creator}/>
            </HStack>
            <Heading textAlign={"center"} size="xs" textTransform={'uppercase'} children={`Lectures - ${lectureCount}`} />
            <Heading size="xs" textTransform={'uppercase'} children={`Views - ${views}`} />
            <Stack direction={['column','row']} alignItems='center'>
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'purple'}>Watch Now</Button>
                </Link>
                <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>addToPlaylistHandler(id)} >Add To Playlist</Button>
            </Stack>
        </VStack>
    )

}

const Courses = () => {
    const [keyword,setKeyword] = useState('');
    const [category,setCategory] = useState('');

    const categories = [
        "Web Development","Artificial Intelligence","Data Science",
        "BlockChain Development","Flutter Development",
        "React Native","Game Development"
    ] 

    const addToPlaylistHandler = () => {
        alert(`added to playlist`)
    }

  return (
    <Container minH={"95vh"} maxW='container.lg' paddingY={'8'}>
        <Heading children="All Courses" margin={'8'} />
        <Input value={keyword} 
        onChange={e => setKeyword(e.target.value)} 
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor='purple.500'
        />
        <HStack overflowX={"auto"} paddingY="8" css={{"&::-webkit-scrollbar":{display:"none"}}}>
            {
                categories.map((item,index)=>(
                    <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                        <Text children={item} />
                    </Button>
                ))
            }
        </HStack>
        <Stack
        direction={['column','row']}
        flexWrap="wrap"
        justifyContent={['flex-start','space-evenly']}
        alignItems={['center','flex-start']}
        >
        <Course 
        title="Sample" 
        description="sample" 
        views={23} 
        imageSrc={"https://www.shutterstock.com/shutterstock/photos/1811246308/display_1500/stock-vector-sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-vector-1811246308.jpg"} 
        id={'sample'} 
        creator={"Nimish"} 
        lectureCount={2}
        addToPlaylistHandler={addToPlaylistHandler}
         />
        </Stack>
    </Container>
  )
}

export default Courses