import { Container, Info, ContainerInfo, Initial } from "./Home.styled"
import { FaDog } from "react-icons/fa"
import { GrOrganization } from "react-icons/gr"
import { AiOutlineContainer } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import axios from "axios"
import { useState, useEffect } from "react"

const Home = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		async function BuscarUsu() {
			const result = await axios.get("http://localhost:8080")
			if (!result.data) {
				alert("não existem usuarios")
				return
			}
			setUsers(result.data)
		}
		BuscarUsu()
	}, [])

	return (
		<Container>
			<Initial>
				<h1>Para uma vida mais feliz, Pet-se!</h1>
			</Initial>
			<ContainerInfo container justifyContent='space-evenly'>
				<Info item xs={12} md={5} lg={3}>
					<FaDog className='icon' />
					<h4>Animais:</h4>
					<p>1000+</p>
				</Info>
				<Info item xs={12} md={5} lg={3}>
					<GrOrganization />
					<h4>Organizações:</h4>
					<p>40+</p>
				</Info>
				<Info item xs={12} md={5} lg={3}>
					<AiOutlineContainer />
					<h4>Adoções:</h4>
					<p>500+</p>
				</Info>
				<Info className='last' item xs={12} md={5} lg={3}>
					<GoLocation />
					<h4>Estados:</h4>
					<p>20</p>
				</Info>
			</ContainerInfo>

			<h1>Buscar usuarios:</h1>
			{users.map(users => (
				<h4>{users.nome}</h4>
			))}
		</Container>
	)
}

export default Home
