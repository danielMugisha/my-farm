import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useHistory } from "react-router-dom";
import {
	ButtonGroup,
	InputGroup,
	FormControl,
	Form,
	Button,
	Table,
} from "react-bootstrap";
import NumberFormat from "react-number-format";

const GeneralInfo = () => {
	const history = useHistory();
	const [step, setStep] = useState(1);
	const [birds, setBirds] = useState(0);
	var investmentPlan = {
		batch: parseInt(birds),
		fixedAssets: {
			litter: {
				quantity: 0.1 * parseInt(birds),
				unitPrice: 400,
				totalCost: parseInt(birds) * 0.1 * 400,
			},
			drinkers: {
				quantity: 0.04 * parseInt(birds),
				unityPrice: 8000,
				totalCost: parseInt(birds) * 0.04 * 8000,
			},
			feeders: {
				quantity: 20,
				unityPrice: 5600,
				totalCost: 20 * 5600,
			},
			weighingScaleSmall: {
				quantity: 1,
				unityPrice: 6500,
				totalCost: 1 * 6500,
			},
			weighingScaleBig: {
				quantity: 1,
				unityPrice: 12000,
				totalCost: 1 * 12000,
			},
			Bucket: {
				quantity: parseInt(birds) * 0.03,
				unityPrice: 4500,
				totalCost: parseInt(birds) * 0.03 * 4500,
			},
			shavel: {
				quantity: 2,
				unityPrice: 5000,
				totalCost: 2 * 5000,
			},
			thermometer: {
				quantity: 0,
				unityPrice: 4200,
				totalCost: 0 * 4200,
			},
			measuringCylinder: {
				quantity: 2,
				unityPrice: 600,
				totalCost: 2 * 600,
			},
			crates: {
				quantity: 100,
				unityPrice: 4500,
				totalCost: 100 * 4500,
			},
			heatLamp: {
				quantity: 1,
				unityPrice: 25000,
				totalCost: 1 * 25000,
			},
			footBath: {
				quantity: 2,
				unityPrice: 3000,
				totalCost: 2 * 3000,
			},
		},
		currentAssets: {
			dayOldChicks: {
				quantity: parseInt(birds),
				unityPrice: 750,
				totalCost: parseInt(birds) * 750,
			},
			starterFeed: {
				quantity: parseInt(birds) * 2.8,
				unityPrice: 470,
				totalCost: parseInt(birds) * 2.8 * 470,
			},
			finisherFeed: {
				quantity: parseInt(birds) * 2.6,
				unityPrice: 455,
				totalCost: parseInt(birds) * 2.6 * 455,
			},
		},
		TotalExpense: 0,
		averageWeight: parseInt(birds) * 2.2,
		totalCarcassWeight: parseInt(birds) * 2.2 * 0.75,
		TotalIncome: parseInt(birds) * 2.2 * 0.75 * 3000,
	};
	const [profit, setProfit] = useState(0);
	const [income, setIncome] = useState(0);
	const [expenses, setExpenses] = useState(0);
	const [showPlan, setShowPlan] = useState(false);

	const handleChange = (birds) => {
		setBirds(birds);
	};

	const handleNext = () => {
		if (step < 2) {
			setStep(2);
		} else {
			setProfit(income - expenses);
			setShowPlan(true);
		}
	};

	const calcurateExpenses = () => {
		var total = 0;
		for (var key in investmentPlan.fixedAssets) {
			total = total + investmentPlan.fixedAssets[key].totalCost;
		}
		for (var key in investmentPlan.currentAssets) {
			total = total + investmentPlan.currentAssets[key].totalCost;
		}
		setIncome(investmentPlan.TotalIncome);
		setExpenses(total);
		investmentPlan.TotalExpense = expenses;
	};
	const handleViewDetails = () => {
		const location = {
			pathname: `/check`,
			state: { investmentPlan: investmentPlan },
		};

		history.push(location);
	};
	useEffect(() => {
		console.log("Birds:", birds);
		calcurateExpenses();
		console.log("Investment Plan:", investmentPlan);
	}, [birds]);

	return (
		<div className="h-50 border border-success w-50 p-5 rounded">
			<div className="d-flex h-100  flex-column align-items-center">
				{showPlan ? (
					<>
						<div className="d-flex flex-column align-items-center text-center">
							<h4>
								For your chicken farming business of {birds} chicks we estimate
								the following in 45 days:
							</h4>
						</div>
						<Table striped bordered hover>
							<tbody>
								<tr>
									<td>Total Investment</td>
									<td>
										<NumberFormat
											thousandsGroupStyle="thousand"
											value={expenses}
											prefix="Rwf"
											displayType="text"
											thousandSeparator={true}
										/>
									</td>
								</tr>
								<tr>
									<td>Total income</td>
									<td>
										<NumberFormat
											thousandsGroupStyle="thousand"
											value={income}
											prefix="Rwf"
											displayType="text"
											thousandSeparator={true}
										/>
									</td>
								</tr>
								<tr>
									<td>Profit</td>
									<td>
										<NumberFormat
											thousandsGroupStyle="thousand"
											value={profit}
											prefix="Rwf"
											displayType="text"
											thousandSeparator={true}
										/>
									</td>
								</tr>
							</tbody>
						</Table>
						<div>
							<ButtonGroup aria-label="Basic example">
								<Button variant="success" onClick={handleViewDetails}>
									View Detailed Investment Plan and Daily Activities Guide
								</Button>{" "}
							</ButtonGroup>
						</div>
					</>
				) : (
					<>
						{step == 1 ? (
							<Step1 />
						) : (
							<Step2 handleChange={handleChange} birds={birds} />
						)}
						<div className="mt-5">
							<ButtonGroup aria-label="Basic example">
								<Button variant="success" onClick={handleNext}>
									{step == 1 ? <>Next</> : <>View investment plan summary</>}
								</Button>{" "}
							</ButtonGroup>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default GeneralInfo;

const Step1 = () => {
	return (
		<>
			<div className="d-flex flex-column align-items-center text-center">
				<h4>What type of agro-business are you planning to do?</h4>
				<p className="font-italic font-weight-bolder">
					<small>Your Agro-Business Companion</small>
				</p>
				<Form.Group className="mb-3">
					<Form.Select>
						<option>Chicken Farming</option>
						<option>Cattle keeping</option>
					</Form.Select>
				</Form.Group>
			</div>
		</>
	);
};

const Step2 = (props) => {
	const handleChange = (e) => {
		props.handleChange(e.target.value);
		e.preventDefault();
	};
	return (
		<>
			<div className="d-flex flex-column align-items-center text-center">
				<h4>How many birds are you planning to start with?</h4>
				<p className="font-italic font-weight-bolder">
					<small>Your Agro-Business Companion</small>
				</p>
				<div>
					<InputGroup size="lg">
						<FormControl
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							type="number"
							min={0}
							value={props.birds}
							onChange={handleChange}
						/>
					</InputGroup>
				</div>
			</div>
		</>
	);
};
