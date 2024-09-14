import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JobListFunc() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8080/api/v1/jobs")
			.then((res) => setData(res.data));
	}, []);

	const [goToAdd, setGoToAdd] = useState(false);

	if (goToAdd) {
		return <Navigate to="/new-job" />;
	}

	function deleteJob(jobcode) {
		axios
			.delete("http://localhost:8080/api/v1/jobs/" + jobcode)
			.then(() => {
				alert(`${jobcode} entry has deleted!!!`);
				setData((prevData) =>
					prevData.filter((job) => job.jobCode !== jobcode)
				);
			});
		toast.error("Job Deleted!!!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	return (
		<div>
			<h2 class="main-header">Job List</h2>

			<button
				class="btn btn-primary"
				onClick={() => {
					setGoToAdd(true);
				}}
			>
				Add Job +
			</button>
			<div class="container mt-3">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Job Creation Date</th>
							<th>Customer Name</th>
							<th>Vehicle Number</th>
							<th>Service Type</th>
							<th>Status</th>
							<th>Expected Fee</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.map((job) => (
							<tr key={job.jobCode}>
								<td>{job.createDate}</td>
								<td>{job.customerName}</td>
								<td>{job.vehicleNo}</td>
								<td>{job.serviceType}</td>
								<td>{job.status}</td>
								<td>{job.expFee}</td>
								<td class="button-container">
									<Link
										class="btn btn-success"
										to={`/update/${job.jobCode}`}
									>
										Update
									</Link>
									<button
										class="btn btn-danger"
										onClick={() => deleteJob(job.jobCode)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<ToastContainer />
		</div>
	);
}
