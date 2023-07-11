import { FC } from "react";
import { Button, Form, Input } from 'antd';
const MyForm: FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values)
  }
  return (
    <div style={{ width: '300px' }}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="input" label="react input">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">click</Button>
      </Form>
    </div>
  )
}
export default MyForm;