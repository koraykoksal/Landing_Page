import { Autocomplete, Chip, Box, Button, Card, CardContent, CardMedia, Container, FormControl, Modal, Select, TextField, Typography, InputLabel, MenuItem, Grid } from '@mui/material'
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { format } from "date-fns"
import { homePageStyle, modalStyles } from '../styles/globalStlye'
import { CiBoxList } from "react-icons/ci";
import Characters from '../components/modal/Characters'
import Badge from '@mui/material/Badge';
import Content from '../components/Content'
import landingImg from "../assets/img/landingImg.avif"
import bonnaLogo from "../assets/img/logobonna_b.png"
import { countryInfo, jobType } from '../helper/data'



export const Home = () => {

  const [search, setSearch] = useState(null)
  const [info, setInfo] = useState({
    name: "",
    country: ""
  })

  const handleChange = (e, newValue, fieldName) => {

    // Autocomplete'ten gelen olaylar için
    if (fieldName) {
      setInfo(prevInfo => ({
        ...prevInfo,
        [fieldName]: newValue?.country || newValue?.text || ""
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

  return (

    <div>

      <Grid container spacing={0} sx={{ minHeight: '100vh' }}>
        {/* Resim Kolonu */}
        <Grid item xs={12} md={9}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <img
              src={landingImg}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
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
            <img
              src={bonnaLogo}
              width={250}
              style={{
                margin: 'auto',
              }}
            />

            {/* <CardMedia
            src={bonnaLogo}
            sx={{
              margin:'auto',
              width:{
                xs: '80px',
                  sm: '100px',
                  md: '150px',
                  lg: '200px',
                  xl: '250px'
              }
            }}
            /> */}

            <Typography align='center' variant='inherit' fontFamily={'Catamaran'}>
              Gastronomiye olan tutkumuzla, en kaliteli, şık ve
              benzersiz tasarımları sektör profesyonellerinin
              beğenisine sunuyoruz.
            </Typography>

            <Typography align='center' variant='inherit' fontFamily={'Catamaran'}>
              Sizinle iş birliği yapmayı heyecanla bekliyoruz.
            </Typography>

            <TextField
              required
              fullWidth
              name='name'
              id='name'
              type='text'
              label='Name'
            />

            <TextField
              required
              fullWidth
              name='email'
              id='email'
              type='email'
              label='Mail'
            />

            <TextField
              required
              fullWidth
              name='tel'
              id='tel'
              type='tel'
              label='Phone'
            />

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
                options={countryInfo}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField required {...params} label="Country" />}
              />
            </FormControl>

            <FormControl required>
              <InputLabel id='jobtype'>Job</InputLabel>
              <Select
                name='jobtype'
                id='jobtype'
                label='jobtype'
                labelId='jobtype'
              >
                {
                  jobType.map((item, index) => (
                    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>

            <TextField
              fullWidth
              name='company'
              id='company'
              type='text'
              label='Company'
            />

            <Button
              variant='contained'
              sx={{ backgroundColor: 'black', fontFamily: 'Catamaran', '&:hover': { backgroundColor: 'black' } }}
              type='submit'
            >
              Contact Us
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
