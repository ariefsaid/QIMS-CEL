import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
