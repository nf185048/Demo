import React, { useState } from 'react'
import type { FC } from 'react'
import { Button, Grid, Typography } from '@ncr-design-system/react'
import './style.css'
import { withRouter } from 'react-router-dom';
import { ShoppingItemBase } from '../../types'
import { ShoppingItem } from '../../components'

export const OrderSummary: FC<{}> = () => {
  const [shoppingList, updateShoppingList] = useState<ShoppingItemBase[]>()


  const OrderSummaryBase = withRouter((props) => {
    const state: any = props?.location?.state
    updateShoppingList(state.shoppingList as ShoppingItemBase[])



    let subTotal = 0
    let tax = 0.07 * subTotal
    let total = tax + subTotal

    return (
      <Grid container className='orderingContainer'>
        <Grid container>
          <Grid item xs={12} style={{ paddingBottom: '1em' }}>
            <Typography variant='title2' bold >Order Summary</Typography>
          </Grid>

          {/* Order Summary Container */}
          <Grid item xs={12}>
            {(shoppingList) ? shoppingList.map(item => {
              subTotal = subTotal + item.price
              tax = 0.07 * subTotal
              total = tax + subTotal
              return (
                <ShoppingItem name={item.name} price={item.price} description={item.description} />
              )
            }) : (
              <Typography variant='largeTitle'>
                Cart is Empty
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* Total Price Container */}
        <Grid container className='totalPrice'>
          <Grid item xs={6} justify='flex-start'>
            <Typography variant='body'>Subtotal:</Typography>
            <Typography variant='body'>Tax:</Typography>
            <Typography variant='body' bold>Total:</Typography>
          </Grid >
          <Grid item xs={6} justify='flex-end' style={{ textAlign: 'right' }}>
            <Typography variant='body'>${subTotal?.toFixed(2)}</Typography>
            <Typography variant='body'>${tax.toFixed(2)}</Typography>
            <Typography variant='body' bold>${total.toFixed(2)}</Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Button
            style={{ width: '100%', margin: '2em 0 0 0' }}
            {...props}
            onClick={() => {
              props.history.push('/pages/CheckoutForm')
            }}>
            Continue to payment
          </Button>
        </Grid>
      </Grid >

    )
  });

  return (
    <OrderSummaryBase />
  )
}
