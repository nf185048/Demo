import React from 'react'
import type { FC } from 'react'
import { Item, List, ListTitle } from '@ncr-design-system/react'

export const ListExample: FC<{}> = () => {
  return (
    <div>
      <p>Lists</p>
      <List>
        <ListTitle>List</ListTitle>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </List>
    </div>
  )
}
