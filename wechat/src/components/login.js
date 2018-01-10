import React, {
	Component
} from 'react';

import {
	Button,
	Input,
	Icon,
	Row,
	Col
} from 'antd';

import '../static/js/rem';
import '../static/css/login.css';

const styles = {
	userImg: {
		width: '1.4rem',
		height: '1.4rem',
		margin: '1.4rem auto',
		border: '1px solid #ccc'
	},
	authCode: {
		"position": "relative"
	},
	codeBth: {
		"position": "absolute",
		"right": "1px",
		"zIndex": "2"
	}
}
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		}
	}

	onChangeUserName = (e) => {
		this.setState({
			userName: ''
		})
	}
	render() {
		const {
			userName
		} = this.state;
		const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
		return (
			<div className="login">
			<Row>
				<Col span={18} offset={3}>
				 	<div className="userImg" style={styles.userImg}>
				 		<img src='../static/images/favicon.ico' />
				 	</div>
				 	<div className="loginFrom">
				 		<ul>
				 			<li className="userMobile">
				 				<Input placeholder="请输入手机号码"
				 				addonBefore="手机号"
				 				maxLength="11"
				 				value={userName}
				 				suffix={this.suffix}
				 				onChange={this.onChangeUserName}
				 				ref={node=>this.userNameInput=node}
				 				/>
				 			</li>
				 			<li className="userCompany">
				 				<Input
				 				placeholder="请输入您公司的全称"
				 				addonBefore="公司名"
				 				/>
				 			</li>
				 			<li className="authCode">
								<Input
								placeholder="请输入短信验证码"
								addonBefore="验证码"
								maxLength="4"
								/>
								<Button style={styles.codeBth}>获取验证码</Button>
				 			</li>
				 		</ul>
				 		<Button className="submitBtn">注册并登录</Button>
				 	</div>
				 	</Col>
			 	</Row>	
			</div>
		)
	}
}

export default Login;