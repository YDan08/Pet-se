import styled from "styled-components";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

export const Bar = styled(AppBar)`
	background-color: orange;
`
export const Links = styled(Link)`
	text-decoration: none;
	color: white;
`

export const Options = styled.div`
	ul{
	display: flex;
	position: fixed;
	top: 6vh;
	left: 0;
	width: 15vw;
	height: 94vh;
	background-color: orange;
	transform: translateX(-100%);
	transition: transform 0.3s ease-in;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	li{
		list-style: none;
	}
	}
	ul.active{
		transform: translateX(0);
	}
`