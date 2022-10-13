import * as React from "react"
import Hero from "../components/Hero/Hero"
import Images from "../components/Images/Images"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Images />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
