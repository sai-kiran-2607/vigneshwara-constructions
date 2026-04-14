import React, { useMemo, useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const { Header } = Layout;

const navItems = [
  { key: '/', label: <Link to="/">Home</Link> },
  { key: '/about', label: <Link to="/about">About</Link> },
  { key: '/services', label: <Link to="/services">Services</Link> },
  { key: '/projects', label: <Link to="/projects">Projects</Link> },
  { key: '/contact', label: <Link to="/contact">Contact</Link> },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const selectedKey = useMemo(() => {
    if (location.pathname === '/') {
      return ['/'];
    }

    return [
      navItems.find((item) => item.key !== '/' && location.pathname.startsWith(item.key))?.key || '/',
    ];
  }, [location.pathname]);

  const handleMobileNav = ({ key }) => {
    setOpen(false);
    navigate(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-slate-200 bg-white px-0 shadow-sm">
      <div className="section-shell flex h-full items-center justify-between gap-4">
        <BrandLogo linked size="sm" showText mobileShowText className="max-w-[calc(100%-56px)]" />

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:flex">
          <Menu
            mode="horizontal"
            selectedKeys={selectedKey}
            items={navItems}
            className="min-w-0 flex-1 justify-end bg-transparent text-sm font-semibold text-primary"
          />
          <Button
            type="primary"
            size="large"
            icon={<PhoneOutlined />}
            href="tel:+917207601556"
            className="border-none bg-accent font-semibold shadow-soft hover:!bg-[#bf7720]"
          >
            Call Now
          </Button>
        </div>

        <Button
          type="text"
          icon={<MenuOutlined className="text-xl text-primary" />}
          className="flex !h-10 !w-10 !items-center !justify-center lg:!hidden"
          onClick={() => setOpen(true)}
        />
      </div>

      <Drawer
        title={<BrandLogo size="sm" />}
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode="inline"
          selectedKeys={selectedKey}
          items={navItems}
          onClick={handleMobileNav}
          className="border-none"
        />
        <Button
          type="primary"
          size="large"
          block
          href="tel:+917207601556"
          className="mt-4 border-none bg-accent font-semibold hover:!bg-[#bf7720]"
        >
          Call
        </Button>
      </Drawer>
    </Header>
  );
}
