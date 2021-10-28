import styled from 'styled-components'
import { Grid } from '@mui/material'

export const Initial = styled.div`
	width: 100vw;
	background-image: url('https://s.zst.com.br/cms-assets/2020/12/presente-de-natal-para-cachorro-e-gato-2-.png');
	background-size: cover;
	background-position: center;
	height: 80vh;
	display: flex;
	border-bottom: solid 1px;
	h1{
		width: 40%;
		text-align: left;
		margin-left: 6%;
		margin-top: 10%;
		color: white;
		text-shadow: 2px 2px black;
		font-size: 5rem;
	}
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ContainerInfo = styled(Grid)`
 width: 60%;
 border: 1px solid;
 border-radius: 18px;
 margin-top: 20px;
 .last{
	 border: none;
 }
 @media (max-width: 1200px){
	border: none;
	.last{
		border: 1px solid;
		border-radius: 8px;
	}
 }
`

export const Info = styled(Grid)`
	display: flex;
	border-right: 1px solid;
	padding: 20px;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	.icon{
	 width: 50%;
 }
	@media (max-width: 1200px){
		border: 1px solid;
		border-radius: 8px;
		margin-bottom: 20px;
	}
`