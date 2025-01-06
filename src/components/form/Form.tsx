import { Form, Input } from 'antd';

const { TextArea } = Input;

const FormUploadFilm = ({
  setTitleFlim,
  setDescription,
  titleFlim,
  description,
}: {
  setTitleFlim: (title: string) => void;
  setDescription: (description: string) => void;
  titleFlim: string;
  description: string;
}) => {
  return (
    <div className="w-full">
      <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="vertical"
        disabled={false}
        //style={{ maxWidth: 600 }}
        className="w-full"
      >
        <Form.Item label="Title Flim" name="title">
          <Input
            type="text"
            placeholder="Title Flim"
            value={titleFlim}
            onChange={(e) => setTitleFlim(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea
            rows={4}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormUploadFilm;
