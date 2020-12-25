import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					User
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" exact to="/AddUser">
								Add User
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" exact to="/">
								List User
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
export default Navigation;
