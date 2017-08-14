import React from 'react';
import { connect } from 'dva';
import { Table, Pagination } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Logs.css';
import { PAGE_SIZE, SHOW_CHANGER } from '../../constants';


function Logs({ dispatch, list: dataSource, loading, total, pageNum: current }) {
  function pageChangeHandler(page) {
    const queryparams = { pageNum: Number(page) || 1 };
    dispatch(routerRedux.push({
      pathname: '/logs',
      query: queryparams,
    }));
  }

  const columns = [
    {
      title: '登录姓名',
      dataIndex: 'loginname',
      key: 'loginname',
    },
    {
      title: '所属学校',
      dataIndex: 'loginschool',
      key: 'loginschool',
    },
    {
      title: '登录ip',
      dataIndex: 'loginip',
      key: 'loginip',
    },
    {
      title: '登录时间',
      dataIndex: 'createtime',
      key: 'createtime',
    },
    {
      title: '登录结果',
      dataIndex: 'loginresult',
      key: 'loginresult',
      render: (text, record) => (
        record.loginresult === '1' ? '成功' : '失败'
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} 条`}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
          showSizeChanger={SHOW_CHANGER}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, pageNum } = state.logs;
  return {
    loading: state.loading.models.logs,
    list,
    total,
    pageNum,
  };
}

export default connect(mapStateToProps)(Logs);
