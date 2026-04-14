import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import BrandLogo from "../components/BrandLogo";
import OwnerImage from "../assets/Owner.png";
import { projects, services } from "../data/content.jsx";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div>
      <section className="hero-overlay relative overflow-hidden">
        <div className="section-shell flex min-h-[76vh] items-center py-12 sm:min-h-[82vh] sm:py-20">
          <div className="max-w-3xl text-white">
            <div className="mb-5 inline-flex max-w-full rounded-[24px] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md sm:mb-6 sm:rounded-[28px] sm:px-5 sm:py-4">
              <BrandLogo size="md" light className="max-w-full" />
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200 sm:text-sm sm:tracking-[0.3em]">
              Ponnam Ganesh | Civil Engineer
            </p>
            <Title className="!mb-5 !text-[2.65rem] !font-bold !leading-[1.02] !text-white sm:!mb-6 sm:!text-5xl lg:!text-6xl">
              Building your dreams into reality
            </Title>
            <Paragraph className="max-w-2xl !text-[15px] !leading-8 !text-slate-100 sm:!text-lg">
              Vigneshwara Constructions delivers plans, permissions, land
              surveys, structural support, interior and elevation designs, and
              supervision services for residential and commercial projects in
              and around Karimnagar.
            </Paragraph>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact">
                <Button
                  type="primary"
                  size="large"
                  className="h-12 w-full border-none bg-accent px-8 font-semibold sm:w-auto hover:!bg-[#bf7720]"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="large"
                  ghost
                  className="h-12 w-full border-white px-8 font-semibold text-white sm:w-auto"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Our Services
              </p>
              <Title
                level={2}
                className="!mb-4 !text-3xl !text-primary sm:!text-4xl"
              >
                Engineering support built around clarity and quality
              </Title>
              <Paragraph className="!mb-0 !text-base !leading-8 !text-slate-600">
                From digital land surveys to estimations and builders
                supervision, we help clients move from concept to construction
                with confidence.
              </Paragraph>
            </div>
            <Link
              to="/services"
              className="text-base font-semibold text-primary"
            >
              Explore all services <ArrowRightOutlined />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Featured Projects
            </p>
            <Title
              level={2}
              className="!mb-4 !text-3xl !text-primary sm:!text-4xl"
            >
              Spaces shaped with engineering precision
            </Title>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <Card className="overflow-hidden border-none bg-white shadow-soft">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} lg={14}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  About Us
                </p>
                <Title level={2} className="!mb-4 !text-3xl !text-primary">
                  Led by a civil engineer who understands both design and
                  delivery
                </Title>
                <Paragraph className="!text-base !leading-8 !text-slate-600">
                  Under the leadership of Ponnam Ganesh, Vigneshwara
                  Constructions focuses on dependable service, responsive
                  communication, and engineering-backed solutions that align
                  with site realities and client expectations.
                </Paragraph>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Builders and supervision support",
                    "Digital land surveys and architectural plans",
                    "Interior and elevation design services",
                    "Estimations, valuations, and permissions guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                    >
                      <CheckCircleOutlined className="mt-1 text-accent" />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Col>
              <Col xs={24} lg={10}>
                <div className="rounded-[28px] bg-primary p-8 text-white">
                  <div className="mb-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                    <img
                      src={OwnerImage}
                      alt="Owner"
                      className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
                    />
                    <div>
                      <p className="mb-2 text-sm uppercase tracking-[0.2em] text-orange-200">
                        Owner
                      </p>
                      <h3 className="text-2xl font-semibold">Ponnam Ganesh</h3>
                      <p className="text-sm leading-7 text-slate-200">
                        Civil Engineer with hands-on experience in site
                        planning, structural coordination, and client-focused
                        delivery.
                      </p>
                    </div>
                  </div>
                  <p className="mb-8 text-sm leading-7 text-slate-200">
                    Whether you need surveys, plans, permissions, valuations, or
                    on-site supervision, we're ready to help you take the next
                    step.
                  </p>
                  <Link to="/about">
                    <Button
                      size="large"
                      className="h-12 border-none bg-white px-8 font-semibold text-primary hover:!text-primary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="rounded-[32px] bg-primary px-6 py-12 text-center text-white shadow-soft sm:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">
              Ready To Build?
            </p>
            <Title
              level={2}
              className="!mb-4 !text-3xl !text-white sm:!text-4xl"
            >
              Start your project with trusted engineering support
            </Title>
            <Paragraph className="mx-auto max-w-2xl !text-base !leading-8 !text-slate-200">
              Get in touch for digital land surveys, architectural plans,
              permissions, structural designs, interior designs, and
              supervision.
            </Paragraph>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:+917207601556">
                <Button
                  type="primary"
                  size="large"
                  className="h-12 border-none bg-accent px-8 font-semibold hover:!bg-[#bf7720]"
                >
                  Call
                </Button>
              </a>
              <Link to="/contact">
                <Button size="large" className="h-12 px-8 font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
