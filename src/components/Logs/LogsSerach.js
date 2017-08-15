import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;


class SearchLogForm extends React.Component {
  componentDidMount() {
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchelogs } = this.props;
    const loginname = this.props.form.getFieldValue('useraccount');
    const searchvalue = { loginname };
    /* 调用父组件的searchelogs查询方法 */
    searchelogs(searchvalue);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('useraccount')(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="帐号名称" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('logintime')(<Input prefix={<Icon type="calendar" style={{ fontSize: 13 }} />} placeholder="登录时间" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="small" >
            查询
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(SearchLogForm);

export default WrappedHorizontalLoginForm;
