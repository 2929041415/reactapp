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
      title: '操作人',
      dataIndex: 'handlename',
      key: 'handlename',
    },
    {
      title: '所属学校',
      dataIndex: 'handleschool',
      key: 'handleschool',
    },
    {
      title: '操作ip',
      dataIndex: 'handleip',
      key: 'handleip',
    },
    {
      title: '操作菜单',
      dataIndex: 'handlemenu',
      key: 'handlemenu',
    },
    {
      title: '操作描述',
      dataIndex: 'handledescription',
      key: 'handledescription',
    },
    {
      title: '操作时间',
      dataIndex: 'handletime',
      key: 'handletime',
    },
    {
      title: '操作结果',
      dataIndex: 'handleresult',
      key: 'handleresult',
      render: (text, record) => (
        record.handleresult === '0' ? '成功' : '失败'
      ),
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
  const { list, total, pageNum } = state.syshandlelogs;
  return {
    loading: state.loading.models.syshandlelogs,
    list,
    total,
    pageNum,
  };
}

export default connect(mapStateToProps)(Logs);
