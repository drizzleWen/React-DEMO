import React, {
	Component
} from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import '../static/js/rem';
import '../static/css/home.css';
import HeaderWX from './header.js';
import Login from './login.js';
import Personage from './personage.js';
import {
	Layout,
	Icon,
	Row,
	Col,
	Avatar

} from 'antd';
const {
	Content
} = Layout;

class Home extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>
					<HeaderWX name="个人中心"/>
					<Content>
						<div>
							<Avatar
								src = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								shape = "square"
								className="memberImg"
							/>
						</div>
						<div className="memberNum">
							<span>drizzle</span>
							<span>会员号：12345678901</span>
						</div>
						<Link to='/persoange'>
							<div className="memberInfo">
								个人资料
								<Icon type="right"/>
							</div>
						</Link>
					</Content>
						<Row style={{backgroundColor:"#fff"}}>
							<Col span={20} offset={2} >
								<div className="integral">
									<span className="integralIcon"></span>
									<span>当前积分</span>	
									<span className="integralNum">0</span>						
								</div>
								<div className="store">
									<span className="storeIcon"></span>
									<span>积分商城</span>
									<span>一大波好礼等你兑换</span>
								</div>

							</Col>
						</Row>
						<Row style={{backgroundColor:"#fff",marginTop:".1rem"}}>
							<Col span={24}>
								<div className="industry">
									<span className="industryIcon"></span>
									<span>工业达人</span>
									<Icon type="right" />
								</div>
								<div className="detail">
									<span className="detailIcon"></span>
									<span>积分明细</span>
									<Icon type="right" />
								</div>
							</Col>
						</Row>
				</Layout>


		)
	}
}



export default Home;