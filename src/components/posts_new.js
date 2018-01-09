import React ,{Component}from'react';

class PostNew extends Component {
	render(){
		return(
			<div>
				<form>
					<div className="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Categories</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
					</div>
					<div className="form-group">
						<label for="exampleInputPassword">Content</label>
						<input type="text" className="form-control" id="exampleInputPassword" placeholder="Password"/>
					</div>
					<button  className="btn btn-primary">Save</button>
					<button className="btn btn-primary">Cancle</button>
				</form>
			</div>
		)
	}
}

export default PostNew;