import React, { } from 'react'
import { Typography, Card, Grid, Button } from '@ncr-design-system/react'
import type { FC } from 'react'
import './ItemCard.css'

export const ItemCard: FC<{
  name?: string
  price?: number
  description?: string
  Image?: any
  altText?: string
}> = ({ name = '', price = 0, description = '', Image = {}, altText = '' }) => {
  return (
    <Card className='itemContainer'>
      <Grid container>
        <Grid item xs={12}>
          <Image className='image' alt={altText} />
          <Typography variant='title3' bold>{name}</Typography>
          <Typography variant='headline'>{price}</Typography>
          <Typography variant='callout'>{description}</Typography>
        </Grid>
        <Grid container justify='flex-end' style={{ paddingTop: '1.5em' }}>
          <Button variant='outline'>Add to cart</Button>
        </Grid>
      </Grid>
    </Card>
  )
}
