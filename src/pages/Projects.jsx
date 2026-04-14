import React from 'react';
import { Col, Row, Typography } from 'antd';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content.jsx';

const { Title, Paragraph } = Typography;

export default function Projects() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Our Projects
          </p>
          <Title className="!mb-4 !text-4xl !text-primary">
            A modern portfolio of residential and commercial work
          </Title>
          <Paragraph className="!text-base !leading-8 !text-slate-600">
            These featured concepts showcase the kinds of spaces and engineering
            support Vigneshwara Constructions can deliver across project categories.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} md={12} xl={8} key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
