import React ,{Component}from'react';
import {reduxForm,Field ,Fields} from 'redux-form';

class PostNew extends Component {
	render(){
		const {handleSubmit}=this.props;

		const titleField=(field)=>{
			console.log(field)
			return (
				<div className="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input 
						type="text"
						name="title"
						className="form-control"
						id="exampleInputEmail1"
						placeholder="Enter title"
							/>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
			)
		};

		return(
			<div>
				<form onSubmit={handleSubmit}>
					<Field name="myField" component={titleField}/>
					<div className="form-group">
						<label for="exampleInputPassword1">Categories</label>
						<Field 
							type="text"
							name="categories"
							component="input"
							className="form-control"
							id="exampleInputEmail1"
							placeholder="Enter categories"
							id="exampleInputPassword1"
							 />
					</div>
					<div className="form-group">
						<label for="exampleInputPassword">Content</label>
						<input type="text" className="form-control" id="exampleInputPassword" placeholder="Password"/>
					</div>
					<button  type="submit" className="btn btn-primary">Save</button>
					<div className="btn btn-primary">Cancle</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form:'PostsNewForm'
})(PostNew);