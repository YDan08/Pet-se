import { Grid } from '@mui/material'
import styled from 'styled-components'
import { Link } from "react-router-dom"

export const ContainerCadastro = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Box = styled(Grid)`
	width: 60%;
	height: 50%;
`

export const Ususarios = styled(Grid)`
	border: 1px solid;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Links = styled(Link)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`

