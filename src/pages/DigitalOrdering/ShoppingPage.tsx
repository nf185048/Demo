import React, { } from 'react'
import type { FC } from 'react'
import { Grid } from '@ncr-design-system/react'
import { clothingItems } from '../../data'
// import { State } from '../../state'
import { ShoppingItemBase } from '../../types'
import { ItemCard } from '../../components'

export const ShoppingPage: FC<{}> = () => {
  return (
    <Grid container spacing={3} style={{ maxWidth: '1500px' }}>
      {
        clothingItems.map((item: ShoppingItemBase) => {
          return (
            <Grid item xs={3}>
              <ItemCard name={item.name} price={item.price} description={item.description} />
            </Grid>
          )
        }
        )
      }
    </Grid>
  )
}
