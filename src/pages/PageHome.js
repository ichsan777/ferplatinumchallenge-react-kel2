import React from 'react'
import SectionHeroBanner from '../Sections/SectionHeroBanner'
import SectionAbout from '../Sections/SectionAbout'
import SectionWhyUs from '../Sections/SectionWhyUs'

const PageHome = () => {
  return (
    <div>
      <section> <SectionHeroBanner /></section>
      <section> <SectionAbout/></section>
      <section> <SectionWhyUs /></section>
    </div>
  )
}

export default PageHome
