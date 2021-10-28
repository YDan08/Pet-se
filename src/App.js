import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Menu from './components/Header/Menu';
import Cadastro from './screens/Cadastro/Cadastro';
import CadastroUsu from './screens/CadastroUsu/CadastroUsu';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';

function App() {
	return (
		<BrowserRouter>
			<Menu/>
				<Switch>
					<Route path="/" exact>
						<Home/>
					</Route>
					<Route path="/login">
						<Login/>
					</Route>
					<Route path="/cadastro">
						<Cadastro/>
					</Route>
					<Route path="/cadastroUsu">
						<CadastroUsu/>
					</Route>
				</Switch>
			</BrowserRouter>
	);
}

export default App;
