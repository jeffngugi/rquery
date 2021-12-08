import React, { Fragment } from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Container} from '@material-ui/core'
import Users from './users'
import SingleUser from './users/SingleUser'
import CreateUser from './users/CreateUser'
import { ReactQueryDevtools } from 'react-query/devtools'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const App = () => {

  const queryCLient = new QueryClient()

  return (
    <QueryClientProvider client={queryCLient}>
      <Router>
       <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/user/create">
          <CreateUser />
        </Route>
        <Route path="/user/:id">
          <SingleUser />
        </Route>
      </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
