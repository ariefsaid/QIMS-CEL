'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <Hero />

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Key Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for efficient quality inspections
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Mobile-Optimized Inspections',
                  description: 'Conduct inspections anywhere, even offline. Sync data automatically when back online. Capture photos and documents on-site.',
                  icon: '📱',
                },
                {
                  name: 'Intelligent Resource Allocation',
                  description: 'Assign inspectors based on skills and availability. Manage assets and materials efficiently. Optimize project timelines and resource utilization.',
                  icon: '🧠',
                },
                {
                  name: 'Real-Time Project Tracking',
                  description: 'Monitor project progress with live updates. Track milestones and deadlines effortlessly. Generate instant status reports for stakeholders.',
                  icon: '📊',
                },
                {
                  name: 'Comprehensive Reporting',
                  description: 'Create customizable inspection reports. Generate weekly and final project reports. Export data in client-preferred formats.',
                  icon: '📄',
                },
                {
                  name: 'Asset and Material Management',
                  description: 'Track asset conditions and calibration dates. Manage material inventory in real-time. Streamline request and approval processes.',
                  icon: '🔧',
                },
                {
                  name: 'Seamless Integration',
                  description: 'Connect with existing ERP systems. Ensure data consistency across platforms. Reduce manual data entry and errors.',
                  icon: '🔗',
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span className="text-3xl">{feature.icon}</span>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Why Choose QIMS section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              Why Choose QIMS?
            </h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Boost Efficiency: Reduce inspection time by up to 40%',
                'Enhance Accuracy: Minimize human errors with standardized digital forms',
                'Improve Visibility: Gain insights with real-time data and analytics',
                'Increase Collaboration: Connect teams across locations seamlessly',
                'Adapt Quickly: Flexible system that grows with your business needs',
              ].map((item, index) => (
                <li key={index} className="text-white flex items-start">
                  <svg className="h-6 w-6 text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action section */}
        <div className="py-24 sm:pt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                QIMS is more than just software; it's your partner in quality assurance.
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/register"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </Link>
                <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
