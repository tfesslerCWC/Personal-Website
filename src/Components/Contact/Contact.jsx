import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import ContactStyles from './ContactStyles'

const Contact = () => {
	const classes = ContactStyles();
	return (
		<div id="contact" className={classes.size}>
			<Grid container>
				<Grid className={classes.title} item xs={12}>
					<br />
					<Typography variant="h2">Contact Me</Typography>
					<Typography variant="h4">~ Can't Wait to Connect! ~</Typography>
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={5}>

				</Grid>
				<Grid item xs={5}>

				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
		</div>
	)
}

export default Contact;
