import { Link } from "react-router-dom";
import { Box, ContainerCadastro, Form, Dados, CssTextField, CssInput, CssButton } from "./CadastroUsu.styled"
import { useState } from "react";
import { InputLabel, InputAdornment, FormControl, IconButton} from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CadastroUsu = () => {

		const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });


	const handleValue = (values) => {
	}

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


	return (
			<ContainerCadastro>
			<Box>
				<h1>Cadastro de usuario:</h1>
			
			<Form onSubmit={handleValue}>
				<Dados>
					<CssTextField id="standard-basic" label="Nome Completo" type="text" name="nome" variant="standard" />
						<CssTextField id="standard-basic" label="Email" type="email" name="email" variant="standard" />
						<FormControl variant="standard">
         		 <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          		<CssInput
            		id="standard-adornment-password"
           			type={values.showPassword ? 'text' : 'password'}
            		value={values.password}
            		onChange={handleChange('password')}
            		endAdornment={
              	<InputAdornment position="end">
                	<IconButton
                  	aria-label="toggle password visibility"
                  	onClick={handleClickShowPassword}
                  	onMouseDown={handleMouseDownPassword}
                	>
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            		}
          		/>
					</FormControl>
						<CssTextField id="standard-basic" label="CPF" type="text" name="cpf" variant="standard" />
						<CssTextField id="standard-basic" label="Data de nascimento" type="date" name="nascimento" variant="standard" InputLabelProps={{
            shrink: true,
          }} />
						<CssTextField id="standard-basic" label="Telefone" type="number" name="telefone" variant="standard" />
					</Dados>
					<CssButton variant="contained" type="submit">Login</CssButton>
				</Form>
				<p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
			</Box>
		</ContainerCadastro>
	)
}

export default CadastroUsu