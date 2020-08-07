import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Profile from './Profile';
import Payment from './Payment';

function User() {
	return(
		<Switch>

			<Route path="/user/profile" component={Profile} />
			<Route path="/user/payment" component={Payment} />

		</Switch>
	)
}

export default User;