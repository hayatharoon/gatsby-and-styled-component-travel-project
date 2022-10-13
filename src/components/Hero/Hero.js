import React from "react"
import { HeroContainer, Heading, Paragrapgh, HeroButton } from "./HeroElement"
import { Button } from "../Button/Button"

const Hero = () => {
  return (
    <HeroContainer>
      <Heading>Travel More</Heading>
      <Paragrapgh>Plan your next trip today</Paragrapgh>
      <HeroButton>
        <Button primary bigFont big>Get Started</Button>
      </HeroButton>
    </HeroContainer>
  )
}

export default Hero
