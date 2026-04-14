import React from "react";
import { Card, Col, Row, Typography } from "antd";
import OwnerImage from "../assets/Owner.png";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            About Vigneshwara Constructions
          </p>
          <Title className="!mb-4 !text-4xl !text-primary">
            Building with planning, discipline, and trust
          </Title>
          <Paragraph className="!text-base !leading-8 !text-slate-600">
            Vigneshwara Constructions is focused on helping clients transform
            ideas into well-planned, buildable spaces. We combine engineering
            knowledge, practical coordination, and responsive support to guide
            projects with confidence in Karimnagar and nearby areas.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={14}>
            <Card className="h-full border border-slate-200 shadow-soft">
              <Title level={3} className="!text-primary">
                Who We Are
              </Title>
              <Paragraph className="!text-base !leading-8 !text-slate-600">
                Our work spans builders and supervision, digital land surveys,
                architectural plans, municipal and G.P permissions, structural
                designs, interior designs, elevation designs, and estimations
                and valuations. Every project is approached with attention to
                site conditions, design practicality, and long-term value.
              </Paragraph>
              <Paragraph className="!text-base !leading-8 !text-slate-600">
                We aim to make the process easier for homeowners, landowners,
                and developers by offering clear guidance and dependable
                execution support at every stage.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={10}>
            <Card className="h-full border-none bg-primary text-white shadow-soft">
              <div className="flex flex-col items-center gap-6 text-center">
                <img
                  src={OwnerImage}
                  alt="Owner"
                  className="h-40 w-40 rounded-full border-4 border-white object-cover shadow-xl"
                />
                <div>
                  <Title level={3} className="!text-white">
                    Owner Information
                  </Title>
                  <Paragraph className="!mb-3 !text-base !leading-8 !text-slate-200">
                    <strong className="text-white">Ponnam Ganesh</strong>
                  </Paragraph>
                  <Paragraph className="!mb-5 !text-base !leading-8 !text-slate-200">
                    Civil Engineer, Vigneshwara Constructions.
                  </Paragraph>
                </div>
              </div>
              <Paragraph className="!text-base !leading-8 !text-slate-200">
                With a practical engineering perspective and client-focused
                approach, he helps ensure that every project balances technical
                accuracy, aesthetics, permissions awareness, and smooth site
                coordination.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Our Vision",
              text: "To create dependable construction solutions that bring confidence, quality, and long-term value to every client.",
            },
            {
              title: "Our Mission",
              text: "To deliver practical planning, disciplined execution support, and responsive service throughout every stage of construction.",
            },
            {
              title: "Our Promise",
              text: "To keep each project grounded in clarity, accountability, and design choices that work in the real world.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="border border-slate-200 shadow-soft"
            >
              <Title level={4} className="!text-primary">
                {item.title}
              </Title>
              <Paragraph className="!mb-0 !text-base !leading-8 !text-slate-600">
                {item.text}
              </Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
