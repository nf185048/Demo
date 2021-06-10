import React, { useState } from 'react'
import type { FC } from 'react'
import { Button, Item, List, ListTitle, Modal } from '@ncr-design-system/react'

export const OrderSummary: FC<{}> = () => {
  const [opened, setOpened] = useState(false)

  return (
    <div>
      <p>Order Summary</p>
      <List>
        <ListTitle>Items</ListTitle>

        <Item>Chicken soup</Item>
        <Item>Salad</Item>
        <Item>Peanuts</Item>
        <Item>Corn</Item>
        <Item>Butter</Item>
      </List>

      <Button variant='outline' onClick={() => setOpened(true)}>
        View Final Order
      </Button>

      <Modal width='400px' open={opened} onHide={() => setOpened(true)}>
        <List>
          <ListTitle>Items</ListTitle>
          <Item>Chicken soup</Item>
          <Item>Salad</Item>
          <Item>Peanuts</Item>
          <Item>Corn</Item>
          <Item>Butter</Item>
        </List>
        <div slot='footer'>
          <Button onClick={() => setOpened(false)}>Submit Order</Button>
        </div>
      </Modal>
    </div>
  )
}
