import React, { useState } from 'react'
import type { FC } from 'react'
import { ContextItem, Typography, ContextMenu, Dropdown, Button, ContextDivider } from '@ncr-design-system/react'

export const DropdownExample: FC<{}> = () => {
  const [opened, setOpened] = useState(false)

  return (
    <div>
      <p>Dropdowns</p>

      <Dropdown open={opened}>
        <Button slot='trigger' variant='outline' onClick={() => setOpened(true)}>
          Open
        </Button>
        <ContextMenu>
          <ContextItem selected>
            <>Menu Item 1</>
          </ContextItem>
          <ContextItem>
            <>Menu Item 2</>
          </ContextItem>
          <ContextDivider />
          <ContextItem>
            <>Menu Item 3</>
          </ContextItem>
        </ContextMenu>
      </Dropdown>
    </div>
  )
}
