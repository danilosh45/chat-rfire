import React, {Component} from 'react';
import ChatRoom from './components/ChatRoom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



class App extends Component{
	render() { 
		return(
			<div>
		       <AppBar position='static' color='default'>
		       <Toolbar>
				  <Typography type='title' color='inherit'>
				 
				 Sala de chat

				</Typography>
				</Toolbar>
			</AppBar>
			<ChatRoom/>
			</div>
		)
	}
}

export default App;