import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Destination = () => (
  <Layout>
    <h1>Hi from the Destination Page</h1>
    <p>Welcome to Destination Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Destination
