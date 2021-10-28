import React from "react";
import { Button, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { FaBars, FaHome, FaSearch } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { Bar, Links, Options } from "./Menu.styled";

const Menu = () => {

	const listar = ()=>{
		var bar = document.querySelector('ul')
		bar.classList.toggle('active')
	}


	return (
	<Box sx={{ flexGrow: 1 }}>
      <Bar position="fixed">
        <Toolbar>
					<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
						sx={{ mr: 2 }}
						onClick={listar}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Links to="/"> Pet-se </Links>
					</Typography>
					<Links to="/login">
          <Button color="inherit">Login</Button>
					</Links>
        </Toolbar>
			</Bar>
			<Options>
				<ul>
					<li>
						<Links to="/"><FaHome/>	Home</Links>
					</li>
					<li>
						<Links to="/animais"><FaSearch/>	Animais </Links>
					</li>
					<li>
						<Links to="/sobre"><GoInfo/>	Sobre	</Links>
					</li>
				</ul>
			</Options>
    </Box>
	);
};

export default Menu;
