import React, {
	Component
} from 'react';

import {
	Button,
	Input,
	Icon,
	Row,
	Col,
	Avatar
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
			CompanyName: '',
			CodeName: '',
			Time: '60',
			TimeFlage: true

		}
	}

	_HandChangeUsername(e) {
		let userName = e.target.value;
		this.setState({
			userName: userName
		});
	}

	_HandChangeCompany(e) {
		let CompanyName = e.target.value;
		this.setState({
			CompanyName: CompanyName
		});
	}

	_HandChangeCode(e) {
		let CodeName = e.target.value;
		this.setState({
			CodeName: CodeName
		});
	}

	_onSubmit() {
		if (!this.state.userName) {
			alert("请填写手机号")
		} else if (!this.state.CompanyName) {
			alert("请填写公司名")
		} else if (!this.state.CodeName) {
			alert("请填写验证码")
		} else {
			window.location.href = '/'
		}

	}
	_HandleClick(e) {
		if (this.state.TimeFlage) {
			this.timer = setInterval((e) => {
				let count = this.state.Time;
				this.state.TimeFlage = false;
				count -= 1;
				if (count < 1) {
					this.setState({
						TimeFlage: true
					})
					count = 60;
					clearInterval(this.timer);
				}
				this.setState({
					Time: count
				});
			}, 1000)

		}
	}
	render() {
		const {
			userName,
			CompanyName,
			CodeName
		} = this.state;
		const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
		const text = this.state.TimeFlage ? '获取验证码' :
			this.state.Time + '秒后重发'
		return (
			<div className="login">
			<Row>
				<Col span={18} offset={3}>
				 	<div className="userImg" style={styles.userImg}>
				 		<Avatar
		src = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		shape = "square"
		className = "memberImg"
							/>
				 	</div>
				 	<div className="loginFrom">
				 		<ul>
				 			<li className="userMobile">
				 				<Input placeholder="请输入手机号码"
				 				addonBefore="手机号"
				 				maxLength="11"
				 				value={userName}
				 				suffix={this.suffix}
								onChange = {
									this._HandChangeUsername.bind(this)
								}
				 				ref={node=>this.userNameInput=node}
				 				/>
				 			</li>
				 			<li className="userCompany">
				 				<Input
				 				placeholder="请输入您公司的全称"
				 				addonBefore="公司名"
					 			onChange = {
										this._HandChangeCompany.bind(this)
									}
				 				value={CompanyName}
				 				/>
				 			</li>
				 			<li className="authCode">
								<Input
								placeholder="请输入短信验证码"
								addonBefore="验证码"
								maxLength="4"
								onChange = {
									this._HandChangeCode.bind(this)
								}
								value={CodeName}
								/>
								<Button style={styles.codeBth}
								onClick={this._HandleClick.bind(this)}
								>{text}</Button>
				 			</li>
				 		</ul>
				 		<Button className="submitBtn" onClick={this._onSubmit.bind(this)}>注册并登录</Button>
				 	</div>
				 	</Col>
			 	</Row>	
			</div>
		)
	}
}

export default Login;