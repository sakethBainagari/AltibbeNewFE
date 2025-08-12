// src/components/v2/hedamopage/StakeholderUseCases.tsx

export default function StakeholderUseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Built for Agencies, Buyers, Producers, and Consumers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Agency Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🏢</span>
            <h3 className="font-semibold text-lg mb-2">Agencies</h3>
            <p className="text-gray-600">Access to verified data, streamlined workflows, and compliance tools for efficient operations.</p>
          </div>
          {/* Buyers Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">💼</span>
            <h3 className="font-semibold text-lg mb-2">Buyers</h3>
            <p className="text-gray-600">Transparent sourcing, real-time insights, and secure transactions for confident decision-making.</p>
          </div>
          {/* Producers Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🌾</span>
            <h3 className="font-semibold text-lg mb-2">Producers</h3>
            <p className="text-gray-600">Direct market access, digital records, and support for sustainable practices and growth.</p>
          </div>
          {/* Tech Providers Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🖥️</span>
            <h3 className="font-semibold text-lg mb-2">Tech Providers</h3>
            <p className="text-gray-600">Integration-ready APIs, robust infrastructure, and opportunities for innovation and collaboration.</p>
          </div>
          {/* End Consumers Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">👥</span>
            <h3 className="font-semibold text-lg mb-2">End Consumers</h3>
            <p className="text-gray-600">Greater transparency, product traceability, and confidence in quality and ethical sourcing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
