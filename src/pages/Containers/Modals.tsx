import React, { useState } from 'react'
import type { FC } from 'react'
import { Modal, Button } from '@ncr-design-system/react'

export const ModalExample: FC<{}> = ({ children }) => {
  const [opened, setOpened] = useState(false)

  return (
    <div>
      <p>Modals</p>
      <Modal width='400px' open={opened} onHide={() => setOpened(true)}>
        <h3 slot='title'>Modal Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos nostrum hic corrupti. Magni accusamus quos
          ratione distinctio eum vero perferendis, aliquam quasi excepturi magnam tempore incidunt dolor repellendus
          laboriosam.
        </p>
        <div slot='footer'>
          <Button onClick={() => setOpened(false)}>Confirm</Button>
        </div>
      </Modal>
      <Button variant='outline' onClick={() => setOpened(true)}>
        Open Modal
      </Button>
      {children}
    </div>
  )
}
