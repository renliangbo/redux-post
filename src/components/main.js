import React from 'react';
import {Switch,Route} from 'react-router-dom';
import PostsIndex from '../components/posts_index';
import PostsNew from '../components/posts_new';
export default ()=>{
	return (
		<main className="jumbotron">
			<Switch>
				<Route exact path='/' render={({match})=>{
					return <PostsIndex/>
				}}/>
				<Route path='/posts/new' component={PostsNew}/>
			</Switch>
		</main>
	)
}
