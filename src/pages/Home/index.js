import React, {useState} from'react';
import {Container, Typography, Card, Grid, TextField, Icon} from '@material-ui/core';

export default () => {
	const [serchText, setSerchText] = useState('');

	const handleSearchTextChange = event => {
		setSerchText(event.target.value);
	};
	return (
		<Container>
			<Card>
				<Grid container>
					<Grid>
						<Typography>Bienvenidos</Typography>
					</Grid>
					<Icon></Icon>
					<Grid>
						<Typography>Icon</Typography>
					</Grid>
				</Grid>
				<TextField value={serchText} placeholder="Buscar..." onChange={handleSearchTextChange}/>
			</Card>
		</Container>		
	);
}