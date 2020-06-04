import React from "react"
import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card"
import ProjectList from "@lekoarts/gatsby-theme-cara/src/components/project-list"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  ProjectList: () => (
    <ProjectList />
  ),
}

export default components
