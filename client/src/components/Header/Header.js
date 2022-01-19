import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Header.css";

const Header = () => {
	return (
		<div className='header'>
			<div>
				<h1 style={{ marginLeft: "20px" }}> PairCode </h1>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "space-between",
					marginRight: "20px",
				}}
			>
				<a
					href='/'
					style={{
						fontSize: "30px",
						marginRight: "20px",
						marginTop: "15px",
						color: "#fff",
						textDecoration: "none",
					}}
				>
					Join Session
				</a>
				<a
					style={{
						fontSize: "40px",
						//  marginRight: "20px",
						marginTop: "15px",
						color: "#fff",
						textDecoration: "none",
					}}
					href='/'
				>
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

export default Header;
