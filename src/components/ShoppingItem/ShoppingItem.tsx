import React, { PropsWithChildren, useState } from 'react'
import { Button, InputWrapper, Grid, Label, Typography, Card } from '@ncr-design-system/react'
import type { FC } from 'react'
import { Close } from '../../assets'
import './ShoppingItem.css'

export type ShoppingProps = PropsWithChildren<{
  name?: string
  price?: number
  description?: string
} & Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'className'>>


export const ShoppingItem: FC<ShoppingProps> = ({ name = '', price = 0, description = '', ...anchorprops }) => {
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
                <input type="number" value={String(quantity)} onChange={(e: any) => {
                  setQuantity(e.target.value)
                  setPrice(price * e.target.value)
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
