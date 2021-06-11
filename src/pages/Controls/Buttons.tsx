import React from 'react'
import type { FC } from 'react'
import { Button, ButtonGroup } from '@ncr-design-system/react'

export const ButtonExample: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Buttons</p>
      <Button>Standard</Button>
      <Button variant='link'>Link</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='text'>Text</Button>
      <br />
      <ButtonGroup>
        <Button variant='outline'>Hello</Button>
        <Button variant='outline'>Hello</Button>
        <Button variant='outline'>Hello</Button>
      </ButtonGroup>
      {/* {children} */}
    </div>
  )
}
