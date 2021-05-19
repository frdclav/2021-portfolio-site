// Step 1: Import your component
import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
      <Layout pageTitle="About">
            <p>Welcome to my portfolio site! I am a full stack web developer and an experienced technical support engineer for Adobe. I am constantly looking to learn and practice new ideas and technologies. Hit me up if you'd like to chat, I'll try my best to respond :)

              Currently I am learning gatsbyjs (by updating this site!) and I am working on a personal project involving twitch chatbots, shopify api, react, firebase, nodejs and express. Check out my projects page for more info on this and the rest of my projects!
            </p>
   
      </Layout>
    
  )
}

// Step 3: Export your component
export default AboutPage