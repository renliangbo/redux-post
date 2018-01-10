import React ,{Component}from'react';
import {reduxForm,Field ,Fields} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {createPost} from '../actions';

const required = value => value ? undefined : 'Required';
const maxLength =max =>value=>value&&value.length>max ? `Must be ${max} characters or less`:undefined;
const maxLength20=maxLength(20);
class PostNew extends Component {
	onSubmit(props){
		console.log(this.contextType)
		this.props.createPost(props)
		.then(()=>{
			this.props.history.push('/');
		})
	}

	render(){
		console.log(this.props)

		const renderField=({input,label,placeholder,type,meta:{touched,error}})=>{
			return (
				<div className="form-group">
					<label for="exampleInputEmail1">{label}</label>
					<input 
						className="form-control"
						{...input}
						type={type}
						placeholder={placeholder}
							/>
					{touched&&(error&&(<small>{error}</small>))}
				</div>
			)
		};

		const {handleSubmit}=this.props;

		return(
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
						name="title"
						label="title"
						component={renderField}
						type="text"
						placeholder="Enter title"
						validate={[required,maxLength20]}
					/>

					<Field
						name="categories"
						label="categories"
						component={renderField}
						type="text"
						placeholder="Enter categories"
						validate={[required]}
					/>

					<Field
						name="content"
						label="content"
						component={renderField}
						type="text"
						placeholder="Enter content"
						validate={[required]}
					/>
					
					<button  type="submit" className="btn btn-primary">Save</button>
					<Link to="/">
						<div className="btn btn-danger">Cancle</div>
					</Link>
				
				</form>
			</div>
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
