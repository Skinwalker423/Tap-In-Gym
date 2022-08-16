import React from 'react';
import ExerciseCard from './ExerciseCard';
import { Box, Stack, Typography } from '@mui/material';

const SimilarExercises = ({targetMuscle, equipment, relatedTargetMuscleExercises, relatedEquipmentExercises }) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography>
        Related exercises that target {targetMuscle}
      </Typography>
    </Box>
  )
}

export default SimilarExercises