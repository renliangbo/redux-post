import React ,{Component}from'react';
import {reduxForm,Field ,Fields} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createPost} from '../actions';
class PostNew extends Component {
	submit(values){
		console.log(values);
	}
	render(){

		const renderField=({input,label,placeholder,type})=>{
			return (
				<div className="form-group">
					<label for="exampleInputEmail1">{label}</label>
					<input 
						className="form-control"
						{...input}
						type={type}
						placeholder={placeholder}
							/>
				</div>
			)
		};

		const {handleSubmit}=this.props;

		return(
			<div>
				<form onSubmit={handleSubmit(this.submit)}>
					<Field
						name="title"
						label="title"
						component={renderField}
						type="text"
						placeholder="Enter title"
					/>

					<Field
						name="categories"
						label="categories"
						component={renderField}
						type="text"
						placeholder="Enter categories"
					/>

					<Field
						name="Content"
						label="content"
						component={renderField}
						type="text"
						placeholder="Enter content"
					/>
					
					<button  type="submit" className="btn btn-primary">Save</button>
					<div className="btn btn-primary">Cancle</div>
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


// import React ,{Component}from'react';
// import {reduxForm,Field ,Fields} from 'redux-form';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {createPost} from '../actions';

// const required = value => value ? undefined : 'Required'
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined
// const minValue18 = minValue(18)
// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//   'Invalid email address' : undefined
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//   'Really? You still use AOL for your email?' : undefined

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type}/>
//       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

// var PostNew = (props) => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit(props.createPost)}>
//       <Field name="title" type="text"
//         component={renderField} label="Username"
//         validate={[ required, maxLength15 ]}
//       />
//       <div>
//         <button type="submit" disabled={submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </form>
//   )
// }

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({createPost},dispatch);
// };

// PostNew=connect(null,mapDispatchToProps)(PostNew)

// export default reduxForm({
// 	form:'PostsNewForm'
// })(PostNew);

