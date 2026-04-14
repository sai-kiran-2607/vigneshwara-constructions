import React from 'react';
import { Card } from 'antd';

export default function ServiceCard({ icon, title, description }) {
  return (
    <Card
      className="h-full overflow-hidden border border-slate-200 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-accent"
      bodyStyle={{ padding: 24 }}
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
      <p className="mb-0 text-sm leading-7 text-slate-600">{description}</p>
    </Card>
  );
}
