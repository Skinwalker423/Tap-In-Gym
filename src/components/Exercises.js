import React, {useState, useEffect} from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({exercises, setExercises, bodyPart}) => {

  console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
      setCurrentPage(value);

      window.scrollTo({top: 1800, behavior: 'smooth'})
  }

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
        {currentExercises.map((exercise, index) => {
          return (
            <ExerciseCard key={index} exercise={exercise} />
          )
        })}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
           />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises