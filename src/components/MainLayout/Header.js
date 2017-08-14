import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './MainLayout.css';
import logosrc from '../../assets/logo.svg';

function Header({ location }) {
  return (
    <div>
      <div className={styles.logo} >
        <a className={styles.nav_home}>
          <img className={styles.nav_logo} src={logosrc} width="36" height="36"></img>
          React
        </a>
      </div>
      <div className={styles.username} >
        <a>
          <img src={logosrc} width="20" height="20"/>
          Administrator
        </a>
      </div>
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/">
          <Link to="/"><Icon type="home" />首页</Link>
        </Menu.Item>
        <Menu.Item key="/logs">
          <Link to="/logs"><Icon type="tool" />日志查询</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
