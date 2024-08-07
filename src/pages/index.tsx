import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div> {/* Added a wrapping div for better structure */}
          <h1 className="text-4xl font-bold text-center">QIMS: Revolutionizing Quality Inspection Management</h1>
          <p className="text-xl text-center">Streamline Your Inspection Processes</p>
          <p>QIMS is a cutting-edge, mobile-first platform designed to transform how companies manage quality inspections across Indonesia. Our system empowers inspectors, project managers, and executives with real-time data and powerful tools.</p>

          <h2 className="text-2xl font-bold">Key Features:</h2>
          <ul className="list-disc list-inside">
            <li>Mobile-Optimized Inspections</li>
            <li>Intelligent Resource Allocation</li>
            <li>Real-Time Project Tracking</li>
            <li>Comprehensive Reporting</li>
            <li>Asset and Material Management</li>
            <li>Seamless Integration</li>
            <li>Intuitive Dashboards</li>
            <li>Robust Security and Compliance</li>
          </ul>

          <h2 className="text-2xl font-bold">Why Choose QIMS?</h2>
          <ul className="list-disc list-inside">
            <li>Boost Efficiency</li>
            <li>Enhance Accuracy</li>
            <li>Improve Visibility</li>
            <li>Increase Collaboration</li>
            <li>Adapt Quickly</li>
          </ul>

        
          <Link href="/login" className="mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Login
          </Link>
        </div> 
      </div>
    </main>
  );
}
