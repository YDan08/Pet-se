import {Box, ContainerCadastro, Ususarios,Links } from "./Cadastro.styled"

const Cadastro = () => {
	
	return (
		<ContainerCadastro>
			<Box container justifyContent="space-evenly">
				
				<Ususarios item xs={5}>
					<Links to="/cadastroUsu">
						<img src="https://img2.gratispng.com/20180525/vjx/kisspng-computer-icons-user-profile-user-account-clip-art-5b07b23ad4dd52.9335900715272310348719.jpg" alt="" />
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