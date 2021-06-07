import React from 'react'
import type { FC } from 'react'
import { Button } from '@ncr-design-system/react'

export const Buttons: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Buttons</p>
      <Button>Standard</Button>
      <Button variant='link'>Link</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='text'>Text</Button>
      {/* {children} */}
    </div>
  )
}
