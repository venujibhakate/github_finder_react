import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import { Grid } from '@material-ui/core';


class App extends Component {
  render() {
    return (
          <Grid justify="center" container spacing={16}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
  }
}
  export default App;
