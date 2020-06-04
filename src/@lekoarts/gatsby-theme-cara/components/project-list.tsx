/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css, keyframes } from 'emotion'
import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card"


const ProjectList = () => {
  return (
    <React.Fragment>
      <ProjectCard
        className={projectCard}
        title="Project 1"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
      >
        Description of project 1
      </ProjectCard>
      <ProjectCard
        className={rollIn}
        title="Project 2"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
      >
        Description of project 2
      </ProjectCard>
      <ProjectCard
        className={slideOutLeft}
        title="Project 3"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
      >
        Description of project 3
      </ProjectCard>
      <ProjectCard
        className={slideOutCenter}
        title="Project 4"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
      >
        Description of project 4
      </ProjectCard>
    </React.Fragment>
  )
}

const projectCard = css`
  animation: tilt 6s ease-in-out infinite both;
  @keyframes tilt {
    0% {
      transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
      opacity: 0;
    }
    20% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
    80% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
    100% {
      transform: rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px) skew(-35deg, 10deg);
      opacity: 0;
    }
  }
  &:hover {
    animation-play-state: paused;
  }
`

const rollIn = css`
  animation: roll-in-blurred 7s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite both;
  @keyframes roll-in-blurred {
    0% {
      transform: translateX(-200px) rotate(-720deg);
      filter: blur(50px);
      opacity: 0;
    }
    20% {
      transform: translateX(0) rotate(0deg);
      filter: blur(0);
      opacity: 1;
    }
    80% {
      transform: translateX(0) rotate(0deg);
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: translateX(100px) rotate(-720deg);
      filter: blur(50px);
      opacity: 0;
    }
  }
  &:hover {
    animation-play-state: paused;
  }
`

const slideOutLeft = css`
  animation: slide-out-left 10s cubic-bezier(0.550, 0.085, 0.680, 0.530) infinite both;
  @keyframes slide-out-left {
    40% {
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
    45% {
      transform: translateZ(600px) translateX(-400px) scale(0.5);
      opacity: 0;
    }
    55% {
      transform: translateZ(600px) translateX(0) scale(0.5);
      opacity: 0;
    }
    65% {
      transform: translateZ(0) translateX(0) scale(1);
      opacity: 1;
    }
  }
`

const slideOutCenter = css`
  animation: slide-out-center 10s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.5s infinite both;
  @keyframes slide-out-center {
    0% {
      transform: translateZ(1);
      opacity: 1;
    }
    45% {
      transform: translateZ(600px) scale(0.5);
      opacity: 0;
    }
    55% {
      transform: translateZ(600px) translateX(400px) scale(0.5);
      opacity: 0;
    }
    65% {
      transform: translateZ(0) translateX(0) scale(1);
      opacity: 1;
    }
  }
`

export default ProjectList
