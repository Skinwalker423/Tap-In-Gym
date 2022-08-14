import React, {useState, useEffect} from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({exercises, setExercises, bodyPart}) => {

  console.log(exercises);

  return (
    <Box 
      id='exercises'
      sx={{
        lg: '110px'
      }}
      mt='50px'
      p='20px'

    >
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack direction={'row'} flexWrap='wrap' justifyContent={'center'} sx={{gap: {lg: '110px', xs: '50px'}}}>
        {exercises.map((exercise, index) => {
          return (
            <ExerciseCard key={index} exercise={exercise} />
          )
        })}
      </Stack>
    </Box>
  )
}

export default Exercises