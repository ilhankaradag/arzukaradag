import React from 'react'
import Hakkimda from '../components/about/Hakkimda'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'

const HakkimdaPage = () => {
  return (
    <>
      <PageHeader title="Hakkında" />
      <Spacer />
      <Hakkimda />
      <Spacer />
    </>
  )
}

export default HakkimdaPage
