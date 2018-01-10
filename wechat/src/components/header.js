import React, {
	Component
} from 'react';

import '../static/css/header.css';

import {
	Layout,
	Icon
} from 'antd';

const {
	Header
} = Layout;


class HeaderWX extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Header>
		<Icon type="left" /> {
			this.props.name
		}
			</Header>
		)
	}

}


export default HeaderWX;