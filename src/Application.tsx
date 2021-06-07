import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import * as Pages from './pages'
import { Grid, Typography, List, ListTitle, ItemGroup, Item, Label } from '@ncr-design-system/react'

function Application() {
  return (
    <div className='app-container'>
      <Grid item xs={12} className='headline'>
        <Typography variant='headline'>NCR Design System | React</Typography>
      </Grid>

      {/* Navigation */}
      <Router>
        <List>
          <ListTitle className='list-title'>Web Component Showcase</ListTitle>
          <Grid container xs={12}>
            <ItemGroup>
              <Item>
                <Label position='stacked'>Controls</Label>
                <Link className='router-link' to='/pages/Buttons'>
                  Buttons
                </Link>
                <Link className='router-link' to='/pages/Checkboxes'>
                  Checkboxes
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>Containers</Label>
                <Link className='router-link' to='/pages/Modals'>
                  Modals
                </Link>
                <Link className='router-link' to='/pages/Drawers'>
                  Drawers
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>Content</Label>
                <Link className='router-link' to='/pages/Typographies'>
                  Typographies
                </Link>
                <Link className='router-link' to='/pages/Colors'>
                  Colors
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>Digital Ordering</Label>
                <Link className='router-link' to='/pages/OrderSummary'>
                  Order Summary
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>Layout</Label>
                <Link className='router-link' to='/pages/Lists'>
                  Lists
                </Link>
                <Link className='router-link' to='/pages/Grids'>
                  Grids
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>App Clones</Label>
                <Link className='router-link' to='/pages/AppClones'>
                  App Clones
                </Link>
              </Item>
            </ItemGroup>
          </Grid>
        </List>

        {/* Content */}
        <Grid className='content'>
          <Switch>
            <Route path='/pages/Buttons' component={() => <Pages.Buttons />} />
            <Route path='/pages/Checkboxes' component={() => <Pages.Checkboxes />} />
            <Route path='/pages/Modals' component={() => <Pages.Modals />} />
            <Route path='/pages/Drawers' component={() => <Pages.Drawers />} />
            <Route path='/pages/Typographies' component={() => <Pages.Typographies />} />
            <Route path='/pages/Colors' component={() => <Pages.Colors />} />
            <Route path='/pages/Lists' component={() => <Pages.Lists />} />
            <Route path='/pages/Grids' component={() => <Pages.Grids />} />
            <Route path='/pages/DigitalOrdering' component={() => <Pages.OrderSummary />} />
            <Route path='/pages/AppClones' component={() => <Pages.AppClones />} />
          </Switch>
        </Grid>
      </Router>
    </div>
  )
}

export default Application
