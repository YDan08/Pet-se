import { Link } from "react-router-dom"
import axios from "axios"
import {
	Box,
	ContainerCadastro,
	Form,
	Dados,
	CssTextField,
	CssInput,
	CssButton,
} from "./CadastroUsu.styled"
import { useState } from "react"
import { InputLabel, InputAdornment, FormControl, IconButton } from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const CadastroUsu = () => {
	const [values, setValues] = useState({
		nome: "",
		email: "",
		cpf: "",
		dtNascimento: null,
		telefone: null,
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	})

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		})
	}

	const handleMouseDownPassword = event => {
		event.preventDefault()
	}

	async function onSubmit() {
		await axios.post("http://localhost:8080/cadastroUsu", {
			nome: values.nome,
			email: values.email,
			senha: values.password,
			cpf: values.cpf,
			dtNascimento: values.dtNascimento,
			telefone: values.telefone,
		})
	}
	return (
		<ContainerCadastro>
			<Box>
				<h1>Cadastro de usuario:</h1>

				<Form onSubmit={onSubmit}>
					<Dados>
						<CssTextField
							label='Nome Completo'
							type='text'
							name='nome'
							variant='standard'
							onChange={handleChange("nome")}
						/>
						<CssTextField
							label='Email'
							type='email'
							name='email'
							variant='standard'
							onChange={handleChange("email")}
						/>
						<FormControl variant='standard'>
							<InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
							<CssInput
								id='standard-adornment-password'
								type={values.showPassword ? "text" : "password"}
								name='senha'
								value={values.password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<CssTextField
							label='CPF'
							type='text'
							name='cpf'
							variant='standard'
							onChange={handleChange("cpf")}
						/>
						<CssTextField
							label='Data de nascimento'
							type='date'
							name='nascimento'
							variant='standard'
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChange("dtNascimento")}
						/>
						<CssTextField
							label='Telefone'
							type='number'
							name='telefone'
							variant='standard'
							onChange={handleChange("telefone")}
						/>
					</Dados>
					<CssButton variant='contained' type='submit'>
						Criar conta
					</CssButton>
				</Form>
				<p>
					Já tem uma conta? <Link to='/login'>Faça login</Link>
				</p>
			</Box>
		</ContainerCadastro>
	)
}

export default CadastroUsu
