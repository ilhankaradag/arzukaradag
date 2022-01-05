import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'
import PoemIng from '../components/poem/PoemIng'
import PoemKurtce from '../components/poem/PoemKurtce'
import PoemZaza from '../components/poem/PoemZaza'

const PoemPage = () => {
  return (
    <Routes>
      <Route path="/ing-siirler" element={<PoemIng />} />
      <Route path="/zazaca-siirler" element={<PoemZaza />} />
      <Route path="/kurtce-siirler" element={<PoemKurtce />} />
    </Routes>
  )
}

export default PoemPage
