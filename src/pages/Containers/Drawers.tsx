import React, { useState } from 'react'
import type { FC } from 'react'
import { Button, ContextItem, ContextMenu, Drawer, Grid, Item, Label, List, Typography } from '@ncr-design-system/react'
import './style.css'

export const DrawerExample: FC<{}> = () => {
  // let opened = false
  const [opened, setOpened] = useState(false)
  const [selected, selectIndex] = useState<number>(0)

  const colors: string[] = ['white', 'black']

  const handleDrawerClose = (_e: any) => {
    setOpened(false)
  }

  const handleDrawerOpen = (e: any) => {
    setOpened(true)
    console.log(e.target.value)
  }

  return (
    <Grid container className='defaultContainer'>
      <Grid item xs={12}>
        <Typography variant='title2'>Customize Interface</Typography>
      </Grid>
      <Button onClick={handleDrawerOpen}>Choose background color</Button>

      <Drawer open={opened} label='Background Color' placement='top' onHide={handleDrawerClose}>
        <>
          {colors.map((item, index) => (
            <Item selected={index === selected}>
              <Typography>{item}</Typography>
            </Item>
          ))}
        </>
      </Drawer>
    </Grid>
  )
}
