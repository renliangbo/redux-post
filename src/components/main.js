import React from 'react';
import {Switch,Route} from 'react-router-dom';
import PostsIndex from '../components/posts_index';
import PostsNew from '../components/posts_new';
import GetPost from '../components/posts_get'
export default ()=>{
	return (
		<main className="jumbotron">
			<Switch>
				<Route exact path='/' render={({match})=>{
					return <PostsIndex/>
				}}/>
				<Route path='/posts/new' component={PostsNew}/>
				<Route path='/posts/new/:id' component={GetPost} />
			</Switch>
		</main>
	)
}
