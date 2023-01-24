import React from 'react'
import SectionHeroBanner from '../Sections/SectionHeroBanner'
import SectionAbout from '../Sections/SectionAbout'
import SectionWhyUs from '../Sections/SectionWhyUs'
import SectionTestimonial from '../Sections/SectionTestimonial'
import SectionCallToAction from '../Sections/SectionCallToAction'
import SectionFrequentlyAskedQuestion from '../Sections/SectionFrequentlyAskedQuestion'

const PageHome = () => {
  return (
    <div>
      <section> <SectionHeroBanner /></section>
      <section> <SectionAbout/></section>
      <section> <SectionWhyUs /></section>
      <section><SectionTestimonial/></section>
      <section><SectionCallToAction/></section>
      <section><SectionFrequentlyAskedQuestion/></section>
    </div>
  )
}

export default PageHome
