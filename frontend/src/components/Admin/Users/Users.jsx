import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import cursor from '../../../assets/images/cursor2.png'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const Users = () => {

  const users = [{
    _id:"weuyr283r2389re2ihdudg",
    name:"Nimish",
    role:"admin",
    subscription:{
      status:"active"
    },
    email:"nimish@gmail.com"
  }]

  const updateHandler = (userId) => {
    console.log(userId);
  }

  const deleteButtonHandler = (userId) => {
    console.log(userId);
  }


  return (
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Box p={['0','16']} overflowX={'auto'}>
          <Heading textTransform={'uppercase'} children='All Users' my='16' textAlign={['center','left']} />
          <TableContainer width={['100vw','full']}>
            <Table variant={'simple'} size='lg'>
              <TableCaption>
                All Available Users In The Database
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>NAME</Th>
                  <Th>EMAIL</Th>
                  <Th>ROLE</Th>
                  <Th>SUBSCRIPTION</Th>
                  <Th isNumeric>ACTION</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((item)=>(
                  <Row key={item._id} item={item} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler}  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Sidebar />
    </Grid>
  )
}

export default Users

function Row({item,updateHandler,deleteButtonHandler}) {
  return (
    <Tr>
      <Td>
        #{item._id}
      </Td>
      <Td>
        {item.name}
      </Td>
      <Td>
        #{item.email}
      </Td>
      <Td>
        #{item.role}
      </Td>
      <Td>
        #{item.subscription.status==='active'?"Active":"Not Active"}
      </Td>
      <Td isNumberic>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=>updateHandler(item._id)} variant={'outline'} color={'purple.500'} >Change Role</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}