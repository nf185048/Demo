import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Button, Grid, Typography } from '@ncr-design-system/react'
import { clothingItems } from '../../data'
// import { State } from '../../state'
import { ShoppingItemBase } from '../../types'
import { ItemCard } from '../../components'
import { withRouter } from 'react-router-dom'

export const ShoppingPage: FC<{}> = () => {
  const [shoppingList, addToShoppingList] = useState<ShoppingItemBase[]>([])

  const handleItemAdd = (item: any) => addToShoppingList([...shoppingList, item])

  useEffect(() => {
    console.log(shoppingList)
  }, [shoppingList]);

  const SubmitButton = withRouter((props) => (
    <Button
      style={{ width: '100%', margin: '2em 2em 0 2em' }}
      {...props}
      onClick={() => {
        props.history.push({
          pathname: '/pages/OrderSummary',
          state: {
            shoppingList: shoppingList
          }
        })
      }}>
      Continue to payment
    </Button >
  ));

  return (
    <Grid container spacing={3} className='shoppingPageContainer'>

      <Grid item xs={12}>
        <Typography variant='largeTitle'>Women's Clothing</Typography>
      </Grid>

      {
        clothingItems.map((item: ShoppingItemBase) => {
          return (
            <Grid item>
              <ItemCard name={item.name} price={item.price} description={item.description} handleClick={() => handleItemAdd(item)} />
            </Grid>
          )
        }
        )
      }

      <SubmitButton />
    </Grid>
  )
}
