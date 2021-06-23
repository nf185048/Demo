import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import './Application.css'
import * as Pages from './pages'
import { Grid, Button, Item, Label, Drawer, Typography, ContextItem, ContextMenu } from '@ncr-design-system/react'
import { Menu } from './assets'

function Application() {
  const [opened, setOpened] = useState(false)

  const AppDrawer = () => {
    return (
      <>
        <Drawer open={opened} placement='left' onHide={() => setOpened(false)}>
          <ContextMenu>
            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>App Clones</Typography></Label>
              <ContextItem>
                <Link className='router-link' to='/pages/AppClones'>
                  App Clone
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/DigitalOrdering'>
                  Digital Ordering
                </Link>
              </ContextItem>
              <Link className='router-link' to='/pages/CheckoutForm'></Link>

              <ContextItem>
                <Link className='router-link' to='/pages/ShoppingPage'>
                  Shopping
                </Link>
              </ContextItem>

            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Containers</Typography>
              </Label>
              <ContextItem>
                <Link className='router-link' to='/pages/DrawerExample'>
                  Drawers
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/DropdownExample'>
                  Dropdowns
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/ModalExample'>
                  Modals
                </Link>
              </ContextItem>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Content</Typography>
              </Label>
              <ContextItem>
                <Link className='router-link' to='/pages/ColorExample'>
                  Colors
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/TypographyExample'>
                  Typography
                </Link>
              </ContextItem>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Controls</Typography>
              </Label>
              <ContextItem>
                <Link className='router-link' to='/pages/BreadcrumbExample'>
                  Breadcrumbs
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/ButtonExample'>
                  Buttons
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/CheckboxExample'>
                  Checkboxes
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/InputExample'>
                  Inputs
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/PaginationExample'>
                  Pagination
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/RadioExample'>
                  Radios
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/RangeExample'>
                  Ranges
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/SearchExample'>
                  Search
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/SelectExample'>
                  Select
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/TabsExample'>
                  Tabs
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/ToggleExample'>
                  Toggle
                </Link>
              </ContextItem>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Informational</Typography>
              </Label>
              <ContextItem>
                <Link className='router-link' to='/pages/AlertExample'>
                  Alerts
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/BadgeExample'>
                  Badges
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/IconExample'>
                  Icon
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/LoadingExample'>
                  Loading
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/ProgressExample'>
                  Progress
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/TooltipExample'>
                  Tooltip
                </Link>
              </ContextItem>
            </Item>

            <Item className='subsection'>
              <Label position='stacked'>
                <Typography variant='body' bold>Layout</Typography>
              </Label>
              <ContextItem>
                <Link className='router-link' to='/pages/AppExample'>
                  App
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/GridExample'>
                  Grid
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/ListExample'>
                  Lists
                </Link>
              </ContextItem>
              <ContextItem>
                <Link className='router-link' to='/pages/TableExample'>
                  Tables
                </Link>
              </ContextItem>
            </Item>
          </ContextMenu>
        </Drawer>
      </>
    )
  }

  const AppContent = () => {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/pages/Home" />}
        />

        <Route path='/pages/AlertExample' component={() => <Pages.AlertExample />} />
        <Route path='/pages/AppExample' component={() => <Pages.AppExample />} />
        <Route path='/pages/AppClones' component={() => <Pages.AppClones />} />
        <Route path='/pages/BadgeExample' component={() => <Pages.BadgeExample />} />
        <Route path='/pages/BreadcrumbExample' component={() => <Pages.BreadcrumbExample />} />
        <Route path='/pages/ButtonExample' component={() => <Pages.ButtonExample />} />
        <Route path='/pages/CheckboxExample' component={() => <Pages.CheckboxExample />} />
        <Route path='/pages/CheckoutForm' component={() => <Pages.CheckoutForm />} />
        <Route path='/pages/ColorExample' component={() => <Pages.ColorExample />} />
        <Route path='/pages/DigitalOrdering' component={() => <Pages.OrderSummary />} />
        <Route path='/pages/DrawerExample' component={() => <Pages.DrawerExample />} />
        <Route path='/pages/DropdownExample' component={() => <Pages.DropdownExample />} />
        <Route path='/pages/GridExample' component={() => <Pages.GridExample />} />
        <Route path='/pages/Home' component={() => <Pages.Home />} />
        <Route path='/pages/IconExample' component={() => <Pages.IconExample />} />
        <Route path='/pages/InputExample' component={() => <Pages.InputExample />} />
        <Route path='/pages/ListExample' component={() => <Pages.ListExample />} />
        <Route path='/pages/LoadingExample' component={() => <Pages.LoadingExample />} />
        <Route path='/pages/ModalExample' component={() => <Pages.ModalExample />} />
        <Route path='/pages/PaginationExample' component={() => <Pages.PaginationExample />} />
        <Route path='/pages/ProgressExample' component={() => <Pages.ProgressExample />} />
        <Route path='/pages/RadioExample' component={() => <Pages.RadioExample />} />
        <Route path='/pages/RangeExample' component={() => <Pages.RangeExample />} />
        <Route path='/pages/SearchExample' component={() => <Pages.SearchExample />} />
        <Route path='/pages/SelectExample' component={() => <Pages.SelectExample />} />
        <Route path='/pages/ShoppingPage' component={() => <Pages.ShoppingPage />} />
        <Route path='/pages/TabsExample' component={() => <Pages.TabsExample />} />
        <Route path='/pages/TableExample' component={() => <Pages.TableExample />} />
        <Route path='/pages/ToggleExample' component={() => <Pages.ToggleExample />} />
        <Route path='/pages/TooltipExample' component={() => <Pages.TooltipExample />} />
        <Route path='/pages/TypographyExample' component={() => <Pages.TypographyExample />} />
      </Switch>
    )
  }

  return (
    <Router>
      <Grid container className='app-container'>
        {/* Navigation */}
        <Grid container spacing={3} alignItems='center'>
          <Grid item>
            <Button variant='outline' onClick={() => setOpened(true)}>
              <Menu />
            </Button>
          </Grid>
          <Grid item justify='flex-start' alignItems='center' style={{ paddingTop: '1em' }}>
            <Link className='router-link' to='/pages/Home'>
              User Testing
            </Link>
          </Grid>
        </Grid>

        <AppDrawer />

        {/* Content */}
        <Grid item xs={11}>
          <AppContent />
        </Grid>
      </Grid>
    </Router>
  )
}

export default Application
