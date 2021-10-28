import {Box, ContainerCadastro, Ususarios,Links } from "./Cadastro.styled"

const Cadastro = () => {
	
	return (
		<ContainerCadastro>
			<Box container justifyContent="space-evenly">
				
				<Ususarios item xs={5}>
					<Links to="/cadastroUsu">
						<h2>Usuario</h2>
					</Links>
				</Ususarios>
				
				
				<Ususarios item xs={5}>
					<Links to="/cadastroOrg">
						<h2>Organização</h2>
					</Links>
				</Ususarios>
				
			</Box>
		</ContainerCadastro>
	)
}

export default Cadastro