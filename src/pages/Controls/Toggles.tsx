import React from 'react'
import type { FC } from 'react'
import { Grid, Item, Label, Toggle } from '@ncr-design-system/react'

export const Toggles: FC<{}> = () => {
  return (
    <div>
      <p>Toggles</p>
      <Grid container>
        <Item>
          <Label>Toggle</Label>
          <Toggle></Toggle>
        </Item>
      </Grid>
    </div>
  )
}
