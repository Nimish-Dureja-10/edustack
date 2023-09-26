import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({url='/',title='Home',onClose}) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>
      {title}
    </Button>
  </Link>
)

const Header = () => {

  const {isOpen,onClose,onOpen} = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role : "admin"
  }

  const logoutHandler = () => {
    alert('Logout Successfull');
    onClose();
  }

  return (
    <>
      <ColorModeSwitcher/>
      <Button 
      onClick={onOpen}
      colorScheme={'purple'} 
      width='12' height={'12'} 
      rounded='full' 
      position='fixed' 
      top={'6'} 
      left='6'>
        <RiMenu5Fill />
      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>
            EduStack
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'6'} alignItems='flex-start'>
              <LinkButton onClose={onClose} url='/' title='Home'/>
              <LinkButton onClose={onClose} url='/courses' title='Browse All Courses'/>
              <LinkButton onClose={onClose} url='/request' title='Request A Course'/>
              <LinkButton onClose={onClose} url='/contact' title='Contact Us'/>
              <LinkButton onClose={onClose} url='/about' title='About'/>
              <HStack justifyContent={'space-evenly'} position='absolute' bottom='2rem' width={'80%'}>
                {
                  isAuthenticated ? (
                    <>
                      <VStack>
                        <HStack>
                          <Link onClick={onClose} to="/profile">
                            <Button variant={'ghost'} colorScheme={'purple'}>
                              Profile
                            </Button>
                          </Link>
                          <Button variant={'ghost'} onClick={logoutHandler}>
                            <RiLogoutBoxLine />
                            Logout
                          </Button>
                        </HStack>
                        {
                          user && user.role==='admin' && <Link onClick={onClose} to={"/admin/dashboard"} >
                            <Button colorScheme={'purple'}>
                              <RiDashboardFill style={{margin:"4px"}} />
                              Dashboard
                            </Button>
                          </Link>
                        }
                      </VStack>
                    </>
                  ) 
                  : 
                  (
                    <>
                      <Link onClick={onClose} to="/login">
                        <Button colorScheme={'purple'}>
                          Login
                        </Button>
                      </Link>
                      <p>OR</p>
                      <Link onClick={onClose} to="/register">
                        <Button colorScheme={'purple'}>
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )
                }
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header;