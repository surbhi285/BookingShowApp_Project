import { Modal, Input, Form, Select, DatePicker, Button } from "antd";
import { addReviewFunction } from "../../../services/review/review";

export default function AddReview({
    isModalOpen,
    handleOk,
    handleCancel,
    payload,
    form,
    setUpdatedCount,
    setReview
  }) {
    const submitForm = (values) => {
      const transformedValue = {
        ...values,
        reviewId: +values.reviewId,
        categoryId: +values.categoryId,
        userId : +values.userId,
      }

      payload.current.data = {...payload.current.data, ...transformedValue}
          if (payload.current.operation === "ADD") {
            payload.current.data.eventId = Math.random();
            addReviewFunction(payload.current.data).then((data) => {
              setReview(data)
              setUpdatedCount((count) => count + 1);
              handleCancel();
            });
          }
        }

  return (
    <>
      <Modal
        title="Add Review"
        open={isModalOpen}
        onClick={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={submitForm}
          form={form}
          autoComplete="off"
        >
          <Form.Item
            label="Review Id"
            name="reviewId"
            rules={[{ required: true, message: "Please input your review Id!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              { required: true, message: "Please input your Rating!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="review"
            label="Review"
            rules={[
                { required: true, message: "Please input your Review!" },
              ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            rules={[
                { required: true, message: "Please input your Category!" },
              ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category Id"
            name="categoryId"
            rules={[
              { required: true, message: "Please input your CategoryId!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="userId"
            label="User Id"
            rules={[
              { required: true, message: "Please input your Event Genre!" },
            ]}
          >
            <Input />
          </Form.Item>

          
          <Form.Item>
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
           Submit
          </Button>

          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
