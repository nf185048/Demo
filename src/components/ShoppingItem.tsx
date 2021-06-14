import React, { useState } from 'react'
import { Button, Input, InputWrapper, Item, Grid, Label, Typography } from '@ncr-design-system/react'
import type { FC } from 'react'
import { Close } from '../assets'
import './ShoppingItem.css'
// internal

export const ShoppingItem: FC<{
  name: string
  price: number
  description: string
}> = ({ name = '', price = 0, description = '' }) => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      {visible && (
        <Item lines='inset' className='itemStyle'>
          <Grid container>
            <Grid item justify='flex-start' xs={9}>
              <Typography variant='headline'>{name}</Typography>
              <Typography variant='callout'>{price}</Typography>
              <Typography variant='caption1'>{description}</Typography>
            </Grid>

            <Grid item xs={2}>
              <Label>Qty:</Label>
              <InputWrapper variant='simple'>
                <Input type='number' placeholder='1' />
              </InputWrapper>
            </Grid>

            <Grid item xs={1} className='cancelButton'>
              <Button variant='text' className='buttonStyle' onClick={() => setVisible(false)}>
                <Close />
              </Button>
            </Grid>
          </Grid>
        </Item>
      )}
    </div>
  )
}
