import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import styles from './common.css';
import LogsComponents from '../components/Logs/Logs';
import SysHandleLogs from '../components/SysHandleLogs/SysHandleLogs';
import SysErrorLogs from '../components/SysErrorLogs/SysErrorLogs';
import MainLayout from '../components/MainLayout/MainLayout';

const TabPane = Tabs.TabPane;

function Logs({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="系统登录日志" key="1"><LogsComponents /></TabPane>
          <TabPane tab="系统操作日志" key="2"><SysHandleLogs /></TabPane>
          <TabPane tab="系统异常日志" key="3"><SysErrorLogs /></TabPane>
        </Tabs>
      </div>
    </MainLayout>
  );
}


export default connect()(Logs);
