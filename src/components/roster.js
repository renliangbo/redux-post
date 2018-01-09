import React from'react';
import {Switch,Route} from 'react-router-dom';
import FullRoster from './fullRoster';
import fullRoster from './fullRoster';
import player from './player';
export default ()=>{
	return (
		<div>
			<h1>this is roster page</h1>
			<Switch>
				<Route exact path='/roster' component={fullRoster}/>
				<Route path='/roster/:id' component={player}/>
			</Switch>
		</div>
	)
}