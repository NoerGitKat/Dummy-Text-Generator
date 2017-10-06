import React, { Component } from 'react';
import axios from 'axios';

import Output from './Output';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'all-meat',
			paras: 1,
			format: 'json'
		}

		this.getText = this.getText.bind(this);
	}

	componentWillMount() {
		this.getText();
	}

	componentDidMount() {
		console.log('React is running!');
	}

	//new method on class App
	getText() {
		axios.get(`https://baconipsum.com/api/?type=${this.state.type}&paras=${this.state.paras}`)
			.then(response => {
				this.setState({text: response.data[0]}, function() {
					console.log(this.state);
				})
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<p>This app is horrible!!!</p>
				<Output value={this.state.text}/>
			</div>
		)
	}
}

export default App;