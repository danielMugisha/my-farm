import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { TiMediaFastForward } from "react-icons/ti";
import { useHistory } from "react-router-dom";

const Welcome = () => {
	let history = useHistory();

	const start = (e) => {
		history.push("/general");
	};

	return (
		<div className="h-50 border border-success w-50 p-5 rounded">
			<div className="d-flex h-100 p-5 flex-column align-items-center">
				<div className="d-flex flex-column align-items-center text-center">
					<h4>Welcome to My Farm</h4>
					<p className="font-italic font-weight-bolder">
						<small>Your Agro-Business Companion</small>
					</p>
				</div>
				<div className="mt-5">
					<ButtonGroup aria-label="Basic example">
						<Button variant="success" size="lg" onClick={start}>
							Let's Get Started <TiMediaFastForward size={30} />
						</Button>{" "}
					</ButtonGroup>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
