import React, {
	Component
} from 'react';

import classNames from 'classnames';

import '../static/css/personage.css';

import HeaderWX from './header.js';

import {
	Select,
	Layout,
	Avatar,
	Icon,
	Button,
	Row,
	Col
} from 'antd';

const {
	Content
} = Layout;

const styles = {
	item: {
		padding: '.1rem .2rem',
		border: '2px solid rgb(239,168,172)',
		float: 'left',
		borderRadius: '.3rem',
		margin: '.1rem 0',
		marginRight: '.2rem'
	},
	itemChecked: {
		padding: '.1rem .2rem',
		border: '2px solid rgb(239,168,172)',
		float: 'left',
		borderRadius: '.3rem',
		margin: '.1rem 0',
		marginRight: '.2rem',
		color: '#fff',
		backgroundColor: '#e50012'
	},
	btn: {
		width: '100%',
		backgroundColor: '#e50012',
		color: '#fff',
		fontSize: '.3rem',
		border: 'none',
		marginTop: '.4rem'
	},
	professional: {
		margin: '.2rem 0 .4rem'
	},
	professionalWord: {
		marginBottom: '.1rem'
	},
	business: {
		marginBottom: '.4rem'
	}
}

const Option = Select.Option;

class Personage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		}
		this._HandClick = this._HandClick.bind(this);
	}
	_HandClick(index) {
		this.setState({
			index: this.state.index === index ? -1 : index
		});
	}

	render() {
		const Business = ["新能源", "汽车电子&零部件", "半导体", "3C&家电", "一般工业", "建筑", "医疗&食品"]
		const Product = ["化学品", "个人防护", "安防", "搬运存储", "清洁工具", "金属加工", "紧固件", "气动液压", "工具", "仪器仪表", "流体控制", "电气"]
		const styleName = this.state.isChecked == true ? 'styles.itemChecked' : 'styles.item';
		console.log(styleName);
		return (
			<Layout>
				<HeaderWX name="个人资料"/>
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
					</Content>
					<Row>
						<Col span={22} offset={1}>
						<div className="professional" style={styles.professional}>
							<div className="professionalWord" style={styles.professionalWord}>
								职业类别
							</div>
							<Select
								defaultValue="其他"
								style={{width:'6.4rem'}}
							>
								<Option value="其他">其他</Option>
								<Option value="工程师">工程师</Option>
								<Option value="采购员">采购员</Option>
								<Option value="产品经理">产品经理</Option>
							</Select>
						</div>
						</Col>	
					</Row>
					<Row style={styles.business}>
						<Col span={22} offset={1}>
						<div className="business" >
							<div>感兴趣的行业（多选）</div>
							<ul className="businessItem">
								{
									Business.map((name,index)=>
										<li 
											key={index} 
											style={styles.item} 
											onClick={(e)=>this._HandClick(index,e)}
											className={classNames({active:index===this.state.index})}
										>
										{name}</li>
									)
								}
							</ul>
						</div>
					</Col>
					</Row>
					<Row>
					<Col span={22} offset={1}>
						<div className="product">
							<div>感兴趣的产品（多选）</div>
							<ul className="productItem">
								{
									Product.map(name=>
										<li key={name} style={styles.item}>{name}</li>
									)

								}
							</ul>
						</div>
						</Col>
					</Row>
					<Row>
						<Col span={22} offset={1}>
							<Button style={styles.btn}>提交</Button>
						</Col>
					</Row>
					
			</Layout>
		)
	}
}


export default Personage;