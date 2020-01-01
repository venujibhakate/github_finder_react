import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import './App.css';
function Repos(props){
		const {profile} = props;
		return (
			<div>
				{profile.map(profile => (
					<Card style={{ width: '250px', marginLeft:'10%',marginTop:'1%' }}>
						<CardContent>
							<img style={{ width: '200px' }} alt="thumbnail" src={profile.avatar_url} />
							</CardContent>

						</Card>
					))}

				</div>
		);
	}

export default Repos;
