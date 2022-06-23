import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const Auth = () => {
	return (
		<div className="h-50 border border-success w-50 p-5 rounded">
			<div className="d-flex h-100  flex-column align-items-center">
				<div className="d-flex flex-column align-items-center ">
					<div className="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<ButtonGroup aria-label="Basic example" className="mt-3">
						<Button className="btn btn-primary" variant="success">
							Login
						</Button>{" "}
					</ButtonGroup>
				</div>
			</div>
		</div>
	);
};

export default Auth;
