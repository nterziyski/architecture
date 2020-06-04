/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Modal, Button } from 'react-bootstrap'
import ResponsiveEmbed from 'react-responsive-embed'
import 'bootstrap/dist/css/bootstrap.min.css'

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const ProjectCard = ({ className, link, title, children, bg }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <div>
      <button
        className={className}
        onClick={() => setIsModalOpen(true)}
        rel="noreferrer noopener"
        sx={{
          outline: `none`,
          border: `none`,
          width: `100%`,
          boxShadow: `lg`,
          position: `relative`,
          textDecoration: `none`,
          borderRadius: `lg`,
          px: 4,
          py: [4, 5],
          color: `white`,
          background: bg || `none`,
          transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
          "&:hover": {
            color: `white !important`,
            transform: `translateY(-5px)`,
            boxShadow: `xl`,
          },
        }}
      >
        <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
        <div
          sx={{
            textTransform: `uppercase`,
            letterSpacing: `wide`,
            pt: 4,
            fontSize: [4, 5],
            fontWeight: `medium`,
            lineHeight: 1,
          }}
        >
          {title}
        </div>
      </button>
      <Modal
        size="xl"
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' ratio='16:9' allowFullScreen />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProjectCard
