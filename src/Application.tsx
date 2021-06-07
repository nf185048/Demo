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
          <Grid container xs={6}>
            <ItemGroup>
              <Item>
                <Label>Controls</Label>
                <Link className='router-link' to='/pages/Buttons'>
                  Buttons
                </Link>
                |
                <Link className='router-link' to='/pages/Checkboxes'>
                  Checkboxes
                </Link>
              </Item>
              <Item>
                <Label>Containers</Label>
                <Link className='router-link' to='/pages/Modals'>
                  Modals
                </Link>
                |
                <Link className='router-link' to='/pages/Drawers'>
                  Drawers
                </Link>
              </Item>
              <Item>
                <Label>Content</Label>
                <Link className='router-link' to='/pages/Typographies'>
                  Typographies
                </Link>
                |
                <Link className='router-link' to='/pages/Colors'>
                  Colors
                </Link>
              </Item>
              <Item>
                <Label>Digital Ordering</Label>
                <Link className='router-link' to='/pages/DigitalOrdering'>
                  Digital Ordering
                </Link>
              </Item>
              <Item>
                <Label>Layout</Label>
                <Link className='router-link' to='/pages/Lists'>
                  Lists
                </Link>
                |
                <Link className='router-link' to='/pages/Grids'>
                  Grids
                </Link>
              </Item>
              <Item>
                <Label>App Clones</Label>
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
            <Route path='/pages/DigitalOrdering' component={() => <Pages.DigitalOrdering />} />
            <Route path='/pages/AppClones' component={() => <Pages.AppClones />} />
          </Switch>
        </Grid>
      </Router>
    </div>
  )
}

export default Application
