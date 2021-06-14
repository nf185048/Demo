import React from 'react'
import type { FC } from 'react'
import { Label, List, ListTitle, Typography } from '@ncr-design-system/react'
import { ShoppingItem } from '../../components'
import { ShoppingItemBase } from '../../types'

export const OrderSummary: FC<{}> = () => {
  const arr: ShoppingItemBase[] = [
    {
      name: 'Chicken Breast',
      price: 7.99,
      description: 'Sanderson Farms Fresh Boneless Chicken Breast Fillets, 1.6-2.4 lb'
    },
    {
      name: 'Vegetable Broth',
      price: 4.99,
      description: 'Pacific Foods Fresh Organic Vegetable Broth, Gluten Free, 32oz'
    },
    {
      name: 'Rice Noodles',
      price: 3.49,
      description: 'Thai Kitchen Instant Rice Noodle Soup Spring Onion, Steam-Cooked, 1.6 OZ'
    },
    { name: 'Salt', price: 2.49, description: 'McCormick Himalayan Pink Salt Grinder, 2.5 oz' },
    { name: 'Crushed Black Pepper', price: 2.99, description: 'Watkins Gourmet Spice Tin, Pure Ground Black Pepper' }
  ]

  let subTotal = arr.reduce((tempTotal, item) => tempTotal + item.price, 0)
  let tax = 0.07 * subTotal
  let total = subTotal * tax + subTotal
  //meals.reduce((totalCalories, meal) => totalCalories + meal.calorie, 0)

  return (
    <div className='orderingContainer'>
      <List>
        <ListTitle lines='inset'>
          <Label>Order Summary</Label>
        </ListTitle>

        {arr.map(value => (
          <ShoppingItem name={value.name} price={value.price} description={value.description} />
        ))}
      </List>
      <div className='total'>
        <Typography variant='callout'>Subtotal: ${subTotal.toFixed(2)}</Typography>
        <Typography variant='callout'>Total: ${tax.toFixed(2)}</Typography>
        <Typography variant='title2'>Total: ${total.toFixed(2)}</Typography>
      </div>
    </div>
  )
}
