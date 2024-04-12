import React from 'react'
import { Modal, Input, Form, Select, DatePicker } from "antd";

export default function BookingModal1({isModalOpen, handleCancel, handleOk, form, payload}) {
  return (
    <>
    <Modal
    title="Personal Detail"
    open={isModalOpen}
    onClick={handleOk}
    onCancel={handleCancel}
  >
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="First Name"
        name="First Name"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="Last Name"
        rules={[
          { required: true, message: "Please input your Last name!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Email"
        label="Email"
        rules={[
            { required: true, message: "Please input your Email Id!" },
          ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Phone Number"
        label="Phone Number"
        rules={[
          { required: true, message: "Please input your Phone Number!" },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  </Modal>
</>
  )
}
