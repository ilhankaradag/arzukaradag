import React from 'react'
import Books from '../components/books/Books'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'

const KitaplarPage = () => {
  return (
    <>
      <PageHeader title="Kitaplar" />
      <Spacer />
      <Books />
      <Spacer />
    </>
  )
}

export default KitaplarPage
