import React, { useReducer } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Customflash from '../common/flashmessage/Customflash';
import { Link } from 'react-router-dom';
import './Adduser';
const initialState = {
	loading: false,
	message: '',
	flag: 0,
};
const reducer = (state, action) => {
	switch (action.operation) {
		case 'SUCCESS':
			return {
				loading: (state.loading = true),
				message: action.message,
				flag: action.flag,
			};
		case 'FAILURE':
			return {
				loading: (state.loading = true),
				message: action.operation.message,
				flag: action.operation.flag,
			};
		default:
			return state;
	}
};
const Adduser = () => {
	const [status, dispatch] = useReducer(reducer, initialState);
	const { register, errors, handleSubmit } = useForm();
	const onFormsubmit = (data) => {
		axios
			.post('http://localhost:3003/users', data)
			.then((result) =>
				dispatch({
					operation: 'SUCCESS',
					message: 'Added successfully',
					flag: 1,
				})
			)
			.catch(
				dispatch({ operation: 'FAILURE', message: 'Went Wrong', flag: 2 })
			);
	};
	return (
		<div className="container">
			{status.loading && status.message !== undefined ? (
				<Customflash msg={status.message} flag={status.flag} />
			) : null}
			<form onSubmit={handleSubmit(onFormsubmit)}>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="username">UserName</label>
						<input
							type="text"
							className="form-control"
							id="username"
							name="username"
							ref={register({ required: true, minLength: 3 })}
						/>
						{errors.username?.type === 'required' && (
							<small style={{ color: 'Red' }}>Please enter you username </small>
						)}
						{errors.username?.type === 'minLength' && (
							<small style={{ color: 'Red' }}>
								Your input must be larger then 2 characters
							</small>
						)}
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="fullname">Name</label>
						<input
							type="text"
							className="form-control"
							id="fullname"
							name="fullname"
							ref={register({ required: true })}
						/>
						{errors.fullname && (
							<small style={{ color: 'Red' }}>Please enter you fullname </small>
						)}
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							ref={register({
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								},
							})}
						/>
						{errors.email && (
							<small style={{ color: 'Red' }}>
								Please enter email address{' '}
							</small>
						)}
						{errors.email && errors.email.message}
					</div>
					<div className="form-group col-md-6">
						<label>Gender</label>
						<div
							className="form-control form-check form-check-inline"
							style={{ borderStyle: 'none' }}
						>
							<input
								className="cls-label form-check-input"
								type="radio"
								id="male"
								name="gender"
								value="Male"
								ref={register({ required: true })}
							/>
							<label className="cls-label" htmlFor="male">
								Male &nbsp;&nbsp;
							</label>
							<input
								className="form-check-input"
								type="radio"
								name="gender"
								id="female"
								value="Female"
								ref={register({ required: true })}
							/>
							<label className="cls-label" htmlFor="female">
								Female
							</label>
						</div>
						{errors.gender && (
							<small style={{ color: 'Red' }}>Please Select your gender </small>
						)}
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="mobile">Mobile</label>
						<input
							type="text"
							className="form-control"
							name="mobile"
							id="mobile"
							ref={register({ required: true })}
						/>
						{errors.mobile && (
							<small style={{ color: 'Red' }}>
								Please your 12 digit mobile number
							</small>
						)}
					</div>
					<div className="form-group col-md-6">
						<label>Education</label>
						<select className="form-control" name="educa" ref={register}>
							<option selected>Choose...</option>
							<option value="1">SSC</option>
							<option value="2">HSC</option>
							<option value="3">Graduate</option>
							<option value="4">Post Graduate</option>
						</select>
						{errors.educa && (
							<small style={{ color: 'Red' }}>
								Please chose your last higher education details
							</small>
						)}
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label>Hobbies</label>
						<div
							className="form-control form-check form-check-inline"
							style={{ borderStyle: 'none' }}
						>
							<input
								type="checkbox"
								className="form-check-inline"
								id="watch_mov"
								name="hobbies"
								value="Watching Movies"
								ref={register({ required: true })}
							/>
							<label htmlFor="watch_mov">Watching Movies &nbsp;&nbsp;</label>
							<input
								type="checkbox"
								className="form-check-inline"
								name="hobbies"
								id="playing_crick"
								value="Playing Cricket"
								ref={register({ required: true })}
							/>
							<label htmlFor="playing_crick">
								Playing Cricket &nbsp;&nbsp;
							</label>
							<input
								type="checkbox"
								className="form-check-inline"
								name="hobbies"
								id="reading_books"
								value="Reading Books"
								ref={register({ required: true })}
							/>
							<label htmlFor="reading_books">Reading Books &nbsp;&nbsp;</label>
							<input
								type="checkbox"
								className="form-check-inline"
								name="hobbies"
								id="others"
								value="Others"
								ref={register({ required: true })}
							/>
							<label htmlFor="others">Others</label>
						</div>
						{errors.hobbies && (
							<small style={{ color: 'Red' }}>
								Please select atleast your hobbies
							</small>
						)}
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-12">
						<label htmlFor="comment">Comment</label>
						<textarea
							className="form-control"
							rows="4"
							name="comment"
							id="comment"
							ref={register({ required: true })}
						></textarea>
						{errors.comment && (
							<small style={{ color: 'Red' }}>Please your comment </small>
						)}
					</div>
				</div>

				<div className="form-group">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="isagree"
							name="isagree"
							ref={register({ required: true })}
						/>
						<label htmlFor="isagree" className="form-check-label">
							Whatever information i have filled above that is true and i take
							the responsibility for the same
						</label>
					</div>
					{errors.isagree && (
						<small style={{ color: 'Red' }}>
							Please checked as agree with our term and conditions
						</small>
					)}
				</div>
				<button type="submit" className="btn btn-primary">
					Add User
				</button>
			</form>
		</div>
	);
};
export default Adduser;