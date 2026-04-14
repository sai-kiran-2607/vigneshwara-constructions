import React from 'react';
import { Card, Tag } from 'antd';

export default function ProjectCard({ title, image, category, location }) {
  return (
    <Card
      hoverable
      cover={
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover"
        />
      }
      className="overflow-hidden border border-slate-200 shadow-soft transition duration-300 hover:-translate-y-2"
    >
      <Tag className="mb-3 rounded-full border-none bg-accent/10 px-3 py-1 text-accent">
        {category}
      </Tag>
      <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
      <p className="mb-0 text-sm text-slate-500">{location}</p>
    </Card>
  );
}
