import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PoemGurcuce from '../components/poem/PoemGurcuce'
import PoemIng from '../components/poem/PoemIng'
import PoemKurtce from '../components/poem/PoemKurtce'
import PoemZaza from '../components/poem/PoemZaza'

const PoemPage = () => {
  return (
    <Routes>
      <Route path="/ing-siirler" element={<PoemIng />} />
      <Route path="/gurcuce-siirler" element={<PoemGurcuce />} />
      <Route path="/zazaca-siirler" element={<PoemZaza />} />
      <Route path="/kurtce-siirler" element={<PoemKurtce />} />
    </Routes>
  )
}

export default PoemPage
