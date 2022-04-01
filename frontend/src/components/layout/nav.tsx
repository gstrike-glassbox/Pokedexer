import { FC, useState } from 'react';
import 'antd/dist/antd.css';
import { Menu, Row, Col } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const Navbar: FC = () => {

    const [iconState, setIconState] = useState({current: ""});

    const handleClick = (e: { key: any; }) => {
        console.log('click ', e);
        setIconState({ current: e.key });
    };


    return (

        <div className="site-card-wrapper" style={{ textAlign: 'center', zIndex: 1, width: '100%' }}>
            <Row>
                <Col span={24}>
                    <Menu onClick={handleClick} selectedKeys={[iconState.current]}  theme="dark" mode="horizontal">
                        <Menu.Item key="mail" icon={<MailOutlined />}>
                            Navigation One
                        </Menu.Item>
                        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                            Navigation Two
                        </Menu.Item>
                        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                Navigation Four - Link
                            </a>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar;