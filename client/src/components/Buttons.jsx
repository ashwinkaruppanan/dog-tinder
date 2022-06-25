import React from 'react';
import './Buttons.css'

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';



function Buttons() {
    return <div className='buttons'>
        <IconButton className='btn_replay'>
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='btn_close'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='btn_star'>
            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton className='btn_favorite'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='btn_flash'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
}

export default Buttons;