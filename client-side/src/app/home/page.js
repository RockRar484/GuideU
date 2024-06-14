'use client'
import React from 'react'
import withAuth from '@/hoc/withAuth'


const Home = () => {
  return (
    <div className='text-3xl te'>Home</div>
  )
}

export default withAuth(Home)