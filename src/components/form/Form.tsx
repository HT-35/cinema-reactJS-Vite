import { Form, Input } from 'antd';

const { TextArea } = Input;

import './index.css';
import { useEffect } from 'react';

const FormUploadFilm = ({
  setTitleFlim,
  setDescription,
  titleFlim,
  description,
  setYear,
  year,
}: {
  setTitleFlim: (title: string) => void;
  setDescription: (description: string) => void;
  titleFlim: string;
  description: string;
  setYear: (year: number) => void;
  year: number;
}) => {
  useEffect(() => {
    console.log(titleFlim);
    console.log(description);
    console.log(year);
  }, [titleFlim, description, year]);

  return (
    <div className="w-full">
      <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="vertical"
        disabled={false}
        //style={{ fontSize: '20px', fontWeight: 'bold' }}
        className="w-full"
        size="large"
      >
        <Form.Item label="Tên Phim" className="custom-label">
          <Input
            type="text"
            placeholder="Vui lòng nhập tên phim"
            value={titleFlim}
            onChange={(e) => setTitleFlim(e.target.value)}
          />
        </Form.Item>
        <Form.Item className="custom-label" label="Năm Sản Xuất">
          <Input
            type="number"
            placeholder="Vui lòng nhập năm sản xuất"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </Form.Item>

        <Form.Item className="custom-label" label="Mô Tả">
          <TextArea
            rows={4}
            placeholder="Vui lòng nhập mô tả phim"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormUploadFilm;
