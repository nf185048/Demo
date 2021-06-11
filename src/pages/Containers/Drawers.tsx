import React, { useState } from 'react'
import type { FC } from 'react'
import { Button, Drawer, Item, Label, List } from '@ncr-design-system/react'

export const DrawerExample: FC<{}> = () => {
  // let opened = false
  const [opened, setOpened] = useState(false)

  return (
    <div>
      <p>Drawers</p>
      <Button onClick={() => setOpened(true)}>Open Drawer</Button>

      <Drawer open={opened} label='Menu' placement='bottom'>
        <List style={{ background: 'transparent' }}>
          <Item selected>
            <Label>Home</Label>
          </Item>
          <Item>
            <Label>Dashboard</Label>
          </Item>
          <Item>
            <Label>Examples</Label>
          </Item>
        </List>
      </Drawer>
    </div>
  )
}
