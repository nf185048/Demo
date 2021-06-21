import React from 'react'
import type { FC } from 'react'
import { ItemCard } from '../../components'
import { Grid } from '@ncr-design-system/react'
import { clothingItems } from '../../data'


export const ShoppingPage: FC<{}> = () => {
  return (
    <Grid container spacing={3} style={{ maxWidth: '1500px' }}>
      {
        clothingItems.map(item => (
          <Grid item xs={3}>
            <ItemCard name={item.name} price={item.price} description={item.description} Image={item.image} />
          </Grid>
        ))
      }
    </Grid>
  )
}
