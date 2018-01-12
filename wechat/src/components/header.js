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
	}

	render() {
		return (
			<Header>
				<Link to='/login'>
					<Icon type="left" />
				</Link>
				 {
					this.props.name
				}
				
			</Header>
		)
	}

}


export default HeaderWX;