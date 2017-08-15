import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;


class SearchLogForm extends React.Component {
  componentDidMount() {
  }
  handleSubmit = (e) => {
    e.preventDefault();
    /* 拿到父组件的方法 */
    const { searchelogs } = this.props;
    const loginname = this.props.form.getFieldValue('useraccount') === undefined ? null : this.props.form.getFieldValue('useraccount');
    const loginschool = this.props.form.getFieldValue('loginschool') === undefined ? null : this.props.form.getFieldValue('loginschool');
    const searchvalue = { loginname, loginschool };
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
          {getFieldDecorator('loginschool')(<Input prefix={<Icon type="home" style={{ fontSize: 13 }} />} placeholder="学校" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('logintime')(<Input prefix={<Icon type="calendar" style={{ fontSize: 13 }} />} placeholder="登录时间" />)}
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
