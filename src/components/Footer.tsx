import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/taxpal-logo.png" alt="TaxPal Logo" width={32} height={32} />
          <span className="ml-2 text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} TaxPal. All rights reserved.
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/features" className="text-sm text-gray-500 hover:text-gray-700">Features</Link></li>
            <li><Link href="/testimonials" className="text-sm text-gray-500 hover:text-gray-700">Testimonials</Link></li>
            <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-700">Pricing</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link href="https://twitter.com/taxpal" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter-icon.png" alt="Twitter" width={20} height={20} />
          </Link>
          <Link href="https://github.com/taxpal" target="_blank" rel="noopener noreferrer">
            <Image src="/github-icon.png" alt="GitHub" width={20} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
