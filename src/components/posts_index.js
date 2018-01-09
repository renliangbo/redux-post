import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component{
	componentWillMount(){
		this.props.fetchPosts();
	}
	render(){
		return(
			<div>post</div>
		)
	}
	
};
function mapDispatchToProps(dispatch) {
	return  bindActionCreators({fetchPosts},dispatch)
};

export default connect(null,mapDispatchToProps)(PostsIndex)
 