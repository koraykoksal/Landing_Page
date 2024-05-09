import { Autocomplete, InputAdornment, Chip, Box, Button, Card, CardContent, CardMedia, Container, FormControl, Modal, Select, TextField, Typography, InputLabel, MenuItem, Grid, Paper, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { format } from "date-fns"
import { fontStyle, homePageStyle, modalStyles } from '../styles/globalStlye'
import { CiBoxList } from "react-icons/ci";
import Characters from '../components/modal/Characters'
import Badge from '@mui/material/Badge';
import Content from '../components/Content'
import landingImg from "../assets/img/landingImg.avif"
import bonnaLogo from "../assets/img/logobonna_b.png"
import { countryInfo, jobType } from '../helper/data'
import { useTranslation } from 'react-i18next';
import GDPR from "../assets/docs/GDPR.pdf"

export const Home = () => {

  // dil çevirisi için kullanılan fonksiyon
  const { i18n, t } = useTranslation();

  const [search, setSearch] = useState(null)
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('90');

  const [info, setInfo] = useState({
    name: "",
    country: "",
    countryCode: "90",
    company: "",
    email: "",
    jobtype: "",
    tel: "",
  })

  //onChange işlemi yap
  const handleChange = (e, newValue, fieldName) => {

    // Autocomplete'ten gelen olaylar için
    if (fieldName) {
      setInfo(prevInfo => ({
        ...prevInfo,
        [fieldName]: newValue || newValue?.text || ""
      }));
    }
    // TextField'tan gelen olaylar için
    else if (e?.target) {
      const { name, value } = e.target;
      setInfo(prevInfo => ({
        ...prevInfo,
        [name]: value
      }));
    }
  }


  const handleIsCheck = (e, params) => {
    const { checked } = e.target
    setInfo({ ...info, [params]: checked })
  }


  // Auto complete popup yüksekliği
  const CustomPaper = (props) => (
    <Paper {...props} style={{ maxHeight: '200px', overflowY: 'auto', borderRadius: '8px' }} />
  );


  //ülke telefon kodlarını küçükten büyüğe sıralama yap
  function sortPhoneData(data) {
    const result = data.map(item => item.phone)
    const filter = result.sort((a, b) => {
      return a.localeCompare(b, undefined, { numeric: true })
    })
    return filter
  }


  // ülke isimlerini a-z sırala
  function sortContryNameData(data) {
    const result = data.map(item => item.country)
    const filter = result.sort((a, b) => {
      return a - b
    })
    return filter
  }

  // dil seçimi için çalıştırılan fonksiyon
  const changeLang = (language) => {
    i18n.changeLanguage(language);
  };

  //! sayfa render olduğu zaman kullanıcının tarayıcı dil bilgisi alınır
  useEffect(() => {
    const computerLanguage = navigator.language.split('-')[0] // "en-US" gibi bir değeri "en" yapar
    computerLanguage == 'en' || 'tr' || 'es' || 'it' || 'fr' ? changeLang(computerLanguage) : changeLang('en')

  }, [])


  return (

    <div>

      <Grid container spacing={0} sx={{ minHeight: '100vh' }}>
        {/* Resim Kolonu */}
        <Grid item xs={12} md={9}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <CardMedia
              component='img'
              image={landingImg}
              loading='lazy'
              sx={{
                objectFit: 'fill',
                height: '100%',
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '100%',
                  lg: '100%',
                  xl: '100%'
                }
              }}
            />
          </Box>
        </Grid>

        {/* Form Kolonu */}
        <Grid item xs={12} md={3}>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              p: 3,
              backgroundColor: '#D4B69C',
              minHeight: '100%',
            }}
            component={'form'}
          >

            <CardMedia
              component='img'
              image={bonnaLogo}
              loading='lazy'
              sx={{
                margin: 'auto',
                width: {
                  xs: '80px',
                  sm: '100px',
                  md: '150px',
                  lg: '200px',
                  xl: '250px'
                }
              }}
            />

            <Typography align='center' variant='inherit' fontFamily={'Catamaran'}>
              {t('text.txt1')}
            </Typography>

            <Typography align='center' variant='inherit' fontFamily={'Catamaran'}>
              {t('text.txt2')}
            </Typography>

            <TextField
              required
              fullWidth
              name='name'
              id='name'
              type='text'
              label={t('muiElements.nameSurname')}
              onChange={handleChange}
              sx={{
                '& .MuiInputLabel-root': {
                  fontFamily: `${fontStyle.catamaran}`,
                },
                '& .MuiInputBase-input': {
                  fontFamily: `${fontStyle.catamaran}`,
                }
              }}
            />

            <TextField
              required
              fullWidth
              name='email'
              id='email'
              type='email'
              label={t('muiElements.mail')}
              onChange={handleChange}
              sx={{
                '& .MuiInputLabel-root': {
                  fontFamily: `${fontStyle.catamaran}`,
                },
                '& .MuiInputBase-input': {
                  fontFamily: `${fontStyle.catamaran}`,
                }
              }}
            />

            {/* COUNTRY PHONE CODE */}
            <FormControl fullWidth>
              <TextField
                required
                fullWidth
                name='tel'
                id='tel'
                type='tel'
                label={t('muiElements.phone')}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                  setInfo({ ...info, ['tel']: e.target.value })
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Select
                        name='countryCode'
                        id='countryCode'
                        value={countryCode}
                        onChange={(e) => {
                          setCountryCode(e.target.value)
                          setInfo({ ...info, ['countryCode']: e.target.value })
                        }}
                        sx={{
                          fontFamily: 'Catamaran',
                          fontSize: '14px',
                          border: 'none',
                          '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none'
                          },
                          minWidth: 70,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          height: '100%',
                          verticalAlign: 'middle'
                        }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 270 // Popup yüksekliğini burada ayarlayabilirsiniz
                            }
                          }
                        }}
                      >
                        {sortPhoneData(countryInfo).map((country, index) => (
                          <MenuItem
                            key={index}
                            value={country}
                            sx={{
                              fontFamily: 'Catamaran',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              textAlign: 'center',
                              height: '100%',
                              verticalAlign: 'middle'
                            }}
                          >
                            +{country}
                          </MenuItem>
                        ))}
                      </Select>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    fontFamily: 'Catamaran',
                    fontSize: '16px',
                    padding: '10px',
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: 'Catamaran',
                  },
                  '& .MuiOutlinedInput-root': {
                    height: '56px', // Yüksekliği sabitliyoruz
                  }
                }}
              />
            </FormControl>

            {/* COUNTRY */}
            <FormControl>
              <Autocomplete
                required
                fullWidth
                value={search}
                name='country'
                onChange={(event, newValue) => {
                  setSearch(newValue);
                  handleChange(event, newValue, 'country');
                }}
                id="search-select-demo"
                options={sortContryNameData(countryInfo)}
                PaperComponent={CustomPaper}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    required
                    {...params}
                    label={t('muiElements.country')}
                    sx={{
                      '& .MuiInputBase-root': {
                        borderRadius: '8px',
                        borderColor: 'black',
                        fontFamily: `${fontStyle.catamaran}`
                      },
                      '& .MuiInputLabel-root': {
                        fontFamily: `${fontStyle.catamaran}`,
                      },
                      '& .MuiInputBase-input': {
                        fontFamily: `${fontStyle.catamaran}`,
                      }
                    }}
                  />
                )}
                renderOption={(props, option) => (
                  <li {...props} style={{ fontFamily: `${fontStyle.catamaran}`, fontSize: '14px' }}>
                    {option}
                  </li>
                )}
              />
            </FormControl>

            {/* JOB TYPE */}
            <FormControl required>
              <InputLabel id='jobtype' sx={{ fontFamily: `${fontStyle.catamaran}` }}>{t('muiElements.job')}</InputLabel>
              <Select
                name='jobtype'
                id='jobtype'
                label='jobtype'
                labelId='jobtype'
                onChange={handleChange}
                sx={{
                  '& .MuiInputBase-input': {
                    fontFamily: `${fontStyle.catamaran}`,
                  }
                }}
              >
                {
                  jobType.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item.name}
                      sx={{ fontFamily: `${fontStyle.catamaran}`, fontSize: 14 }}
                    >
                      {t('jobs.' + item.name)}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>

            <TextField
              fullWidth
              name='company'
              id='company'
              type='text'
              label={t('muiElements.company')}
              onChange={handleChange}
              sx={{
                '& .MuiInputLabel-root': {
                  fontFamily: `${fontStyle.catamaran}`,
                },
                '& .MuiInputBase-input': {
                  fontFamily: `${fontStyle.catamaran}`,
                }
              }}
            />


            <Box sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <FormControlLabel
                control={
                  <Checkbox name="gilad" onChange={(e) => handleIsCheck(e, 'policy')} />
                }
                label={
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Typography
                      variant='inherit'
                      style={{ fontFamily: `${fontStyle.catamaran}`, fontSize: 14 }}
                    >
                      {t('muiElements.GDPR')}
                    </Typography>

                    {/* KVKK METNİ OKUMAK İÇİN TIKLA */}
                    <Typography
                      onClick={() => { window.open(`${GDPR}`, '_blank') }}
                      variant='subtitle2'
                      sx={{
                        fontSize: 14,
                        fontFamily: `${fontStyle.catamaran}`,
                        fontWeight: 700,
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                    >
                      Click
                    </Typography>
                  </Box>
                }

              />

              <FormControlLabel
                name='emessage'
                id='emessage'
                control={
                  <Checkbox name="gilad" onChange={(e) => handleIsCheck(e, 'emessage')} />
                }
                label={
                  <Typography
                    variant='inherit'
                    style={{ fontFamily: `${fontStyle.catamaran}`, fontSize: 14 }}
                  >
                    {t('muiElements.subscription')}
                  </Typography>}

              />
            </Box>


            <Button
              variant='contained'
              sx={{ backgroundColor: 'black', fontFamily: 'Catamaran', letterSpacing: 2, '&:hover': { backgroundColor: 'black' } }}
              type='submit'
            >
              {t('muiElements.btnText')}
            </Button>

            <Typography
              variant='subtitle2'
              align='center'
              style={{ textDecoration: 'underline', cursor: 'pointer', width: '150px', margin: 'auto', fontFamily: 'Catamaran', letterSpacing: 1 }}
              onClick={() => { window.open('https://bonna.com.tr', '_blank') }}
            >
              www.bonna.com.tr
            </Typography>
          </Container>
        </Grid>
      </Grid>

    </div>

  )
}