import styled from 'styled-components'
import { TextField, Input,Button } from '@mui/material'

export const ContainerCadastro = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;	
	align-items: center;
`

export const Box = styled.div`
	background-color: #ffffffb0;
	width: 30%;
	height: 60%;
	padding: 24px;
	border-radius: 16px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	h1{
		color: #c08009;
	}
`

export const Form = styled.form`
	width: 100%;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-evenly ;
`
export const Dados = styled.div`
 	display: flex;
	flex-direction: column;
	height: 60%;
	justify-content: space-around;
`

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'orange',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'orange',
  }
});

export const CssInput = styled(Input)({
	'& label.Mui-focused': {
    color: 'orange',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'orange',
  }
})

export const CssButton = styled(Button)`
	background-color: orange;
	:hover{
		background-color: black;
	}
`