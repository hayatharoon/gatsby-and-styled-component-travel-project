import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../components/Images/Images"

const Images = () => (
  <Layout>
    <Image />
  </Layout>
)

export const Head = () => <Seo title="Images Page" />

export default Images
