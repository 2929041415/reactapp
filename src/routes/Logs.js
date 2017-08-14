import React from 'react';
import { connect } from 'dva';
import styles from './Logs.css';

function Logs() {
  return (
    <div className={styles.normal}>
      Route Component: Logs
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Logs);
