import React from 'react'
import type { FC } from 'react'
import { Modal, Button } from '@ncr-design-system/react'

export const Modals: FC<{}> = ({ children }) => {
  let modalOpen = false

  const handleOpenClick = () => {
    modalOpen = true
  }

  const handleCloseClick = () => {
    modalOpen = false
  }

  return (
    <div>
      <p>Modals</p>
      <Modal width='400px' open={modalOpen} onHide={handleCloseClick}>
        <h3 slot='title'>Modal Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos nostrum hic corrupti. Magni accusamus quos
          ratione distinctio eum vero perferendis, aliquam quasi excepturi magnam tempore incidunt dolor repellendus
          laboriosam.
        </p>
        <div slot='footer'>
          <Button onClick={() => handleCloseClick}>Confirm</Button>
        </div>
      </Modal>
      <Button variant='outline' onClick={() => handleOpenClick}>
        Open Modal
      </Button>
      {children}
    </div>
  )
}
