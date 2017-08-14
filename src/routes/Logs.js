import React from 'react';
import { connect } from 'dva';
import styles from './common.css';
import LogsComponents from '../components/Logs/Logs';
import MainLayout from '../components/MainLayout/MainLayout';

function Logs({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <LogsComponents />
      </div>
    </MainLayout>
  );
}


export default connect()(Logs);
