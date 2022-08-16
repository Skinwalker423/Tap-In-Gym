import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {fetchData, exerciseOptions, youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [relatedTargetMuscleExercises, setRelatedTargetMucleExercises] = useState([]);
  const [relatedEquipmentExercises, setRelatedEquipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async() => {
      
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const fetchedDetail = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(fetchedDetail);

      const fetchYoutubeExerciseVideos = await fetchData(`${youTubeSearchUrl}/search?query=${fetchedDetail.name}`, youtubeOptions);

      setRelatedTargetMucleExercises(fetchYoutubeExerciseVideos.contents);

      const getRelatedExercisesByTargetMuscle = await fetchData(`${exerciseDbUrl}/exercises/target/${fetchedDetail.target}`);

      setRelatedEquipmentExercises(getRelatedExercisesByTargetMuscle);

      const getRelatedExercisesByEquipment = await fetchData(`${exerciseDbUrl}/exercises/equipment/${fetchedDetail.equipment}`);

      setRelatedEquipmentExercises(getRelatedExercisesByEquipment);

    }
    fetchExerciseDetail();
  }, [id])


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos}name={exerciseDetail.name} />
      <SimilarExercises relatedTargetMuscleExercises={relatedTargetMuscleExercises} relatedEquipmentExercises={relatedEquipmentExercises} targetMuscle={exerciseDetail.target} equipment={exerciseDetail.equipment} />
    </Box>
  )
}

export default ExerciseDetail