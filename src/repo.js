import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import './App.css';
function Repos(props){
		const {profile} = props;
		return (
			<div>
				{profile.map(profile => (
					<Card style={{ width: '250px', marginLeft:'10%',marginTop:'1%' }}>
						<CardContent>
							<img style={{ width: '200px' }} alt="thumbnail" src={profile.avatar_url} />
							<a href={profile.html_url} style={{textDecoration: 'none'}}>
								<Button
									variant="contained"
									style={{  marginTop: '25px',fontSize: '24', width: '100%' }}>
									View Profile
								</Button>
							</a>
							</CardContent>

						</Card>
					))}

				</div>
		);
	}

export default Repos;
