import React from 'react';
import { Typography, Stack, Box, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

    const {gifUrl, name, bodyPart, target, equipment} = exerciseDetail;

    console.log(gifUrl);
    console.log(exerciseDetail);

        
    return (
        <Stack gap='60px' sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack>
                <Stack sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}} >
                    <img src={BodyPartImage} alt={bodyPart} />
                    <Typography>
                        {bodyPart}
                    </Typography>
                </Stack>
                <Stack sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}} >
                    <img src={TargetImage} alt={target} />
                    <Typography>
                        {target}
                    </Typography>
                </Stack>
                <Stack sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}} >
                    <img src={EquipmentImage} alt={equipment} />
                    <Typography>
                        {equipment}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
        
    )
}

export default Detail