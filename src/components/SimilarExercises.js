import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscle, equipment, relatedTargetMuscleExercises, relatedEquipmentExercises }) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant={'h3'} mb={5}>
        Related exercises that target <span style={{color: 'red'}}>{targetMuscle}</span>

      </Typography>
      <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
        {relatedTargetMuscleExercises.length ? <HorizontalScrollbar data={relatedTargetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant={'h3'} mb={5}>
        Related exercises that use <span style={{color: 'red'}}>{equipment}</span>
      </Typography>
      <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
        {relatedEquipmentExercises.length ? <HorizontalScrollbar data={relatedEquipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises