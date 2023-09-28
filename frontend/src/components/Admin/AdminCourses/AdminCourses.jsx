import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import cursor from '../../../assets/images/cursor2.png'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'

const AdminCourses = () => {

  const courses = [{
    _id:"weuyr283r2389re2ihdudg",
    title:"ReactJs Course",
    category:"Web Development",
    poster : {
      url :"https://www.shutterstock.com/shutterstock/photos/1811246308/display_1500/stock-vector-sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-vector-1811246308.jpg"
    },
    createdBy:"Nimish Dureja",
    views: 123,
    numOfVideos : 12
  }];

  const {isOpen,onClose,onOpen} = useDisclosure();

  const courseDetailsHandler = (userId) => {
    onOpen();
  }

  const deleteButtonHandler = (userId) => {
    console.log(userId);
  }

  const deleteLectureButtonHandler = (courseId,lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  }

  const addLectureHandler = (e,courseId,title,description,video) => {
    e.preventDefault();
  }

  return (
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Box p={['0','8']} overflowX={'auto'}>
          <Heading textTransform={'uppercase'} children='All Courses' my='16' textAlign={['center','left']} />
          <TableContainer width={['100vw','full']}>
            <Table variant={'simple'} size='lg'>
              <TableCaption>
                All Available Courses In The Database
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>POSTER</Th>
                  <Th>TITLE</Th>
                  <Th>CATEGORY</Th>
                  <Th>CREATOR</Th>
                  <Th isNumeric>VIEWS</Th>
                  <Th isNumeric>LECTURE</Th>
                  <Th isNumeric>ACTION</Th>
                </Tr>
              </Thead>
              <Tbody>
                {courses.map((item)=>(
                  <Row key={item._id} item={item} courseDetailsHandler={courseDetailsHandler} deleteButtonHandler={deleteButtonHandler}  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <CourseModal id={"fhwfwifywr4y24course"} courseTitle={"ReactJs Course"} deleteLectureButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler} title isOpen={isOpen} onClose={onClose} />
        </Box>
        <Sidebar />
    </Grid>
  )
}

export default AdminCourses

function Row({item,courseDetailsHandler,deleteButtonHandler}) {
  return (
    <Tr>
      <Td>
        #{item._id}
      </Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>
        {item.title}
      </Td>
      <Td textTransform={'uppercase'}>
        {item.category}
      </Td>
      <Td>
        {item.createdBy}
      </Td>
      <Td isNumberic>
        {item.views}
      </Td>
      <Td isNumberic>
        {item.numOfVideos}
      </Td>
      <Td isNumberic>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=>courseDetailsHandler(item._id)} variant={'outline'} color={'purple.500'} >View Lectures</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}