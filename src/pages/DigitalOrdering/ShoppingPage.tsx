import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Badge, Breadcrumb, BreadcrumbList, Button, Grid, Header, HeaderItem, Typography } from '@ncr-design-system/react'
import { clothingItems } from '../../data'
// import { State } from '../../state'
import { ShoppingItemBase } from '../../types'
import { ItemCard } from '../../components'
import { withRouter } from 'react-router-dom'
import { Cart, Shop } from '../../assets'

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

  const CartButton = withRouter((props) => (
    <Button variant='text' onClick={() => {
      props.history.push({
        pathname: '/pages/OrderSummary',
        state: {
          shoppingList: shoppingList
        }
      })
    }}>
      <Cart />
      <Badge variant='counter' counter={shoppingList.length} truncateAt={99}></Badge>
    </Button>
  ))

  return (
    <Grid container spacing={3} className='digitalOrdering'>
      <Grid container alignItems='center' spacing={4} style={{ padding: '1em 1em 2em 1em' }}>
        <Grid item><Shop /></Grid>
        <Grid item><Button variant='text'>New</Button></Grid>
        <Grid item><Button variant='text'>Women</Button></Grid>
        <Grid item><Button variant='text'>Men</Button></Grid>
        <Grid item xs={6}><Button variant='text'>Clearance</Button></Grid>
        <Grid item xs={1}>
          <CartButton />
        </Grid>
      </Grid>
      <Grid container>
        <Header className='shoppingPageHeader'>
          <Typography variant='largeTitle'>Clearance</Typography>
          <HeaderItem>
            <BreadcrumbList>
              <Breadcrumb>Women</Breadcrumb>
              <Breadcrumb>Clothing</Breadcrumb>
              <Breadcrumb>Tops</Breadcrumb>
            </BreadcrumbList>
          </HeaderItem>
        </Header>
      </Grid>
      <Grid container spacing={3} justify='space-between' style={{ padding: '2em 4em' }}>
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
      </Grid>
      <SubmitButton />
    </Grid>
  )
}
