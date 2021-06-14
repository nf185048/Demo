import React, { useState } from 'react'
import type { FC } from 'react'
import { ContextItem, Typography, ContextMenu, Dropdown, Button, ContextDivider } from '@ncr-design-system/react'

export const DropdownExample: FC<{}> = () => {
  const [opened, setOpened] = useState(false)

  return (
    <div>
      <p>Dropdowns</p>

      <Dropdown open={opened}>
        <Button slot='trigger' variant='text' onClick={() => setOpened(true)}>
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
