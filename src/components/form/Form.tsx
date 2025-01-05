import { Form, Input } from 'antd';

const { TextArea } = Input;

const FormUploadFilm = () => {
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        disabled={false}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>

        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormUploadFilm;
