import React from 'react'
import Hero from './components/Hero'
import Card from './components/Card'
import Remark from './components/Remark'
import Category from './components/Category'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Card/>
      <Remark/>
      <Category/>
    </div>
  )
}
