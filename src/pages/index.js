import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"


const IndexPage = () => (
  <Layout>
    <HeroSection />

  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
