import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import NavBar from '../components/NavBar'
import PrivateRouter from './PrivateRoute'
import { CgSpinner } from 'react-icons/cg'

export const AppRouter = () => {


  return (

    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Suspense fallback={CgSpinner}>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route element={<PrivateRouter/>}>
          </Route>
        </Routes>
        </Suspense>
       
      </BrowserRouter>

    </>
  )
}