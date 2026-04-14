import React from 'react';
import { Layout, Typography } from 'antd';
import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const { Footer } = Layout;
const { Paragraph } = Typography;

export default function SiteFooter() {
  return (
    <Footer className="border-t border-slate-200 bg-primary px-0 py-12 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        <div>
          <div className="mb-3">
            <BrandLogo size="sm" light />
          </div>
          <Paragraph className="max-w-md text-sm leading-7 !text-slate-200">
            Building your dreams into reality with practical engineering expertise,
            dependable planning support, and disciplined site supervision.
          </Paragraph>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Quick Links</h4>
          <div className="flex flex-col gap-2 text-slate-200">
            <Link to="/" className="text-slate-200 transition hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-slate-200 transition hover:text-white">
              About
            </Link>
            <Link to="/services" className="text-slate-200 transition hover:text-white">
              Services
            </Link>
            <Link to="/projects" className="text-slate-200 transition hover:text-white">
              Projects
            </Link>
            <Link to="/contact" className="text-slate-200 transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Contact</h4>
          <div className="space-y-3 text-slate-200">
            <a href="tel:+917207601556" className="flex items-center gap-2 transition hover:text-white">
              <PhoneOutlined />
              <span>7207601556</span>
            </a>
            <a href="tel:+917730823728" className="flex items-center gap-2 transition hover:text-white">
              <PhoneOutlined />
              <span>7730823728</span>
            </a>
            <div className="flex items-start gap-2">
              <EnvironmentOutlined className="mt-1" />
              <span>H.no: 3-7-152, Near Sree Chaitanya School, Vavilalapally, Karimnagar - 505001</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-sm text-slate-300">
        (c) {new Date().getFullYear()} Vigneshwara Constructions. All rights reserved.
      </div>
    </Footer>
  );
}
