import AppBanner from '@/components/AppBanner'
import Associated from '@/components/Associated'
import Fanclub from '@/components/Fanclub'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Partners from '@/components/Partners'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />

      <Journey />

      <Associated />

      <Fanclub />

      <AppBanner />

      <Partners />
    </div>
  )
}

export default page