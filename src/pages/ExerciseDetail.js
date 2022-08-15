import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {fetchData, exerciseOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async() => {
      
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const fetchedDetail = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(fetchedDetail);

    }
    fetchExerciseDetail();
  }, [id])


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail