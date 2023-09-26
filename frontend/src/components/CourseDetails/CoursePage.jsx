import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../assets/videos/introVideo.mp4";

const CoursePage = () => {

  const [lectureNumber,setLectureNumber] = useState(0);
  const lectures = [
      {
        _id:"ddaadasd",
        title:"Sample",
        description:"Sample description",
        video : {
            url : "shdhuhuh"
        }
      },
      {
        _id:"ddaadasd2",
        title:"Sample2",
        description:"Sample2 description",
        video : {
            url : "shdhuhuh2"
        }
      },
      {
        _id:"ddaadasd3",
        title:"Sample3",
        description:"Sample3 description",
        video : {
            url : "shdhuhuh3"
        }
      },
      {
        _id:"ddaadasd4",
        title:"Sample4",
        description:"Sample4 description",
        video : {
            url : "shdhuhuh4"
        }
      },
    ];

  return (
    <Grid minH='90vh' px={['4','20']} py={'8'} mt={['16']} templateColumns={['1fr','3fr 1fr']}>
        <Box>
            <video width='100%' autoplay controls src={introVideo}
            controlsList='nodownload noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            >
            </video>
            <Heading children={`#${lectureNumber+1} - ${lectures[lectureNumber].title}`} m='4' />
            <Heading children='Description' m='4' />
            <Text children={`${lectures[lectureNumber].description}`} m='4' />
        </Box>
        <VStack>
            {lectures.map((element,index)=>(
                <button onClick={()=>setLectureNumber(index)}  key={element._id} style={{width:"100%",padding:'1rem',textAlign:"center",margin:"0", borderBottom:"1px solid rgba(0,0,0,0.2)"}}>
                    <Text numberOfLines={1}>
                        #{index+1} {element.title}
                    </Text>
                </button>
            ))}
        </VStack>
    </Grid>
  )
}

export default CoursePage