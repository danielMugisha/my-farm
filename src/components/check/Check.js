import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Check = () => {
	const history = useHistory();
	const handleLogin = () => {
		history.push("/auth");
	};
	return (
		<>
			<div className="h-50 border border-success w-50 p-5 rounded">
				<div className="d-flex h-100  flex-column align-items-center">
					<div className="d-flex flex-column align-items-center text-center">
						<h4>
							You need to have an active account to access the detailed plan and
							daily guide
						</h4>
					</div>
					<div className="mt-5">
						<ButtonGroup>
							<Button variant="success" onClick={handleLogin}>
								Login
							</Button>{" "}
							<Button variant="success" className="mx-1">
								Sign up
							</Button>{" "}
						</ButtonGroup>
					</div>
				</div>
			</div>
		</>
	);
};

export default Check;
