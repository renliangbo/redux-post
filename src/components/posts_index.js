import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component{
	componentWillMount(){
		this.props.fetchPosts();
	}
	renderMapPost(post){
		return(
			<div key={post.id}>
				{post.id}
			</div>		
		)
	};

	render(){
		return(
			<div>
				<div className="">
					<Link  to={'/posts/new'}>
						<div className="btn btn-primary">
							Add post
						</div>
					</Link>
				</div>
				<h1>posts</h1>
				{this.props.posts.all.map(this.renderMapPost)}
			</div>
		)
	}
	
};

function mapDispatchToProps(dispatch) {
	return  bindActionCreators({fetchPosts},dispatch)
};

function mapStateToProps({posts}) {
	return  {posts}
};



export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex)
 