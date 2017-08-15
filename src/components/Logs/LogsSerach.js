import React from 'react';
import { Form, Icon, Input, Button, DatePicker } from 'antd';

const FormItem = Form.Item;


class SearchLogForm extends React.Component {
  componentDidMount() {
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      const { searchelogs } = this.props;
      const loginname = fieldsValue.useraccount === undefined ? null : fieldsValue.useraccount;
      const loginschool = fieldsValue.loginschool === undefined ? null : fieldsValue.loginschool;
      const logintime = (fieldsValue.logintime === undefined || fieldsValue.logintime === null) ? null : fieldsValue.logintime;
      const searchvalue = { loginname, loginschool, logintime };
      /* 调用父组件的searchelogs查询方法 */
      searchelogs(searchvalue);
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('useraccount')(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="帐号名称" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('loginschool')(<Input prefix={<Icon type="home" style={{ fontSize: 13 }} />} placeholder="学校" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('logintime')(<DatePicker />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="small" >
            查询
          </Button>
        </FormItem>
        <FormItem>
          <Button htmlType="submit" size="small" >
            重置
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(SearchLogForm);

export default WrappedHorizontalLoginForm;
