/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { cx, css, keyframes } from 'emotion'
import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card"

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const ProjectList = () => {
  const upAndDowns = [undefined, undefined, undefined, undefined] // [card, cardAlt, cardThird]
  const effects = [undefined, undefined, undefined, undefined] // [scaledDown, scaledUp, skewed, skewedNeg]
  //const sizes = [small, normal, medium, big]

  return (
    <React.Fragment>
      <ProjectCard
        className={cx(one, upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
        title="Project 1"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
      >
        Description of project 1
      </ProjectCard>
      <ProjectCard
        className={cx(two, upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
        title="Project 2"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
      >
        Description of project 2
      </ProjectCard>
      <ProjectCard
        className={cx(three, upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
        title="Project 3"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
      >
        Description of project 3
      </ProjectCard>
      <ProjectCard
        className={cx(four, upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
        title="Project 4"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
      >
        Description of project 4
      </ProjectCard>
      <ProjectCard
        className={cx(five, upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
        title="Project 3"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #009385 0%, #FCBC21 100%)"
      >
        Description of project 3
      </ProjectCard>
      <ProjectCard
        className={cx(six, upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
        title="Project 4"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #DA852F 0%, #90FF4E 100%)"
      >
        Description of project 4
      </ProjectCard>
      <ProjectCard
        className={cx(one, 'seven', upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
        title="Project 3"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #001625 0%, #FA1729 100%)"
      >
        Description of project 3
      </ProjectCard>
      <ProjectCard
        className={cx(two, 'eight', upAndDowns[getRandomInt(3)], effects[getRandomInt(4)])}
        title="Project 4"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        bg="linear-gradient(to right, #DAF647 0%, #B17A76 100%)"
      >
        Description of project 4
      </ProjectCard>
    </React.Fragment>
  )
}

const xs = css`
  width: 285px;
  height: 160px;
`

const s = css`
  width: 460px;
  height: 260px;
`

const m = css`
  width: 550px;
  height: 310px;
`

const l = css`
  width: 650px;
  height: 365px;
`

const one = css`
  top: -20px;
  left: 45px;
  ${s};
  &.seven {
    top: -105px;
    left: 65px;
  }
`

const two = css`
  ${m};
  &.eight {
    top: -70px;
    left: 20px;
  }
`

const three = css`
  ${xs};
  top: -30px;
  left: calc(100% - 315px);
`

const four = css`
  left: 100px;
  ${m};
`

const five = css`
  top: -140px;
  ${l};
`

const six = css`
  ${xs};
`

const card = css`
  animation: up-down1 4s ease-in-out infinite alternate;
  @keyframes up-down1 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(30px);
    }
  }
`

const cardAlt = css`
  animation: up-down 3.5s ease-in-out infinite alternate;
  @keyframes up-down {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }
`

const cardThird = css`
  animation: up-down 5s ease-in-out infinite alternate;
  @keyframes up-down {
    from {
      transform: translateY(-10);
    }
    to {
      transform: translateY(20px);
    }
  }
`

const scaledDown = css`
  transform: scale(0.95);
`

const scaledUp = css`
  transform: scale(1.05);
`

const skewed = css`
  transform: skew(5deg);
`

const skewedNeg = css`
  transform: skew(-5deg);
`

const small = css`
  top: 10px;
  left: 5px;
  width: 300px;
  height: 200px;
`

const medium = css`
  top: 15px;
  left: 20px;
  width: 325px;
  height: 220px;
`

const normal = css`
  top: 20px;
  left: -5px;
  width: 330px;
  height: 250px;
`

const big = css`
  top: 20px;
  width: 350px;
  height: 270px;
`

export default ProjectList
