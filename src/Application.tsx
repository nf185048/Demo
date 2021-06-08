import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Application.css'
import * as Pages from './pages'
import { Grid, Typography, List, ListTitle, ItemGroup, Item, Label } from '@ncr-design-system/react'

function Application() {
  return (
    <Grid container spacing={3} className='app-container'>
      <Typography className='title' variant='title1'>
        NCR Design System | React
      </Typography>

      {/* Navigation */}
      <Router>
        <Grid xs={12}>
          <List>
            <ListTitle className='list-title'>Web Component Showcase</ListTitle>
            <ItemGroup>
              <Item>
                <Label position='stacked'>Controls</Label>
                <Link className='router-link' to='/pages/Breadcrumbs'>
                  Breadcrumbs
                </Link>
                <Link className='router-link' to='/pages/Buttons'>
                  Buttons
                </Link>
                <Link className='router-link' to='/pages/Checkboxes'>
                  Checkboxes
                </Link>
                <Link className='router-link' to='/pages/Inputs'>
                  Inputs
                </Link>
                <Link className='router-link' to='/pages/Paginations'>
                  Pagination
                </Link>
                <Link className='router-link' to='/pages/Radios'>
                  Radios
                </Link>
                <Link className='router-link' to='/pages/Ranges'>
                  Ranges
                </Link>
                <Link className='router-link' to='/pages/Searches'>
                  Search
                </Link>
                <Link className='router-link' to='/pages/Selects'>
                  Select
                </Link>
                <Link className='router-link' to='/pages/Tabs'>
                  Tabs
                </Link>
                <Link className='router-link' to='/pages/Toggles'>
                  Toggle
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>Containers</Label>
                <Link className='router-link' to='/pages/Drawers'>
                  Drawers
                </Link>
                <Link className='router-link' to='/pages/Dropdowns'>
                  Dropdowns
                </Link>
                <Link className='router-link' to='/pages/Modals'>
                  Modals
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>Content</Label>
                <Link className='router-link' to='/pages/Colors'>
                  Colors
                </Link>
                <Link className='router-link' to='/pages/Typographies'>
                  Typographies
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>Layout</Label>
                <Link className='router-link' to='/pages/Grids'>
                  Grids
                </Link>
                <Link className='router-link' to='/pages/Lists'>
                  Lists
                </Link>
              </Item>

              <Item>
                <Label position='stacked'>Informational</Label>
                <Link className='router-link' to='/pages/Alerts'>
                  Alerts
                </Link>
                <Link className='router-link' to='/pages/Badges'>
                  Badges
                </Link>
                <Link className='router-link' to='/pages/Icons'>
                  Icons
                </Link>
                <Link className='router-link' to='/pages/Loadings'>
                  Loading
                </Link>
                <Link className='router-link' to='/pages/Progresses'>
                  Progress
                </Link>
                <Link className='router-link' to='/pages/Tooltips'>
                  Tooltips
                </Link>
              </Item>
            </ItemGroup>
          </List>
        </Grid>

        {/* Content */}
        <Grid xs={12}>
          <Switch>
            <Route path='/pages/Alerts' component={() => <Pages.Alerts />} />
            <Route path='/pages/AppClones' component={() => <Pages.AppClones />} />
            <Route path='/pages/Badges' component={() => <Pages.Badges />} />
            <Route path='/pages/Breadcrumbs' component={() => <Pages.Breadcrumbs />} />
            <Route path='/pages/Buttons' component={() => <Pages.Buttons />} />
            <Route path='/pages/Checkboxes' component={() => <Pages.Checkboxes />} />
            <Route path='/pages/Colors' component={() => <Pages.Colors />} />
            <Route path='/pages/DigitalOrdering' component={() => <Pages.OrderSummary />} />
            <Route path='/pages/Drawers' component={() => <Pages.Drawers />} />
            <Route path='/pages/Dropdowns' component={() => <Pages.Dropdowns />} />
            <Route path='/pages/Grids' component={() => <Pages.Grids />} />
            <Route path='/pages/Icons' component={() => <Pages.Icons />} />
            <Route path='/pages/Inputs' component={() => <Pages.Inputs />} />
            <Route path='/pages/Lists' component={() => <Pages.Lists />} />
            <Route path='/pages/Loadings' component={() => <Pages.Loadings />} />
            <Route path='/pages/Modals' component={() => <Pages.Modals />} />
            <Route path='/pages/Paginations' component={() => <Pages.Paginations />} />
            <Route path='/pages/Progresses' component={() => <Pages.Progresses />} />
            <Route path='/pages/Radios' component={() => <Pages.Radios />} />
            <Route path='/pages/Ranges' component={() => <Pages.Ranges />} />
            <Route path='/pages/Searches' component={() => <Pages.Searches />} />
            <Route path='/pages/Selects' component={() => <Pages.Selects />} />
            <Route path='/pages/Tabs' component={() => <Pages.Tabs />} />
            <Route path='/pages/Toggles' component={() => <Pages.Toggles />} />
            <Route path='/pages/Typographies' component={() => <Pages.Typographies />} />
          </Switch>
        </Grid>
      </Router>
    </Grid>
  )
}

export default Application
