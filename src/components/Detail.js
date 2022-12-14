import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

    const {gifUrl, name, bodyPart, target, equipment} = exerciseDetail;


    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
    ]

        
    return (
        <Stack gap='60px' sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack>
                <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
                    <Typography variant='h3'>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        Exercises keep you strong. {`${name} `} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
                    </Typography>
                </Stack>
                {extraDetail.map(({icon, name}, index) => (
                    <Stack key={index} direction='row' gap='24px' alignItems={'center'} mt='20px' >
                        <Button sx={{background: '#fff', borderRadius: '50%', width: '100px', height: '100px'}}>
                            <img style={{width: '50px', height: '50px'}} src={icon} alt={name} />
                        </Button>
                        <Typography variant='h5' textTransform={'capitalize'}>
                            {name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
        
    )
}

export default Detail