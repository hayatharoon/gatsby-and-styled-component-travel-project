import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocailLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocailLogo to="/">
            <SocialIcon />
            EXPLORE
          </SocailLogo>
          <WebsiteRights>EXPLORE c {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
