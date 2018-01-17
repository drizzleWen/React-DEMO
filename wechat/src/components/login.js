import React, {
	Component
} from 'react';

import {
	Button,
	Input,
	Icon,
	Row,
	Col,
	Avatar,
	Modal
} from 'antd';

import '../static/js/rem';
import '../static/css/login.css';

const confirm = Modal.confirm;

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
			TimeFlage: true,
			title: '',
			content: ''
		}
	}

	_HandChangeUsername(e) {
		let userName = e.target.value;
		if (!isNaN(userName)) {
			this.setState({
				userName: userName
			})
		}
	}

	_HandleBlurUserName(e) {
		let username = e.target.value;
		const reg = /^(0|86|17951)?[1][3,4,5,7,8][0-9]{9}$/;
		if (!reg.test(username)) {
			this.setState({
				title: '请输入手机号码',
				content: '您输入的手机号码有点问题哦'
			}, () => this._InfoError())
		} else {
			this.setState({
				title: '',
				content: ''
			})
		}
	}

	_HandChangeCompany(e) {
		let CompanyName = e.target.value;
		this.setState({
			CompanyName: CompanyName
		});
	}

	_HandChangeCode(e) {
		let CodeName = e.target.value;
		if (!isNaN(CodeName)) {
			this.setState({
				CodeName: CodeName
			})
		}

	}

	_onSubmit() {
		if (!this.state.userName) {
			this.setState({
				title: '请输入手机号码',
				content: '您还没有输入手机号哦'
			}, () => this._InfoError());
		} else if (!this.state.CompanyName) {
			this.setState({
				title: '请输入公司名',
				content: '您还没有输入公司名哦'
			}, () => this._InfoError());
		} else if (!this.state.CodeName) {
			this.setState({
				title: '请输入验证码',
				content: '您还没有输入验证码哦'
			}, () => this._InfoError());
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

	_InfoError() {
		Modal.error({
			title: this.state.title,
			content: this.state.content
		})
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
								onBlur={
									this._HandleBlurUserName.bind(this)
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