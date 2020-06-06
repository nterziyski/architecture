/** @jsx jsx */
import { jsx } from "theme-ui"
import { cx, css } from 'emotion'
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// @ts-ignore
import Intro from "@lekoarts/gatsby-theme-cara/src/sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor} />
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <div className={wrapper}>
          <h2 className={headline}>The Poetics of Home</h2>
          <p className={cx(text, bigSpacer)}>a project by Stefana Dilova</p>
          <p className={cx(text, halfSpacer)}>The following project explores the most intimate space of a family – its home.</p>
          <p className={text}>
            Written content that describes imagined spaces of such kind is the fundamental medium that was utilised in this analysis.
            The auto-fictional novel <span className={italic}>Territory of Light</span> written by the Japanese author Yuko Tsushima and the home of its main character built the point of departure for this work.
            The following eight short films came into being through the interpretation and representation of the text with the help of architectural tools.
            The poetical depictions of everyday spaces found in the novel can be phenomenologically traced through film and sound.
          </p>
        </div>
      </Inner>
    </Content>
  </div>
)

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 695px;
  margin: 0 auto;
`

const headline = css`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 8px;
`

const text = css`
  margin: 0;
  font-weight: 300;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem !important;
  text-align: center;
`

const halfSpacer = css`
  margin-bottom: 16px;
`

const bigSpacer = css`
  margin-bottom: 32px;
`

const italic = css`
  font-style: italic;
`

export default Hero
