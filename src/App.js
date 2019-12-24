import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';


class App extends Component {
  render() {
    return (
      //     <Grid justify="center" container spacing={16}>
      //     <Grid item xs={11}>
      //       <Grid container spacing={10}>
      //         <Grid item xs={12}>
      //           <SearchBar onFormSubmit={this.handleSubmit}/>
      //         </Grid>
      //       </Grid>
      //     </Grid>
      //   </Grid>
      //   );
      // }
      <div>
        <SearchBar />
      </div>
    )
  }
}
  export default App;
