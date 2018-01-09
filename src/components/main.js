import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../components/home';
import PostsIndex from '../components/posts_index';
import Roster from '../components/roster';
import Schedule from '../components/schedule';
import schedule from '../components/schedule';
export default ()=>{
	return (
		<main>
			<Switch>
				<Route exact path='/' render={({match})=>{
					return <PostsIndex/>
				}}/>
				<Route path='/roster' component={Roster}/>
				<Route path='/Schedule' component={schedule}/>
			</Switch>
		</main>
	)
}
