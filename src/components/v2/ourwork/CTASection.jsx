import React from "react";


export default function CTASection() {
  return (
    <section className="bg-yellow-50 py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 mb-3">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20.5C6.753 20.5 2 15.747 2 10.5S6.753.5 12 .5s10 4.753 10 10-4.753 10-10 10z" />
            </svg>
          </div>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mb-4" />
        </div>
  <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4 text-yellow-600">
          Ready to Advance Health Integrity?
        </h2>
        <p className="text-lg text-gray-800 mb-10">
          Connect with Altibbe to explore a pilot, partnership, or tailored solution for your region.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact?type=collaboration"
            className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold text-lg shadow hover:bg-yellow-300 transition"
          >
            Start a Conversation &rarr;
          </a>
          <a
            href="/hedamo"
            className="inline-block px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            See Hedamo System
          </a>
        </div>
      </div>
    </section>
  );
}
