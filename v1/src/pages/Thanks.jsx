import React from 'react'
import { colors, fontStyle, thanksPageStyle } from '../styles/globalStlye'
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import { NotFound } from './NotFound';
import thanksImg from '../assets/img/TesukkurImg.png'

const Thanks = () => {

    const { i18n, t } = useTranslation();
    const navigate = useNavigate()
    const state = useLocation()


    return (


        state.state ?
            (
                // <div style={thanksPageStyle}>
                //     <Button
                //         sx={{ ml: 5, mt: 5, border: 'none', letterSpacing: 3, fontFamily: fontStyle.catamaran }}
                //         variant='contained'
                //         onClick={() => navigate('/')}
                //     >
                //         {t('text.back')}
                //     </Button>
                // </div>

                <Grid container spacing={0} sx={{ minHeight: '100vh' }}>
                    {/* Resim Kolonu */}
                    <Grid item xs={12} md={9}>
                        <Box sx={{ width: '100%', height: '100%' }}>
                            <CardMedia
                                component='img'
                                image={thanksImg}
                                loading='lazy'
                                sx={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Form Kolonu */}
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 5,
                                p: 3,
                                backgroundColor: colors.bonna,
                                minHeight: '100%',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >

                            <Typography
                                align='center'
                                fontFamily={fontStyle.catamaran}
                                fontWeight={700}
                                fontSize={22}
                                letterSpacing={3}
                            >
                                {t('text.thanks')}
                            </Typography>

                            <Typography
                                align='center'
                                fontFamily={fontStyle.catamaran}
                                fontSize={20}
                            >
                                {t('text.thanksMessage')}
                            </Typography>

                            <Button
                                type='click'
                                sx={{ 
                                    letterSpacing: 3, 
                                    fontFamily: fontStyle.catamaran,
                                    width:80,
                                    textDecoration:'underline'
                                }}
                                
                                variant='filled'
                                onClick={() => navigate('/')}
                            >
                                {t('text.back')}
                            </Button>

                        </Box>
                    </Grid>
                </Grid>


            )
            :
            (
                <NotFound />
            )


    )
}

export default Thanks