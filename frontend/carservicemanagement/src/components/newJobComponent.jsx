import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewJobComponent() {
	const URL = "http://localhost:8080/api/v1/jobs";

	const [data, setData] = useState({
		customerName: "",
		vehicleNo: "",
		serviceType: "",
		jobStatus: "",
		serviceFee: "",
	});
	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	function submitData(e) {
		e.preventDefault();
		const currentDateTime = new Date();

		const postObject = {
			createDate: currentDateTime.toISOString(),
			customerName: data.customerName,
			vehicleNo: data.vehicleNo,
			serviceType: data.serviceType,
			status: data.jobStatus,
			expFee: data.serviceFee,
		};
		console.log(postObject);
		axios.post(URL, postObject).then((response) => console.log(response));
		toast.success("New Job Created!!!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		setData({
			customerName: "",
			vehicleNo: "",
			serviceType: "",
			jobStatus: "",
			serviceFee: "",
		});
	}

	const [goToHome, setGoToHome] = useState(false);

	if (goToHome) {
		return <Navigate to="/" />;
	}

	return (
		<div>
			<h2 class="main-header">Add New Survice Job</h2>
			<form onSubmit={(e) => submitData(e)} class="was-validated">
				<div class="row">
					<div class="col">
						<div class="form-floating mb-3 mt-4">
							<input
								className="form-control"
								type="text"
								required
								placeholder="Customer Name"
								onChange={(e) => handle(e)}
								value={data.customerName}
								id="customerName"
								name="CustomerName"
							/>
							<label for="customerName">Customer Name </label>
						</div>
					</div>
					<div class="col">
						<div class="form-floating mb-3 mt-4">
							<input
								className="form-control"
								type="text"
								required
								placeholder="Vehicle Number"
								onChange={(e) => handle(e)}
								value={data.vehicleNo}
								id="vehicleNo"
								name="VehicleNo"
							/>
							<label for="vehicleNo">Vehicle Number</label>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col">
						<div class="form-floating mb-3 mt-4">
							<select
								className="form-control"
								placeholder="Service Type"
								required
								onChange={(e) => handle(e)}
								value={data.serviceType}
								id="serviceType"
								name="ServiceType"
							>
								<option value="" disabled></option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
							<label for="serviceType">Service Type</label>
						</div>
					</div>
					<div class="col">
						<div class="form-floating mb-3 mt-4">
							<select
								className="form-control"
								placeholder="Job Status"
								required
								onChange={(e) => handle(e)}
								value={data.jobStatus}
								id="jobStatus"
								name="JobStatus"
							>
								<option value="" disabled></option>
								<option value="Pending">Pending</option>
								<option value="Paymend Due">Payment Due</option>
								<option value="Completed">Completed</option>
							</select>
							<label for="jobStatus">Status</label>
						</div>
					</div>
					<div class="col">
						<div class="form-floating mb-3 mt-4">
							<input
								className="form-control"
								type="number"
								required
								placeholder="Survice Charge"
								onChange={(e) => handle(e)}
								value={data.serviceFee}
								id="serviceFee"
								name="SurviceCharge"
							/>
							<label for="serviceFee">Survice Charge</label>
						</div>
					</div>
				</div>
				<div class="button-container">
					<button type="submit" class="btn btn-success">
						Submit
					</button>
					<button
						onClick={() => {
							setGoToHome(true);
						}}
						class="btn btn-danger"
					>
						Cancel
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
}
