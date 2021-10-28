import { Box, ContainerLogin, Form, Dados, CssTextField, CssInput, CssButton } from "./Login.styled"
import { Link } from "react-router-dom";
import { useState } from "react";
import { InputLabel, InputAdornment, FormControl, IconButton} from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//import { AiOutlineMail} from "react-icons/ai";

const Login = () => {

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
		<ContainerLogin>
			<Box>
				<h1>Login</h1>
			
			<Form onSubmit={handleValue}>
				<Dados>
					<CssTextField id="standard-basic" label="Email" variant="standard" />
						
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
					</Dados>
					<CssButton variant="contained" type="submit">Login</CssButton>
				</Form>
				<p>Não tem uma conta? <Link to="/cadastro">Crie uma</Link></p>
			</Box>
		</ContainerLogin>
	)
}

export default Login