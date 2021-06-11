import React from 'react'
import type { FC } from 'react'
import { ContextItem, Typography, ContextMenu, Dropdown, Button, ContextDivider } from '@ncr-design-system/react'

export const DropdownExample: FC<{}> = () => {
  let opened = false
  const onHandleOpen = () => {
    opened = true
  }

  return (
    <div>
      <p>Dropdowns</p>

      <Dropdown open={opened}>
        <Button slot='trigger' variant='text' onClick={() => onHandleOpen}>
          Open
        </Button>
        <ContextMenu>
          <ContextItem selected>
            <Typography>Menu Item 1</Typography>
          </ContextItem>
          <ContextItem>
            <Typography>Menu Item 2</Typography>
          </ContextItem>
          <ContextDivider></ContextDivider>
          <ContextItem>
            <Typography>Menu Item 3</Typography>
          </ContextItem>
        </ContextMenu>
      </Dropdown>
    </div>
  )
}
