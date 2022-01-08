import React from 'react'
import Galeri from '../components/about/Galeri'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'

const GaleriPage = () => {
  return (
    <>
      <PageHeader title="Galeri" />
      <Spacer />
      <Galeri />
    </>
  )
}

export default GaleriPage
