import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavBar = () => {
	const history = useHistory();
	const user = null;
	const handleLogin = () => {
		history.push("/auth");
	};
	return (
		<Navbar
			className="border-bottom border-bottom-1 border-success"
			style={{ height: "10%" }}
		>
			<Container>
				<Navbar.Brand href="/" className="text-uppercase text-success">
					<h3 className="">My Farm</h3>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					{user ? (
						<>
							<img
								src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
								className="rounded-circle shadow-4"
								style={{ width: "50px" }}
								alt="Avatar"
							/>
							<Navbar.Text className="mx-2">{user.result.name}</Navbar.Text>
							<Button variant="success" className="mx-2">
								Log out
							</Button>{" "}
						</>
					) : (
						<>
							<ButtonGroup>
								<Button variant="success" onClick={handleLogin}>
									Login
								</Button>{" "}
								<Button variant="success" className="mx-1">
									Sign up
								</Button>{" "}
							</ButtonGroup>
						</>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
