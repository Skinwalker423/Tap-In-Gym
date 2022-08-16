import React from 'react';
import ExerciseCard from './ExerciseCard';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscle, equipment, relatedTargetMuscleExercises, relatedEquipmentExercises }) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant={'h3'}>
        Related exercises that target {targetMuscle}
      </Typography>
      <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
        {relatedTargetMuscleExercises ? <HorizontalScrollbar data={relatedTargetMuscleExercises} /> : <Loader />}
        {/* {relatedTargetMuscleExercises.slice(0,3).map((exercise, index) => {
          return (
            <ExerciseCard exercise={exercise} index={index} />
          )
        })} */}
      </Stack>
    </Box>
  )
}

export default SimilarExercises