// import Password from 'antd/lib/input/Password';
// import React from 'react';
import { Link } from 'react-router-dom';
// import './Style1.css';

// export const Contact = () => {
//   return (
//     <div>
//       <header>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             {/* <li><Link to="/about">About</Link></li> */}
//             <li><Link to="/contact">contact</Link></li>

//           </ul>
//         </nav>
//       </header>

//       {/* <h3> Create Account</h3>
//       <form action='#' method='post' className='form'>
//         <div>
//           <input type="text" placeholder='firstname'></input>
//           <input type="text" placeholder='lastname'></input>
//         </div>

//         <input type="text" placeholder='email'></input>

//         <div>
//         <input type="password" placeholder='password'></input>
//         <input type="password" placeholder='confirm password'></input>
//         </div>

//         <button>submit</button>

      


//       </form> */}
//     </div>
//   )
// }

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

// const Contact = () => {
  export const Contact = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <><div>
      <header>
        <nav>
          <ul>
            <li ><Link to="/" style={{textDecoration:'none',color:'black'}}>About</Link></li>
            {/* <li><Link to="/about">About</Link></li> */}
            <li><Link to="/contact" style={{textDecoration:'none',color:'black'}}>contact</Link></li>

          </ul>
        </nav>
      </header>
    </div><>
        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
        >
          Form disabled
        </Checkbox>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onValuesChange={onFormLayoutChange}
          disabled={componentDisabled}
        >
          <Form.Item label="Chekbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
          <Form.Item label="Radio">
            <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: 'Light',
                  value: 'light',
                  children: [
                    {
                      title: 'Bamboo',
                      value: 'bamboo',
                    },
                  ],
                },
              ]} />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                    },
                  ],
                },
              ]} />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="RangePicker">
            <RangePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="TextArea">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </></>
  );
};

// export default Contact;

  