import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component{
	componentWillMount(){
		this.props.fetchPosts();
	}
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
			</div>
		)
	}
	
};
function mapDispatchToProps(dispatch) {
	return  bindActionCreators({fetchPosts},dispatch)
};

export default connect(null,mapDispatchToProps)(PostsIndex)
 