import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import githubUrl from './githubUrl';

class SearchBar extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        query: '',
    }
    }
    handleChange = (event) => this.setState({ query:event.target.value})
        // console.log(event.target.value);
    
    handleSubmit = async event => {
        // const {query} = this.state;
        // const {onFormSubmit} = this.props;

        // onFormSubmit(query);
            event.preventDefault();
            const response = await githubUrl.get('users', {
                params: {
                    q:this.state.query,
                },
            });
            console.log(response.data.items)
         
    }

    

    render() {
        return (
            <div>
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        fullWidth
                        label="Search..." onChange={this.handleChange}/>

                </form>

            </Paper>
            </div>
        )
    }
}
export default SearchBar;