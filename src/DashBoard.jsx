import React from 'react'
import { Header } from './Components/Header'
import { BrandLogo } from './Components/BrandLogo'
import { OverView } from './Components/OverView'
import { ServicesOverView } from './Components/ServicesOverView'
import { DiscoverLuxuryZip } from './Components/DiscoverLuxuryZip'

export const DashBoard = () => {
  return (
    <div className='h-full rounded-2xl bg-neutral-300 border-8 border-neutral-300'>
      <Header></Header>
      <BrandLogo></BrandLogo>
      <OverView></OverView>
      <ServicesOverView></ServicesOverView>
      <DiscoverLuxuryZip></DiscoverLuxuryZip>
    </div>
  )
}
