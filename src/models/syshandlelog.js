import * as logService from '../services/logs';

export default {
  namespace: 'syshandlelogs',
  state: {
    list: [],
    total: null,
    pageNum: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, pageNum } }) {
      return { ...state, list, total, pageNum };
    },
  },
  effects: {
    *query({ payload: queryparam }, { call, put }) {
      const pageNumber = Number(queryparam.pageNum) || 1;
      const data = yield call(logService.querysyshandle, { pageNum: pageNumber });
      const datarows = data.rows;
      const totalcount = data.total;
      yield put({
        type: 'save',
        payload: {
          data: datarows,
          total: parseInt(totalcount, 10),
          pageNum: pageNumber,
        },
      });
    },
    *reload(action, { put, select }) {
      const pageNum = yield select(state => state.logs.pageNum);
      yield put({ type: 'query', payload: { pageNum } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/logs') {
          const queryparam = { pageNum: Number(query.pageNum) || 1 };
          dispatch({ type: 'query', payload: queryparam });
        }
      });
    },
  },
};

