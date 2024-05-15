import React from 'react'
import { fontStyle, thanksPageStyle } from '../styles/globalStlye'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import { NotFound } from './NotFound';


const Thanks = () => {

    const { i18n, t } = useTranslation();
    const navigate = useNavigate()
    const state = useLocation()

    console.log(state)

    return (


        state.state ?
            (
                <div style={thanksPageStyle}>
                    <Button
                        sx={{ ml: 5, mt: 5, border: 'none', letterSpacing: 3, fontFamily: fontStyle.catamaran }}
                        variant='contained'
                        onClick={() => navigate('/')}
                    >
                        {t('text.back')}
                    </Button>
                </div>
            )
            :
            (
                <NotFound />
            )


    )
}

export default Thanks