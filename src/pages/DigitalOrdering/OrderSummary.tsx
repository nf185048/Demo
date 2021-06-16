import React from 'react'
import type { FC } from 'react'
import { Grid, List, Typography } from '@ncr-design-system/react'
import { ShoppingItem } from '../../components'
import { shoppingItems } from '../../data'
import './DigitalOrdering.css'

export const OrderSummary: FC<{}> = () => {

  let subTotal = shoppingItems.reduce((tempTotal, item) => tempTotal + item.price, 0)
  let tax = 0.07 * subTotal
  let total = subTotal * tax + subTotal

  return (
    <Grid container className='orderingContainer'>

      {/* Order Summary Container */}
      <Typography variant='title2' bold >Order Summary</Typography>
      <List >
        {shoppingItems.map(value => (
          <ShoppingItem name={value.name} price={value.price} description={value.description} />
        ))}
      </List>

      {/* Total Price Container */}
      <Grid container justify='flex-end' className="totalPrice">
        <Grid item xs={2}>
          <Typography variant='callout'>Subtotal:</Typography>
          <Typography variant='callout'>Tax:</Typography>
          <Typography variant='title3'>Total:</Typography>
        </Grid >
        <Grid item xs={1} style={{ textAlign: 'right' }}>
          <Typography variant='callout'>${subTotal.toFixed(2)}</Typography>
          <Typography variant='callout'>${tax.toFixed(2)}</Typography>
          <Typography variant='title3'>${total.toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
