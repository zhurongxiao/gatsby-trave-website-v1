import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"


const IndexPage = () => (
  <Layout>
    <HeroSection />
    <Image />

  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
