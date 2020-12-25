import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Listuser = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:3003/users')
			.then((result) => setUsers(result.data))
			.catch((error) => console.log(error));
	}, []);
	const strTable =
		users.length > 0 ? (
			users.map((user, index) => {
				return (
					<tr key={index}>
						<td>{user.id}</td>
						<td>{user.username}</td>
						<td>{user.fullname}</td>
						<td>{user.email}</td>
						<td>{user.gender}</td>
						<td>{user.mobile}</td>
						<td>{user.educa}</td>
						<td>{user.hobbies.join(',')}</td>
						<td>{user.comment}</td>
						<td>
							<Link
								type="button"
								className="btn btn-info mr-2"
								to={`/user/view/${user.id}`}
							>
								View
							</Link>
							<Link
								type="button"
								className="btn btn-primary mr-2"
								to={`/user/edit/${user.id}`}
							>
								Edit
							</Link>
							<button type="button" className="btn btn-danger mr-2">
								Delete
							</button>
						</td>
					</tr>
				);
			})
		) : (
			<tr>
				<td colSpan="10">No records found</td>
			</tr>
		);
	return (
		<div className="container">
			<table className="table table-bordered">
				<thead className="thead-dark">
					<tr>
						<th>#</th>
						<th>UserName</th>
						<th>Name</th>
						<th>Email</th>
						<th>Gender</th>
						<th>Mobile</th>
						<th>Education</th>
						<th>Hobbies</th>
						<th>Comment</th>
						<th>Operation</th>
					</tr>
				</thead>
				<tbody>{strTable}</tbody>
			</table>
		</div>
	);
};
export default Listuser;