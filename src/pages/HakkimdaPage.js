import React from 'react'
import Hakkimda from '../components/about/Hakkimda'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'

const HakkimdaPage = () => {
  return (
    <>
      <PageHeader title="Hakkımda" />
      <Spacer />
      <Hakkimda />
      <Spacer />
    </>
  )
}

export default HakkimdaPage
