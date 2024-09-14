import React, { Component } from "react";

export default class HeaderComponent extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
				<div class="container-fluid">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link active" href="/">
								Car Service Management
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link"
								href="/new-job"
								style={{ fontSize: "18px" }}
							>
								New Job
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
