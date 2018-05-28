import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ChatRoom extends Component {

	constructor(){
		super();
		this.state = {
			message:'',
			messages: [
				//{id:0, text:'text1'},
				//{id:1, text:'text2'},
				//{id:2, text:'text3'}
			]
		}

	}
	updateMessage(e){
		this.setState({message: e.target.value});
		console.log(this.state.message);
	}
	componentDidMount(){
		window.firebase.database().ref('messages/').on('value',snap =>{
			const currentmessages = snap.val();
			if (currentmessages !== null){
				this.setState({
					messages: currentmessages
				});
			}
		});
	}

	handleSubmit(e){
		e.preventDefault();
		const list = this.state.messages;
		const newMessage = {
			id: this.state.messages.length,
			text: this.state.message
		};
		//list.push(newMessage);
		//this.setState({messages: list});
		window.firebase.database().ref(`messages/${newMessage.id}`)
		.set(newMessage);
		this.setState({message: ''});
	}

	render(){

		const { messages } = this.state;
		const messagesList = messages.map(message => {
				return <li key={message.id}>{message.text}</li>
			});
		

		return(
		<div>
		<ul>
		{messagesList}
		</ul>
		<form onSubmit={this.handleSubmit.bind(this)}>
			<TextField
			type='text'
			value={this.state.messagesList}
			onChange={this.updateMessage.bind(this)}
			/>
			<Button type='submit' variant='Icon buttons'   color='primary'> Send </Button>
		</form>

		</div>

		)
	}
}

export default ChatRoom;