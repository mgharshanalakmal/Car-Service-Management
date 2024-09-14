import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpdateComponent() {
	const URL = "http://localhost:8080/api/v1/jobs/";
	const { id } = useParams();

	const [data, setData] = useState({
		createDate: "",
		customerName: "",
		vehicleNo: "",
		serviceType: "",
		jobStatus: "",
		serviceFee: "",
	});

	useEffect(() => {
		axios
			.get(URL + id)
			.then((res) => {
				setData({
					...data,
					jobCode: res.jobCode,
					createDate: res.data.createDate,
					customerName: res.data.customerName,
					vehicleNo: res.data.vehicleNo,
					serviceType: res.data.serviceType,
					jobStatus: res.data.status,
					serviceFee: res.data.expFee,
				});
			})
			.catch((err) => console.log(err));
	}, []);

	const [goToHome, setGoToHome] = useState(false);

	if (goToHome) {
		return <Navigate to="/" />;
	}

	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	function updateData(e) {
		e.preventDefault();

		const postObject = {
			jobCode: data.jobCode,
			createDate: data.createDate,
			customerName: data.customerName,
			vehicleNo: data.vehicleNo,
			serviceType: data.serviceType,
			status: data.jobStatus,
			expFee: data.serviceFee,
		};

		axios.put(URL + id, postObject).then(setGoToHome(true));
		toast("updated successfully!!!");
	}

	return (
		<div>
			<h2 class="main-header">Update Service Details</h2>
			<form onSubmit={(e) => updateData(e)}>
				<div class="row">
					<div class="col">
						<label for="customerName">Customer Name </label>
						<input
							type="text"
							className="form-control"
							id="customerName"
							placeholder={data.customerName}
							readOnly
						/>
					</div>
					<div class="col">
						<label for="vehicleNo">Vehicle Number</label>
						<input
							type="text"
							className="form-control"
							id="vehicleNo"
							placeholder={data.vehicleNo}
							readOnly
						/>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<label For="serviceType">Service Type</label>
						<select
							className="form-control"
							id="serviceType"
							value={data.serviceType}
							required
							onChange={(e) => handle(e)}
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div class="col">
						<label For="jobStatus">Job Status</label>
						<select
							className="form-control"
							id="jobStatus"
							value={data.jobStatus}
							required
							onChange={(e) => handle(e)}
						>
							<option value="Pending">Pending</option>
							<option value="Paymend Due">Payment Due</option>
							<option value="Completed">Completed</option>
						</select>
					</div>
					<div class="col">
						<label For="serviceFee">Survice Fee</label>
						<input
							type="number"
							className="form-control"
							id="serviceFee"
							defaultValue={data.serviceFee}
							placeholder={data.serviceFee}
							required
							onChange={(e) => handle(e)}
						/>
					</div>
				</div>
				<div class="button-container">
					<button type="submit" class="btn btn-success">
						Update
					</button>
					<button
						class="btn btn-danger"
						onClick={() => {
							setGoToHome(true);
						}}
					>
						Cancel
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
}
