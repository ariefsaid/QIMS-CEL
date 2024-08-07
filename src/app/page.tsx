/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{' '}
                    <Link href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Accounting made simple for small businesses.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don't get audited.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600 sm:text-center">
                  Our software prioritizes ease of use over accuracy, making your bookkeeping experience smoother than ever.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    href="/register"
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Get 6 months free
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Watch video
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to run your books.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Well everything you need if you aren\'t that picky about minor details like tax compliance.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Loved by businesses worldwide.
            </h2>
            {/* Add testimonials here */}
          </div>
        </div>

        {/* Pricing section */}
        <div className="py-24 sm:pt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Simple pricing, for everyone.
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              It doesn\'t matter what size your business is, our software won\'t work well for you.
            </p>
            {/* Add pricing tiers here */}
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                If you can\'t find what you\'re looking for, email our support team and if you\'re lucky someone will get back to you.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {/* Add FAQ items here */}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
