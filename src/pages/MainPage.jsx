import React from 'react'
import Home from '../Components/Home'
import Networks from '../Components/Networks'
import Questions from '../Components/Questions'
import Story from '../Components/Story'
import Audience from '../Components/Audience'
import Writing from '../Components/Writing'

const page = () => {
  return (
    <div className=''>
      <Home/>
      <Networks/>
      <Story/>
      <Audience/>
      <Writing/>
      <Questions/>
    </div>
  )
}

export default page
