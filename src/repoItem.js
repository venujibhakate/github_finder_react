import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './App.css';
function Repos(props) {
	const { profile, repo } = props;
	return (
		<div>
			{profile.map(profile => (
				<Card style={{ width: '250px', marginLeft: '15%', marginTop: '1%' }}>
					<CardContent>
						<img style={{ width: '200px', marginLeft: '5%' }} alt="thumbnail" src={profile.avatar_url} />
						<a href={profile.html_url} style={{ textDecoration: 'none' }}>
							<Button
								variant="contained"
								style={{ marginTop: '25px', fontSize: '22', width: '100%' }}>
								View Profile
								</Button>
						</a>
						<p style={{ fontSize: '40' }}>{profile.login}</p>
						<p style={{ fontSize: '30', color: '#666' }}>{profile.login}</p>
						<hr />
						<br />
						<hr />
					</CardContent>

				</Card>

			))}
			<div style={{ marginLeft: '465px', marginTop: '-440px' }}>
				{repo.map(repo => (
					<Card style={{ width: '425px', display: 'inline-block', marginLeft: '50px' }}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								<a
									href={repo.html_url}
									style={{ fontSize: '15px', textDecoration: 'none', display: 'table-cell' }}
									target="_blank"
									rel="noopener noreferrer">
									{repo.name}
								</a>

							</Typography>
						</CardContent>
					</Card>
				))}
			</div>


		</div>
	);
}

export default Repos;
