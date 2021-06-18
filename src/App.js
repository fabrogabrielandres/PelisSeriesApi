import React from 'react'
import "./App.css"
import { Header } from './components/Header/Header'
import { MainNav } from './components/MainNav/MainNav'
import { Container } from '@material-ui/core'
import { Trending } from './Pages/Trending/Trending';
import { Movies } from './Pages/Movies/Movies';
import { Series } from './Pages/Series/Series';


import {
BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import { Searchh } from './Pages/Search/Search'


export const App = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/series" component={Series}/>
            <Route path="/search" component={Searchh}/>
          </Switch>
        </Container>
      </div>
      <MainNav />
    </Router>
  )
}


