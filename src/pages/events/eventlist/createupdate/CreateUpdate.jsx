import { Modal, Input, Form, Select, DatePicker } from "antd";

export default function CreateUpdate({ isModalOpen, handleOk, handleCancel }) {
  return (
    <>
      <Modal
        title="Event Detail"
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
            label="Event Id"
            name="Event Id"
            rules={[{ required: true, message: "Please input your event Id!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Event Name"
            name="Event Name"
            rules={[
              { required: true, message: "Please input your EventName!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Event Poster URL"
            label="Event Poster URL"
            rules={[
              { required: true },
              { type: "url", warningOnly: true },
              { type: "string", min: 6 },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Language">
            <Select>
              <Select.Option value="Hindi">Hindi</Select.Option>
              <Select.Option value="English">English</Select.Option>
              <Select.Option value="Punjabi">Punjabi</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="Event Duration"
            label="Event Duration"
            rules={[
              { required: true, message: "Please input your Event Duration!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Event Genre"
            label="Event Genre"
            rules={[
              { required: true, message: "Please input your Event Genre!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Event Venue"
            label="Event Venue"
            rules={[
              { required: true, message: "Please input your Event Venue!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Censor Board Rating"
            label="Censor Board Rating"
            rules={[
              {
                required: true,
                message: "Please input your Censor Board Rating!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="Event Time"
            label="Event Time"
            rules={[
              { required: true, message: "Please input your Event Time!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Price"
            label="Price"
            rules={[{ required: true, message: "Please input your Price!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
