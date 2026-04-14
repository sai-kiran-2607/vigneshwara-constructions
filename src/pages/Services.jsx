import React from 'react';
import { Typography } from 'antd';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/content.jsx';

const { Title, Paragraph } = Typography;

export default function Services() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Services
          </p>
          <Title className="!mb-4 !text-4xl !text-primary">
            Construction and design services that support every project phase
          </Title>
          <Paragraph className="!text-base !leading-8 !text-slate-600">
            Explore our key services designed to help with planning, execution,
            approvals, design detailing, and project confidence from start to finish.
          </Paragraph>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
