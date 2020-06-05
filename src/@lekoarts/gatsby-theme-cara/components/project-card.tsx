/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Modal, Button } from 'react-bootstrap'
import ResponsiveEmbed from 'react-responsive-embed'

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
    <React.Fragment>
      <button
        className={className}
        onClick={() => setIsModalOpen(true)}
        sx={{
          outline: `none`,
          border: `none`,
          boxShadow: `lg`,
          position: `relative`,
          borderRadius: `lg`,
          color: `white`,
          background: bg || `none`,
          transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
          "&:hover": {
            color: `white !important`,
            transform: `translateY(-5px)`,
            boxShadow: `xl`,
          },
        }}
      />
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
    </React.Fragment>
  )
}

export default ProjectCard
