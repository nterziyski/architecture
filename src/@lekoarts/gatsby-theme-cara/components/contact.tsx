/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Footer from "@lekoarts/gatsby-theme-cara/src/components/footer"
// @ts-ignore
import ContactMDX from "@lekoarts/gatsby-theme-cara/src/sections/contact"

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
  </div>
)

export default Contact
