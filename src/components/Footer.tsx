import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          QIMS
        </Link>

        <div className="flex space-x-4">
          <span className="ml-2 text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} QIMS. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
