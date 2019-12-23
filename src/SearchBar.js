import React from 'react';
import { Paper, TextField } from '@material-ui/core';
class SearchBar extends React.Component {
    state = {
        SearchTerm: ''
    }

    handleChange = (event) => this.setState({ SearchTerm:event.target.value})
        // console.log(event.target.value);
    
    handleSubmit = () => {
        const {SearchTerm} = this.state;
    }
    

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        fullWidth
                        label="Search..." onChange={this.handleChange}/>

                </form>

            </Paper>
        )
    }
}
export default SearchBar;