import React from 'react'
import type { FC } from 'react'
import { FormLabel, Checkbox } from '@ncr-design-system/react'

export const Checkboxes: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>Checkboxes</p>
      <FormLabel label='Standard'>
        <Checkbox value='ui-primary' name='ui-primary' />
      </FormLabel>
      {/* {children} */}
    </div>
  )
}
