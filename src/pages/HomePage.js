import React from 'react'
import Books from '../components/books/Books'
import Spacer from '../components/common/Spacer'
import Prize from '../components/home/Prize'
import Slider from '../components/home/Slider'
import Poem from '../components/poemAnaSayfa/Poem'

const HomePage = () => {
  return (
    <>
      <Slider />
      <Spacer />
      <Poem />
      <Spacer />
      <Prize />
      <Spacer />
      <Books />
      <Spacer />
    </>
  )
}

export default HomePage
