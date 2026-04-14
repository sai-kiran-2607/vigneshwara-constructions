import React from "react";
import { Button, Card, Col, Form, Input, Row, Typography, message } from "antd";
import { init, send } from "@emailjs/browser";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (EMAILJS_PUBLIC_KEY) {
  init(EMAILJS_PUBLIC_KEY);
}

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      message.error(
        "Email service is not configured. Please add EmailJS environment keys.",
      );
      return;
    }

    try {
      await send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: values.name,
        phone: values.phone,
        message: values.message,
      });

      message.success(
        `Thank you, ${values.name}. We will get back to you soon.`,
      );
      form.resetFields();
    } catch (error) {
      console.error("EmailJS send error:", error);
      message.error(
        "There was a problem sending your inquiry. Please try again later.",
      );
    }
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Contact Us
          </p>
          <Title className="!mb-4 !text-4xl !text-primary">
            Let's talk about your construction requirements
          </Title>
          <Paragraph className="!text-base !leading-8 !text-slate-600">
            Reach out for land surveys, plans, permissions, structural designs,
            interior designs, valuations, or a quick discussion about your next
            build.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={14}>
            <Card className="border border-slate-200 shadow-soft">
              <Title level={3} className="!mb-6 !text-primary">
                Send a Message
              </Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-2"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input size="large" placeholder="Your name" />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Your phone number" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <TextArea rows={5} placeholder="Tell us about your project" />
                </Form.Item>

                <Form.Item className="mb-0">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="h-12 border-none bg-accent px-8 font-semibold hover:!bg-[#bf7720]"
                  >
                    Submit Inquiry
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          <Col xs={24} lg={10}>
            <div className="space-y-6">
              <Card className="border border-slate-200 shadow-soft">
                <Title level={3} className="!mb-6 !text-primary">
                  Contact Details
                </Title>
                <div className="space-y-4 text-base text-slate-700">
                  <a
                    href="tel:+917207601556"
                    className="flex items-center gap-3 transition hover:text-accent"
                  >
                    <PhoneOutlined className="text-primary" />
                    <span>7207601556</span>
                  </a>
                  <a
                    href="tel:+917730823728"
                    className="flex items-center gap-3 transition hover:text-accent"
                  >
                    <PhoneOutlined className="text-primary" />
                    <span>7730823728</span>
                  </a>
                  <a
                    href="https://wa.me/917207601556"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 transition hover:text-accent"
                  >
                    <WhatsAppOutlined className="text-primary" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </Card>

              <Card className="border border-slate-200 shadow-soft">
                <Title level={3} className="!mb-4 !text-primary">
                  Address
                </Title>
                <div className="flex items-start gap-3 text-slate-700">
                  <EnvironmentOutlined className="mt-[6px] shrink-0 text-primary" />
                  <div className="space-y-2">
                    <p className="mb-0 text-base leading-8 text-slate-600">
                      Vigneshwara Constructions
                    </p>
                    <p className="mb-0 text-base leading-8 text-slate-600">
                      H.no: 3-7-152, Near Sree Chaitanya School
                    </p>
                    <p className="mb-0 text-base leading-8 text-slate-600">
                      Vavilalapally, Karimnagar - 505001
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
          <iframe
            title="Vigneshwara Constructions Location"
            src="https://www.google.com/maps?q=3-7-152%20Near%20Sree%20Chaitanya%20School%20Vavilalapally%20Karimnagar%20505001&z=16&output=embed"
            className="h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
