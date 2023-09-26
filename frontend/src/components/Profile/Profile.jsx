import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileUploadCss } from '../Auth/Register'

const Profile = () => {

    const user = {
        name : "Nimish Dureja",
        email : "Nimishdureja14@gmail.com",
        createdAt : String(new Date().toISOString()),
        role : "user",
        subscription : {
            status : "active"
        },
        playlist : [
            {
                course : "Sample",
                poster : "https://www.shutterstock.com/shutterstock/photos/1811246308/display_1500/stock-vector-sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-vector-1811246308.jpg"
            }
        ]
    }

    const removeFromPlaylistHandler = (id) => {
        alert(id);
    }

    const {isOpen,onClose,onOpen} = useDisclosure();

    const changeImageSubmitHandler = (e,image) => {
        e.preventDefault();
        console.log(image);
    }

  return (
    <Container minH={'95vh'} maxW='container.lg' py='8'>
        <Heading children='Profile' m='8' textTransform={'uppercase'} />
        <Stack justifyContent={'flex-start'} direction={['column','row']} alignItems={'center'} spacing={['8','16']} p='8' >
            <VStack>
                <Avatar boxSize={'48'} />
                <Button onClick={onOpen} colorScheme={'purple'} variant='ghost' >
                    Change Photo
                </Button>
            </VStack>
            <VStack spacing={'4'} alignItems={['center','flex-start']}>
                <HStack>
                    <Text children='Name' fontWeight={'bold'} />
                    <Text children={`${user.name}`} />
                </HStack>
                <HStack>
                    <Text children='Email' fontWeight={'bold'} />
                    <Text children={`${user.email}`} />
                </HStack>
                <HStack>
                    <Text children='Joined At' fontWeight={'bold'} />
                    <Text children={`${user.createdAt.split('T')[0]}`} />
                </HStack>
                {
                    user.role !== 'admin' && 
                    <HStack>
                        <Text children='Subscription' fontWeight={'bold'} />
                        {
                            user.subscription.status === 'active'
                            ?
                            (<Button color={'purple.500'} variant='unstyled'>Cancel Subscription</Button>)
                            :
                            (
                            <Link to='/subscribe'>
                                <Button colorScheme={'purple'}>Subscribe</Button>
                            </Link>)
                            
                        }
                    </HStack>
                }
                <Stack direction={['column','row']} alignItems={'center'}>
                    <Link to='/updateprofile'>
                        <Button colorScheme={'purple'}>
                            Update Profile
                        </Button>
                    </Link>
                    <Link to='/changepassword'>
                        <Button colorScheme={'purple'} variant='ghost'>
                            Change Password
                        </Button>
                    </Link>
                </Stack>
            </VStack>
        </Stack>
        <Heading children='Playlist' size={'md'} my='8' />
        {
            user.playlist.length > 0 && (
                <Stack direction={['column','row']} alignItems='center' flexWrap={'wrap'} p='4' >
                    {
                        user.playlist.map((element) => (
                            <VStack width={'48'} m='2' key={element.course}>
                                <Image boxSize={'full'} objectFit='contain' src={element.poster} />
                                <HStack>
                                    <Link to={`/course/${element.course}`}>
                                        <Button colorScheme={'purple'} variant='ghost' >Watch Now</Button>
                                    </Link>
                                    <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                                        <RiDeleteBin7Fill />
                                    </Button>
                                </HStack>
                            </VStack>
                        ))
                    }
                </Stack>
            )
        }
        <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler}  isOpen={isOpen} onClose={onClose} />
    </Container>
  )
}

export default Profile

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}) {

    const [imagePrev,setImagePrev] = useState('');
    const [image,setImage] = useState('');
  
    const changeImage = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      }
    } 

    const closeHandler = () => {
        onClose();
        setImagePrev("");
        setImage("");
    }

    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=> changeImageSubmitHandler(e,image)}>
                            <VStack spacing={'8'}>
                                {
                                    imagePrev && <Avatar src={imagePrev} boxSize="48"  />
                                }
                                <Input type='file' css={{'&::file-selector-button':fileUploadCss}} onChange={changeImage} />
                                <Button width={'full'} colorScheme='purple' type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeHandler} mr='3'>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}