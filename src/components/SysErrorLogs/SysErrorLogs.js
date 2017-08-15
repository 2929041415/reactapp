import React from 'react';
import { connect } from 'dva';
import { Table, Pagination } from 'antd';
import { routerRedux } from 'dva/router';
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
      title: '操作帐号',
      dataIndex: 'handleaccount',
      key: 'handleaccount',
    },
    {
      title: '操作ip',
      dataIndex: 'handleip',
      key: 'handleip',
    },
    {
      title: '操作菜单',
      dataIndex: 'menuname',
      key: 'menuname',
    },
    {
      title: '操作描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '操作时间',
      dataIndex: 'createtime',
      key: 'createtime',
    },
  ];

  return (
    <div>
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
          showTotal={(total, range) => `${range[0]}-${range[1]} 条 共 ${total} 条`}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
          showSizeChanger={SHOW_CHANGER}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, pageNum } = state.syserrorlogs;
  return {
    loading: state.loading.models.syserrorlogs,
    list,
    total,
    pageNum,
  };
}

export default connect(mapStateToProps)(Logs);
