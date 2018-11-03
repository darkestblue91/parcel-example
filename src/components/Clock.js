import React, { Component } from 'react';

class Clock extends Component {
	state = {
		date: new Date()
	}

	tick() {
		this.setState({ date: new Date() });
	}

	componentDidMount() {
		this.timer = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const { date } = this.state;

		return (
			<div>{ date.toLocaleTimeString() }</div>
		);
	}
}

export default Clock;
