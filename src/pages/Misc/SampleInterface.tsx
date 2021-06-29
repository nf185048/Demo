import React from 'react'
import type { FC } from 'react'
import { Button, Card, Grid, Label, Typography } from '@ncr-design-system/react'
import { Settings, Visa, Trending } from '../../assets'

export const SampleInterface: FC<{
  interfaceColor?: string
  cardColor?: string
  textColor?: string
  graphicStartColor?: string
  graphicEndColor?: string
}> = (
  { interfaceColor = '',
    cardColor = '',
    textColor = '',
    graphicStartColor = '',
    graphicEndColor = ''
  }) => {
    const graphicStyle = {
      background: `linear-gradient(${graphicStartColor}, ${graphicEndColor})`,
      width: '200px',
      height: '125px',
      border: '1px solid #E6E6E7',
      boxShadow: '8px 16px 40px rgba(0, 0, 0, 0.12)'
    }

    const CreditCard = () => {
      return (
        <Card style={graphicStyle}>
          <Grid direction='column' container spacing={2} alignItems='flex-end'>
            <Grid item>
              <Typography variant='caption1'>17/24</Typography>
            </Grid>
            <Grid item>
              <Typography variant='title3'>*** 2431</Typography>
            </Grid>
            <Grid item>
              <Visa style={{ fill: 'yellow' }} />
            </Grid>
          </Grid>
        </Card>
      )
    }

    return (
      <Grid style={{ backgroundColor: interfaceColor, color: textColor }} container spacing={2} className='sampleContainer'>
        <Grid item xs={12}>
          <Typography variant='title1' italic>Banking Made Simple</Typography>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ backgroundColor: cardColor }}>
            <Grid container justify='space-between'>
              <Label>Balance</Label>
              <Button variant='text'>
                <Settings />
              </Button>
            </Grid>
            <div className="priceTypography">$4,332</div>
            <Grid container justify='center'>
              <CreditCard />
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ backgroundColor: cardColor }}>
            <Grid container justify='space-between'>
              <Label>Card Details</Label>
              <Button variant='text'>
                <Trending />
              </Button>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ backgroundColor: cardColor }}>d</Card>
        </Grid>
      </Grid>
    )
  }
