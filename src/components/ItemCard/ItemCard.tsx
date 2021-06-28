import React from 'react'
import { Typography, Card, Grid, Button } from '@ncr-design-system/react'
import type { FC } from 'react'
import './ItemCard.css'

export const ItemCard: FC<{
  name?: string
  price?: number
  description?: string
  Image?: any
  altText?: string
  handleClick?: any
}> = ({ name = '', price = 0, description = '', altText = '', Image = undefined, handleClick = () => { } }) => {

  return (
    <Card className='itemContainer'>
      <Grid container>
        <Grid item xs={12}>
          {(Image) ? (<Image />) : (<div style={{ width: '380px', height: '200px', backgroundColor: 'grey', marginBottom: '1em' }} />)}
          <Typography variant='title3' bold>{name}</Typography>
          <Typography variant='headline'>{price}</Typography>
          <Typography variant='callout'>{description}</Typography>
        </Grid>
        <Grid container alignContent='flex-end' justify='flex-end' style={{ paddingTop: '1.5em' }}>
          <Button variant='outline' onClick={handleClick}>Add to cart</Button>
        </Grid>
      </Grid>
    </Card>
  )
}
