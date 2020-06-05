/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// @ts-ignore
import ProjectsMDX from "@lekoarts/gatsby-theme-cara/src//sections/projects"
import 'bootstrap/dist/css/bootstrap.min.css'

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 15%, 100% 85%, 0 85%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <div sx={{ display: `flex`, justifyContent: `center`, width: [`full`], textAlign: `left` }}>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 4],
            gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(2, 1fr)`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1` },
          }}
        >
          <ProjectsMDX />
        </div>
      </div>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor} />
  </div>
)

export default Projects
