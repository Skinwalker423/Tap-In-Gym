import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({exerciseVideos, name}) => {


  if(!exerciseVideos.length){
    return 'Loading...'
  }

  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p='20px'>
      <Typography variant='h3'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercises
      </Typography>
      <Stack justifyContent='flex-start' flexWrap={'wrap'} alignItems='center' sx={{flexDirection: {lg: 'row'}, gap: {lg: '50px', xs: '0'}}}>
        {exerciseVideos?.slice(0, 6).map((vid, index) => {
          return (
              <Stack key={index}>
                <a 
                  key={index}
                  className='exercise-video'
                  href={`https://youtube.com/watch?v=${vid.video.videoId}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={vid.video.thumbnails[0].url} alt={vid.video.title} />
                  <Box>
                  <Typography variant='h5' color='#000'>
                      <p>{vid.video.title}</p>
                  </Typography>
                  <Typography variant='h6' color='#000'>
                      <p>{vid.video.channelName}</p>
                  </Typography>
                </Box>
                </a>
                
              </Stack>
          )
        })}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos