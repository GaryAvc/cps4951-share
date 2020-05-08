import React, { Component } from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleLogin(event) {
		this.toggleModal();
		this.props.loginUser({
			username: this.username.value,
			password: this.password.value,
		});
		event.preventDefault();
	}

	handleGoogleLogin(event) {
		this.toggleModal();
		this.props.googleLogin();
		event.preventDefault();
	}

	handleLogout() {
		this.props.logoutUser();
	}

	render() {
		return (
			<React.Fragment>
				<Navbar dark expand="md" fixed="top">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="/">
							<img
								src="assets/images/kean2.gif"
								height="90"
								width="300"
								alt="Kean University"
							/>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fa-lg"></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/aboutus">
										<span className="fa fa-info fa-lg"></span> About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/menu">
										<span className="fa fa-list fa-lg"></span> Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/favorites">
										<span className="fa fa-heart fa-lg"></span> My Favorites
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contactus">
										<span className="fa fa-address-card fa-lg"></span> Contact
										Us
									</NavLink>
								</NavItem>
							</Nav>
							<Nav className="ml-auto" navbar>
								<NavItem>
									{!this.props.auth.isAuthenticated ? (
										<Button color="success" onClick={this.toggleModal}>
											<span className="fa fa-sign-in fa-lg"></span> Login
											{this.props.auth.isFetching ? (
												<span className="fa fa-spinner fa-pulse fa-fw"></span>
											) : null}
										</Button>
									) : (
										<div>
											<div className="navbar-text mr-3">
												{this.props.auth.user.email}
											</div>
											<Button color="success" onClick={this.handleLogout}>
												<span className="fa fa-sign-out fa-lg"></span> Logout
												{this.props.auth.isFetching ? (
													<span className="fa fa-spinner fa-pulse fa-fw"></span>
												) : null}
											</Button>
										</div>
									)}
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				{/* <Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Kean University</h1>
								<p>
									a public university in Union and Hillside, New Jersey. Kean
									University is best known for its programs in the humanities
									and social sciences and in education, graduating the most
									teachers in the state of New Jersey annually.
								</p>
							</div>
						</div>
					</div>
				</Jumbotron> */}
				{/* added info */}
				<div id="home" className="landing">
					<div className="home-wrap">
						<div className="home-inner"></div>
					</div>
				</div>

				<div className="caption text-left">
					<h1>Kean University</h1>
					<p>a public university in Union and Hillside, New Jersey. Kean</p>
					<p>University is best known for its programs in the humanities and</p>
					<p>
						social sciences and in education, graduating the most teachers in
					</p>
					<p>the state of New Jersey annually.</p>
				</div>
				{/* added info */}
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor="username">Email</Label>
								<Input
									type="text"
									id="username"
									name="username"
									innerRef={(input) => (this.username = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input
									type="password"
									id="password"
									name="password"
									innerRef={(input) => (this.password = input)}
								/>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type="checkbox"
										name="remember"
										innerRef={(input) => (this.remember = input)}
									/>
									Remember me
								</Label>
							</FormGroup>
							<Button type="submit" value="submit" color="primary">
								Login
							</Button>
						</Form>
						<p></p>
						<Button color="danger" onClick={this.handleGoogleLogin}>
							<span className="fa fa-google fa-lg"></span> Login with Google
						</Button>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Header;
