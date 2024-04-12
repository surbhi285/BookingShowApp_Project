import React, { useState, useRef } from "react";
import { Form } from "antd";
import ShowsList from "../bookingPage/ShowsList";
import BookingModal1 from "./BookingModal1";
import BookingModal2 from "./BookingModal2";
import BookingModal3 from "./BookingModal3";
import ShowsPage from "../bookingPage/ShowsPage";

export default function BookingRouter() {
  const [updatedCount, setUpdatedCount] = useState(0);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false)
  const form = Form.useForm();

  let payload = useRef({
    operation: "",
    data: {},
  });

  const initFormData = () => {
    payload.current.data
      ? form.setFieldsValue(payload.current.data)
      : form.resetFields();
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
    setIsModalOpen2(true);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
    setIsModalOpen3(true);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setIsModalOpen1(true);
  };

  const handleOk3 = () => {
    setIsModalOpen3(false);
  };

  const handleCancel3 = () => {
    setIsModalOpen3(false);
    setIsModalOpen2(true);
  };

  return (
    <>
      <BookingModal1
        isModalOpen={isModalOpen1}
        handleCancel={handleCancel1}
        handleOk={handleOk1}
        form={form}
        payload={payload}
      />
      <BookingModal2
        isModalOpen={isModalOpen2}
        handleCancel={handleCancel2}
        handleOk={handleOk2}
        form={form}
        payload={payload}
        updatedCount = {updatedCount}
      />
      <BookingModal3
        isModalOpen={isModalOpen3}
        handleCancel={handleCancel3}
        handleOk={handleOk3}
        updatedCount={updatedCount}
        form={form}
        payload = {payload}
      />
      <ShowsPage
      showModal={() => setIsModalOpen1(true)} 
  payload={payload}
  initFormData={initFormData}
  updatedCount={updatedCount}
/>
    </>
  );
}
