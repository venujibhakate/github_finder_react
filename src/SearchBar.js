import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import GithubUrl from './githubUrl';
import Repo from './repoItem';
import GithubURL from './GithubURL';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            profile: '',
            repos:'',
        }
    }
    handleChange = (event) => this.setState({ query: event.target.value })
    // console.log(event.target.value);

    handleSubmit = async event => {
        // const {query} = this.state;
        // const {onFormSubmit} = this.props;

        // onFormSubmit(query);
        event.preventDefault();
        const response = await GithubUrl.get('users', {
            params: {
                q: this.state.query,
            },
        });
   

        
        const response1 = await GithubURL.get(`/${this.state.query}/repos`);
        console.log(response1)
		this.setState({ profile: response.data.items, repo: response1.data});
    };






    render() {
        return (
            <div>
                <Paper elevation={6} style={{ padding: '25px' }}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            fullWidth
                            label="Search..." onChange={this.handleChange} />

                    </form>

                </Paper>
                {this.state.profile !== '' && (<Repo {...this.state} />)}
            </div>

        )
    }
}
export default SearchBar;