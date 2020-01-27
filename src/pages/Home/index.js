import React, {useState} from'react';
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core';

import styles from './style';
import MovieIcon  from '../../icons/MovieIcon';
import TvIcon from '../../icons/TvIcon';

export default ({history}) => {
	const [serchText, setSerchText] = useState('');
	const classes = styles();
	const handleSearchTextChange = event => {
		setSerchText(event.target.value);
	};
	const handleCleanTextClick = event => {
		setSerchText("");
	};
	const handleFindTextClick = event => {
		history.push(`/result?movieName=${serchText}`);
	};
	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleContainer}>
					<Grid>
						<TvIcon className= {classes.movieIcon}/>
					</Grid>
					<Grid>
						<Typography className={classes.title}>Bienvenidos</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon}/>
					</Grid>
				</Grid>
				<TextField value={serchText}
				placeholder="Buscar..." 
				className={classes.TextFieldSearch}
				onChange={handleSearchTextChange}/>
				<Grid className={classes.buttonContainer}>
					<Button variant= "contained" onClick={handleCleanTextClick}>Limpiar</Button>
					<Button variant= "contained"  className={classes.serchButton} color="primary" size="large" onClick={handleFindTextClick}>Buscar</Button>
				</Grid>					
			</Card>
		</Container>		
	);
}