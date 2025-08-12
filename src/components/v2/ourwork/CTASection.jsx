import React from "react";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
          Ready to Advance Health Integrity?
        </h2>
        <p className="text-lg text-gray-200 mb-10">
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
