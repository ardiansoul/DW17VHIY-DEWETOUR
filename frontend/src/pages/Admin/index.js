import React from 'react';
import { Route, Switch } from 'react-router-dom';


import IncomeTrip from './IncomeTrip';
import ListTransaction from './ListTransaction';
import AddTrip from './AddTrip';

function Admin() {
	return(
		<Switch>
			<Route path="/admin/incometrip" component={IncomeTrip} />
			<Route path="/admin/transaction" component={ListTransaction} />
			<Route path="/admin/addtrip" component={AddTrip} />
		</Switch>
		)
}

export default Admin;