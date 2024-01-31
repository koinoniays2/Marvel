import React from 'react'
import MainSlide from '../components/MainSlide'
import Layout from '../components/Layout'
import { testimonials2 } from '../lib/menus'

export default function Comics() {
  return (
    <>
    <Layout>
        <MainSlide testimonials={testimonials2}/>
    </Layout>
    </>
  )
}
