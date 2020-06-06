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
      bg="#3c3c3c"
      speed={0}
      offset={offset}
      factor={factor}
    />
    <Content speed={0.4} offset={offset} factor={1.8}>
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
