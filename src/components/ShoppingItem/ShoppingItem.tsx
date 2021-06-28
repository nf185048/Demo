import React, { useState } from 'react'
import { Button, InputWrapper, Grid, Label, Typography, Card } from '@ncr-design-system/react'
import type { FC } from 'react'
import { Close } from '../../assets'
import './ShoppingItem.css'
// internal

export const ShoppingItem: FC<{
  name: string
  price: number
  description: string
}> = ({ name = '', price = 0, description = '' }) => {
  const [visible, setVisible] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [finalPrice, setPrice] = useState(price)

  return (
    <div>
      {visible && (
        <Card className='shoppingItemContainer'>
          <Grid container alignItems='center'>
            <Grid item style={{ padding: '0 1em' }} />
            <Grid item justify='flex-start' xs={9} >
              <Typography variant='headline'>{name}</Typography>
              <Typography variant='callout'>{finalPrice}</Typography>
              <Typography variant='caption1'>{description}</Typography>
            </Grid>

            <Grid item xs={1}>
              <Label>Qty:</Label>
              <InputWrapper variant='simple'>
                <input id='qty' type="number" placeholder={String(quantity)} onChange={() => {
                  setQuantity(quantity + 1) // TODO UPDATE THE WAY QUANTITY INCREASES OR DECREASES
                  setPrice(quantity * price)
                  price = finalPrice
                }} />
              </InputWrapper>
            </Grid>

            <Grid item xs={1}>
              <Button variant='text' className='buttonStyle' onClick={() => setVisible(false)}>
                <Close />
              </Button>
            </Grid>
          </Grid>
        </Card>
      )
      }
    </div >
  )
}
