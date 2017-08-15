import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

const RouterConfig = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path: '/users',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, require('./routes/Users'));
        });
      },
    },
    {
      path: '/logs',
      name: 'LogsPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          /* 注册多个model */
          registerModel(app, require('./models/logs'));
          registerModel(app, require('./models/syshandlelog'));
          registerModel(app, require('./models/syserrorlog'));
          cb(null, require('./routes/Logs'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}


export default RouterConfig;
