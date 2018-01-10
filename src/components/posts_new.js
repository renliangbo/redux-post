import React ,{Component}from'react';
import {reduxForm,Field ,Fields} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createPost} from '../actions';
class PostNew extends Component {
	submit(){
		console.log(4)
	}
	render(){
		const {handleSubmit}=this.props;
		console.log(this.props)
		const renderFields=(fields)=>{
		
			return (
				<div>
					<form onSubmit={handleSubmit(this.submit)}>
						<div className="form-group">
							<label for="exampleInputEmail1">title</label>
							<input 
								type="text"
								className="form-control"
								id="exampleInputEmail1"
								placeholder="Enter title"
								{...fields.title.input}
									/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>

						<div className="form-group">
							<label for="exampleInputPassword1">Categories</label>
							<input 
								type="text"
								className="form-control"
								id="exampleInputEmail1"
								placeholder="Enter categories"
								{...fields.categories.input}
									/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>

						<div className="form-group">
							<label for="exampleInputPassword">Content</label>
							<input 
								type="text"
								className="form-control"
								id="exampleInputPassword"
								placeholder="Password"
								{...fields.content.input}
								/>
						</div>
						<button  type="submit" className="btn btn-primary">Save</button>
						<div className="btn btn-primary">Cancle</div>

					</form>
				</div>
			)
		}

		return(
			<Fields names={[ 'title', 'categories','content' ]} component={renderFields}/>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({createPost},dispatch);
};

PostNew=connect(null,mapDispatchToProps)(PostNew)

export default reduxForm({
	form:'PostsNewForm'
})(PostNew);
