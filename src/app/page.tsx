import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">QIMS: Quality Inspection Management System</h1>
          <p className="text-xl text-gray-600">Revolutionizing quality inspection processes across industries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Key Features</h2>
            <ul className="space-y-2">
              {['Mobile-Optimized Inspections', 'Real-Time Project Tracking', 'Comprehensive Reporting', 'Asset Management', 'Seamless Integration'].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose QIMS?</h2>
            <ul className="space-y-2">
              {['Boost Efficiency', 'Enhance Accuracy', 'Improve Visibility', 'Increase Collaboration', 'Adapt Quickly'].map((reason, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
        <Link href="/dashboard" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Explore Dashboard
        </Link>
        </div>

    </div>
  );
}
