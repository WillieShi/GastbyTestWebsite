import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Pikachu going to jail for comitting tax fraud"
        src="https://cdn.vox-cdn.com/thumbor/ZtHdo7alIyVSeasoCzSHescFnOA=/0x0:1920x1080/2120x1413/filters:focal(722x227:1028x533):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69323002/Screen_Shot_2021_05_21_at_9.54.00_AM.0.jpeg"
      />

      <StaticImage
        alt="Scuffed picture of me"
        src="../images/me.jpg"
      />
    </Layout>
  )
}

export default IndexPage