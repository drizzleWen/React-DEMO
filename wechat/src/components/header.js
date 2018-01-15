import React, {
	Component
} from 'react';

import '../static/css/header.css';

import {
	Layout,
	Icon
} from 'antd';

import {
	Link
} from 'react-router-dom';

const {
	Header
} = Layout;


class HeaderWX extends Component {
	constructor(props) {
		super(props);
		this._goBack = this._goBack.bind(this);
	}

	_goBack() {
		if (window.history.length > 0) {
			window.history.go(-1);
		} else {
			window.location.href = '/login';
		}

	}

	render() {
		return (
			<Header onClick={this._goBack}>
				
					<Icon type="left" />
		
				 {
					this.props.name
				}
				
			</Header>
		)
	}

}


export default HeaderWX;